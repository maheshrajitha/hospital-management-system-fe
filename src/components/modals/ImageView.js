import React from 'react'
import { Modal, ModalBody } from 'reactstrap'

export default function ImageView({ imageUrl }) {
    const [open, isOpen] = React.useState(false);
    const toggle = () => {
        isOpen(!open);
    }
    return (
        <>
            <img onClick={toggle} src={imageUrl} height={80} width={80} alt={'...'} className={'img-fluid'} />
            <Modal isOpen={open} toggle={toggle}>
                <ModalBody>
                    <img src={imageUrl} height={'100%'} width={'100%'} alt={'....'}/>
                </ModalBody>
            </Modal>
        </>
    )
}
