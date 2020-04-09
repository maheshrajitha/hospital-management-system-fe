import React from 'react'
import { Container , Form, FormGroup, Col, Input, Row, Label, Card, CardBody, CardHeader , Breadcrumb , BreadcrumbItem, CustomInput, Button } from 'reactstrap'
import { addDoctor } from '../services/admin.services';
import { Redirect ,withRouter } from 'react-router';

function NewDoctor(props) {
    console.log(props);
    const [email, setEmail] = React.useState(null);
    const [fullName, setFullName] = React.useState(null);
    const [telNumber, setTelNumber] = React.useState(null);
    const [gender, setGender] = React.useState(null);
    const [specialties, setSpecialties] = React.useState(null);
    const [address, setAddress] = React.useState(null);
    const [regNumber, setRegNumber] = React.useState(null);
    const addDoctorButtonHandler = () => {
        addDoctor(fullName, email, address, specialties, gender, regNumber, telNumber).then(jsonResponse => props.history.push('/admin/dashboard')).catch(err => console.log(err)).catch(networkError => console.log(networkError));
    }
    return (
        <div className={'content'}>
            <Container fluid className={'h-100'}>
                <Row>
                    <Col md={12} className={'align-self-center'}>
                        <Breadcrumb color={'primary'}>
                            <BreadcrumbItem>Dashboard</BreadcrumbItem>
                            <BreadcrumbItem active>Add New Doctor</BreadcrumbItem>
                        </Breadcrumb>
                        <Card className={'p-4'}>
                            <CardHeader>
                                Add new Doctor
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Col md={6}>
                                            <Label for={'fullName'}>Full Name</Label>
                                            <Input bsSize={'sm'} onChange={value=>setFullName(value.target.value)} type={'text'} placeholder={'Type Fullname'} id={'fullName'} required/>
                                        </Col>
                                        <Col md={6}>
                                            <Label for={'email'}>Email</Label>
                                            <Input onChange={value=> setEmail(value.target.value)} type={'email'} placeholder={'Type Email'} id={'email'} required/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={6}>
                                            <Label for={'telNumber'}>Telephone Number</Label>
                                            <Input onChange={value=> setTelNumber(value.target.value)} type={'tel'} placeholder={'Type Telephone Number'} id={'telNumber'} required/>
                                        </Col>
                                        <Col md={6}>
                                            <div>
                                                <CustomInput onChange={value=> setGender(value.target.value)} type={'radio'} id={'genderMale'} name={'gender'} value={'male'} label={'Male'} />
                                                <CustomInput onChange={value=>setGender(value.target.value)} type={'radio'} id={'genderFemale'} name={'gender'} value={'female'} label={'Female'}/>
                                            </div>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={6}>
                                            <Label for={'specialties'}>Specialities</Label>
                                            <Input type={'textarea'} onChange={value=> setSpecialties(value.target.value)} placeholder={'Type Specialities'} id={'specialties'} required/>
                                        </Col>
                                        <Col md={6}>
                                            <Label for={'address'}>Address</Label>
                                            <Input type={'textarea'} onChange={value=> setAddress(value.target.value)} placeholder={'Type Address'} id={'address'} required/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for={'regNumber'}>Register Number</Label>
                                        <Input type={'text'} onChange={value=> setRegNumber(value.target.value)} placeholder={'Type Register Number'} id={'regNumber'} required/>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={1} className={'mr-4'}>
                                            <Button onClick={addDoctorButtonHandler} color={'primary'}>Submit</Button>
                                        </Col>
                                        <Col md={4}>
                                            <Button color={'info'}>Cancel</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withRouter(NewDoctor);
