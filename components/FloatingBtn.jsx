import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { IconButton, Icon } from 'rsuite'

export default function FloatingBtn() {
    const [state, setState] = useState({
        show: true
    })
    return (
        <>
        <Modal show={state.show} onHide={() => setState({
            ...state,
            show: !state.show
        })}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='card p-5'>
                        Woohoo, you're reading this text in a modal!
                </div>
            </Modal.Body>
        </Modal>
            <IconButton onClick={() => setState({
                ...state,
                show: !state.show
            })} icon={<Icon icon="star" />} circle size="lg" />
        </>
    )
}
