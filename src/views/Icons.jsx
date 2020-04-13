
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table, Spinner, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Alert } from "reactstrap";
import { fetchPatients } from '../redux/actions/admin.action';
import { connect } from "react-redux";
import { getAllPatients , deleteUser } from '../services/admin.services';
import { Link } from "react-router-dom";
class Icons extends React.Component {
  state = {
    toggle: false,
    error : null
  }
  constructor(props) {
    super(props);
    if (localStorage.getItem('authToken') === null)
      window.location.replace('/');
  }
  
  componentDidMount() {
    getAllPatients(this.props.match.params.pageNo).then(jsonResponse => {
      this.props.fetchPatients(jsonResponse);
    }).catch(e => {
      console.log(e);
    })
  }

  deleteButtonHandler = (patientId) => {
    deleteUser(patientId,3).then(_ => window.location.reload()).catch(e => this.setState({ error: e.message }));
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            {this.state.error !== null && <Alert color={'info'}>{this.state.error}</Alert>}
            <Col md="12">
              <Row>
                <Col md={6}>
                  <Dropdown toggle={this.toggle} isOpen={this.state.toggle}>
                    <DropdownToggle caret size={'sm'}>Pages</DropdownToggle>
                    <DropdownMenu>
                      {[...Array(this.props.pages)].map((v, index) => (
                        <DropdownItem key={index}>
                          <Link to={'admin/patients/'+index+1}>Page {index+1}</Link>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                <Col md={6}>
                  <Link to={'/admin/new-patient'} className={'btn btn-info btn-sm'}>Add New patient</Link>
                </Col>
              </Row>
              <Card className="demo-icons">
                <CardHeader>
                  <CardTitle tag="h5">Patients</CardTitle>
                </CardHeader>
                <CardBody className="all-icons">
                  {this.props.patientList === undefined || this.props.patientList.length === 0 ? <div className={'d-flex justify-content-center w-100'}><Spinner size={'lg'} /></div> :
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>NIC</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>DOB</th>
                          <th>Tel Number</th>
                          <th>Address</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.patientList.map(patient => (
                          <tr key={patient.id}>
                            <td>{patient.full_name}</td>
                            <td>{patient.nic}</td>
                            <td>{patient.email}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.dob}</td>
                            <td>{patient.tel_number}</td>
                            <td>{patient.address}</td>
                            <td><Button onClick={()=>this.deleteButtonHandler(patient.id)} type={'button'} color={'info'}>Delete</Button></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  patientList: state.adminReducer.patientList,
  pages: state.adminReducer.patientPages
})

const mapDispatchToProps = dispatch => ({
  fetchPatients : patientResponse=>dispatch(fetchPatients(patientResponse))
})


export default connect(mapStateToProps,mapDispatchToProps)(Icons);