import React from 'react'
import { Modal, ModalBody, ModalHeader, Form, Input, FormGroup, Button, Label, CustomInput } from 'reactstrap';

export const AddNewDoctor = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
    return (
        <>
            <Button outline onClick={()=> setIsOpen(true)} color={'danger'}>Add New Doctor</Button>
            <Modal isOpen={isOpen} toggle={toggle} color={'secondary'}>
                <ModalHeader className={'bg-primary'}>Add New Doctor</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for={'fullName'}>full Name</Label>
                            <Input bsSize={'sm'} type={'text'} className={'form-control form-control-sm'} placeholder={'Type Doctor Name'} id={'fullName'}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'email'}>Email</Label>
                            <Input type={'email'} placeholder={'Type Doctor Email Address'} id={'email'}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'telNumber'}>Telephone Number</Label>
                            <Input type={'tel'} placeholder={'Type Telephone Number'} id={'telNumber'}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'specialities'}>Specialities</Label>
                            <Input type={'textarea'} placeholder={'Type Specialities'} id={'specialities'}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'regNumber'}>Reg Number</Label>
                            <Input type={'text'} placeholder={'Type Reg Number'} id={'regNumber'}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'gender'}>Gender</Label>
                            <Input type={'select'}>
                                <option value={'male'}>Male</option>
                                <option value={'female'}>Female</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'address'}>Address</Label>
                            <Input type={'textarea'}/>
                        </FormGroup>
                        <FormGroup>
                            <Button color={'primary'}>Add Doctor</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default AddNewDoctor;
