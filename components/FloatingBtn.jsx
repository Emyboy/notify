import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'primereact/button'
import { BiPlus } from 'react-icons/bi'

export default function FloatingBtn() {
    const [state, setState] = useState({
        show: false
    })
    return (
        <>
        <Modal show={state.show} onHide={() => setState({
            ...state,
            show: !state.show
        })}>
            <Modal.Body>
                <div className=''>
                        Woohoo, you're reading this text in a modal!
                </div>
            </Modal.Body>
        </Modal>
            <Button className='foating-btn shadow' onClick={() => setState({
                ...state,
                show: !state.show
            })}><BiPlus size={30}/></Button>
        </>
    )
}
