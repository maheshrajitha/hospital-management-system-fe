import React from "react";
import {
  Card,
  CardTitle,
  Row,
  Col,
  Spinner,
  Table,
  CardHeader,
  Button,
  Alert,
} from "reactstrap";
import { getAllDoctors , deleteUser  } from '../services/admin.services';
import { fetchDoctors } from '../redux/actions/admin.action';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PagesDropdown from "components/util/PagesDropdown";
import UpdateDoctor from "components/modals/UpdateDoctor";

class Dashboard extends React.Component {

  state = {
    showAlert: false,
    dropdownOpen : false
  }
  constructor(props) {
    super(props);
    if (localStorage.getItem('authToken') === null)
      window.location.replace('/');
    
  }

  componentDidMount() {
    getAllDoctors(this.props.match.params.pageNo).then(response => {
      this.props.fetchDoctors(response);
    }).catch(e => console.log(e));
    
  }

  deleteButtonHandler = (doctorId) => {
    deleteUser(doctorId,2).then(_ => window.location.reload()).catch(_ => this.props.history.push('/')).catch(_ => this.setState({ showAlert: true })).catch(_ => this.setState({ showAlert: true }));
  }


  toggle = () => {
    this.setState({
      dropdownOpen : !this.state.dropdownOpen
    });
  }
  
  render() {
    return (
      <>
        <div className="content">
          {this.state.showAlert && <Alert color={'primary'}>Sorry We Will Fix This Soon</Alert>}
          <Row className={'mb-3'}>
            <Col md={6}>
              <PagesDropdown size={this.props.pages}/>
            </Col>
            <Col className={'justify-content-end'} md={6}>
              <Link className={'btn btn-secondary'} to={'/admin/new-doctor'}>Add New Doctor</Link>
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
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Tel Number</th>
                        <th>Reg Number</th>
                        <th>Specialities</th>
                        <th>Delete</th>
                        <th>Update</th>
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
                          <td><Button onClick={() => this.deleteButtonHandler(doctor.id)} color={'dark'}>Delete</Button></td>
                          <td>
                            <UpdateDoctor id={doctor.id}/>
                          </td>
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
  doctorList: state.adminReducer.doctors,
  pages: state.adminReducer.pages
})

const mapDispatchToProps = dispatch => {
  return {
    fetchDoctors : doctorList => dispatch(fetchDoctors(doctorList))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);
