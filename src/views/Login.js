import React from 'react'
import { Container, FormGroup, Input, Label, Form, Button, Row, Col, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/user.action';
import { login } from '../services/auth.services';
import { withRouter } from 'react-router';
import { getMyPrescriptions } from '../redux/actions/doctor.action';


const Login = (props) => {
    if (localStorage.getItem('authToken') !== null)
        window.location.replace('/admin/dashboard/1')
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [warningShow, setWarningShow] = React.useState(false);
    const userLogin = () => {
        login(email, password).then(res => {
            localStorage.setItem('authToken', res.token);
            if (res.user.role === 1)
                window.location.replace('/admin/dashboard/1');
            else if (res.user.role === 2) {
                props.history.replace('login-to-patient');
                // getMyPrescription().then(response => {
                //     props.setPrescriptions(response);
                //     props.history.replace('doctor/my-prescriptions')
                // }).catch(e => console.log(e));
                //window.location.replace('');
            }
        }).catch(e => setWarningShow(true)).catch(e => console.log(e));
    }
    return(
        <div className={'vh-100 login-screen-bg'}>
            <Container fluid className={'h-100'}>
                <Row className={'h-100'}>
                    <Col md={4} className={'align-self-center offset-md-4 bg-light'}>
                        {warningShow && <Alert color={'primary'} className={'text-center text-dark font-weight-bold mb-2'}>Wrong Email Or Password</Alert>}
                        <Form>
                            <FormGroup>
                                <Label for={'email'}>Email</Label>
                                <Input onChange={val=> setEmail(val.target.value)} type={'email'} placeholder={'Type Email Address'} id="email" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for={'password'}>Password</Label>
                                <Input onChange={val=> setPassword(val.target.value)} type={'password'} placeholder={'Type Password'} id="passowrd" required />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={userLogin} className={'btn-round'} color={'info'}>Login</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};
const mapStateToProps = (state) => ({
    user: state.userReducer.user
})

const mapDispatchToProps = dispatch=> {
    return {
        login: user => dispatch(loginUser(user)),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));