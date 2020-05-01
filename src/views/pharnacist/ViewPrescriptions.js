import React from 'react'
import { Row, Col, Spinner, Table } from 'reactstrap';
import { getPrescriptionByPatient } from '../../services/pharmacist.services';
import { connect } from 'react-redux';

function ViewPrescriptions(props) {
    const [patientList, setPatientList] = React.useState([]);
    React.useEffect(() => { 
        if (props.patient !== null)
            getPrescriptionByPatient(props.patient.id).then(response => {
                setPatientList(response);
            }).catch(e => {
                console.log(e);
            })
    }, []);
    return (
        <div className={'content'}>
            <Row>
                <Col md={12}>
                    {patientList.length === 0 ? <div className={'d-flex justify-content-center w-100'}>
                        <Spinner size={'lg'}/>
                    </div> :
                        <Table>
                            <thead>
                                <tr>
                                    <th> #</th>
                                    <th>Patient ID</th>
                                    <th>Prescription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patientList.map((patient , index) => <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{patient.patient_id}</td>
                                    <td>
                                        <img src={patient.image_url} height={50} width={50} alt={index} />
                                    </td>
                                </tr>)}
                            </tbody>
                        </Table>
                    }
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    patient: state.doctorReducer.patient
});

export default connect(mapStateToProps)(ViewPrescriptions);
