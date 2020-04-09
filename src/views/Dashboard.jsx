import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Spinner,
  Table,
  CardHeader,
  Button,
  Dropdown,
  DropdownToggle
} from "reactstrap";
import { getAllDoctors } from '../services/admin.services';
import { fetchDoctors } from '../redux/actions/admin.action';
import { connect } from 'react-redux';
import AddNewDoctor from '../components/modals/AddNewDoctor';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {

  state = {
    doctorList : []
  }
  constructor(props) {
    super(props);
    if (localStorage.getItem('authToken') === null)
      window.location.replace('/');
    
  }

  componentDidMount() {
    getAllDoctors().then(response => {
      this.props.fetchDoctors(response);
      console.log(this.props.doctorList);
    }).catch(e => console.log(e));
  }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Capacity</p>
                        <CardTitle tag="p">150GB</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Revenue</p>
                        <CardTitle tag="p">$ 1,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className={'mb-3'}>
            <Col md={6}>
              <Dropdown>
                <DropdownToggle color={'primary'}>Page</DropdownToggle>
              </Dropdown>
            </Col>
            <Col className={'justify-content-end'} md={6}>
              <Link className={'btn btn-secondary btn-sm'} to={'/admin/new-doctor'}>Add New Doctor</Link>
            </Col>
          </Row>
          <Row>
            <Col md={12} className={'align-self-center'}>
              {this.props.doctorList.length === 0 ? <div className={'w-100 d-flex justify-content-center'}><Spinner size={'lg'} /></div> :
                <Card className={'pl-4'}>
                  <CardHeader>
                    <CardTitle tag="h4">Available Doctors</CardTitle>
                  </CardHeader>
                  <Table responsive bordered>
                    <thead className={'text-primary'}>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Tel Number</th>
                        <th>Reg Number</th>
                        <th>Specialities</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.doctorList.map(doctor => (
                        <tr key={doctor.id}>
                          <td>{doctor.full_name}</td>
                          <td>{doctor.email}</td>
                          <td>{doctor.gender}</td>
                          <td>{doctor.tel_number}</td>
                          <td>{doctor.reg_number}</td>
                          <td>{doctor.specialities}</td>
                          <td><Button color={'dark'}>Delete</Button></td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card>
              }
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  doctorList: state.adminReducer.doctors
})

const mapDispatchToProps = dispatch => {
  return {
    fetchDoctors : doctorList => dispatch(fetchDoctors(doctorList))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);
