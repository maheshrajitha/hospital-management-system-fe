import React from 'react'
import { Row, Col, Spinner, Card, CardHeader, CardBody, Table, Alert } from 'reactstrap';
import { getMyPrescriptions } from '../../services/patient.service';
import PagesDropdown from 'components/util/PagesDropdown';

export default function MyPrescriptions(props) {
    const [prescriptionList, setPrescriptionList] = React.useState([]);
    const [pages, setPages] = React.useState(0);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        getMyPrescriptions(props.match.params.pageNo).then(response => {
            setPrescriptionList(response.prescriptions);
            setPages(response.pages);
        }).catch(error => { 
            setError(error.response.data.MESSAGE);
        });
    }, []);

    return (
        <div className={'content'}>
            <Row>
                <Col md={12}>
                    {error !== null && <Alert>{error}</Alert>}
                    <Row>
                        <Col md={4}>
                            <PagesDropdown size={pages}/>
                        </Col>
                    </Row>
                    {prescriptionList.length === 0 ? <div className={'d-flex justify-content-center w-100'}>
                        <Spinner size={'lg'}/>
                    </div>
                        :
                        <Card>
                            <CardHeader>My Prescriptions</CardHeader>
                            <CardBody>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Issued Date</th>
                                            <th>Prescription</th>
                                            <th>Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {prescriptionList.map((prescription, index) => <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{prescription.issued_date}</td>
                                            <td><img src={prescription.image_url} width={100} height={100} alt={'...'}/></td>
                                            <td>{prescription.comment}</td>
                                        </tr>)}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    }
                </Col>
            </Row>
        </div>
    )
}
