import React from 'react'
import { Row, Col, Table, Card, CardBody, Button } from 'reactstrap'
import { connect } from 'react-redux';
import { getMyPrescription , deletePrescription } from '../../services/doctor.services';
import { getMyPrescriptions } from '../../redux/actions/doctor.action';

function MyPrescriptions(props) {
    React.useEffect(() => {
        getMyPrescription().then(response => {
            props.setPrescriptions(response);
        }).catch(e => console.log(e));
        // console.log('hello');
        // props.setPrescriptions('hjhv');
    }, []);
    const deletePrescriptionButtonHandler = (prescriptionId) => {
        deletePrescription(prescriptionId).then(_ => props.history.replace(props.location.pathname)).catch(e => console.log(e));
    }
    return (
        <div className={'content'}>
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <Table responsive bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Comment</th>
                                        <th>Image</th>
                                        <th>Patient Name</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.prescriptions.map((prescription,index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>
                                                {prescription.comment}
                                            </td>
                                            <td>
                                                <img src={prescription.image_url} height={50} width={50} alt={index}/>
                                            </td>
                                            <td>
                                                {prescription.full_name}
                                            </td>
                                            <td>
                                                <Button onClick={()=> deletePrescriptionButtonHandler(prescription.id)} outline color={'danger'} size={'sm'}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
const mapStateToProps = (state) => ({
   prescriptions : state.doctorReducer.prescriptions 
});
const mapDispatchToProps = dispatch => ({
    setPrescriptions: prescriptions => dispatch(getMyPrescriptions(prescriptions))
})

export default connect(mapStateToProps,mapDispatchToProps)(MyPrescriptions);