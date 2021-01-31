import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'primereact/button'
import { BiPlus } from 'react-icons/bi'
import { Divider } from 'primereact/divider';
import TextInput from './TextInput';
import Btn from './Btn';

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
                    <div className='text-center'>
                        <h6>Add Note</h6>
                        <Divider />
                    </div>
                    <div>
                        <TextInput
                            placeholder='Note Title'
                        />

                        <Btn
                            text='Add'
                            className='mt-3 w-100 border-0 text-center'
                        />
                    </div>
                </Modal.Body>
            </Modal>
            <Button className='foating-btn shadow' onClick={() => setState({
                ...state,
                show: !state.show
            })}><BiPlus size={30} /></Button>
        </>
    )
}
