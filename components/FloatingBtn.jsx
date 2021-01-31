import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'primereact/button'
import { BiPlus } from 'react-icons/bi'
import { Divider } from 'primereact/divider';
import TextInput from './TextInput';
import Btn from './Btn';
import { InputTextarea } from 'primereact/inputtextarea';
import { createNote } from '../redux/action/note.action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    note: state.note
})

const mapDispatchToPrpos = {
    createNote
}


export default connect(
    mapStateToProps,
    mapDispatchToPrpos
)(props => {
    const [state, setState] = useState({
        show: false,
        title: null,
        note: null
    })
    console.log('PROPS --', props);

    const handleSubmit = () => {
        if(state.note){
            console.log('adding data', state);
            props.createNote({
                title: state.title,
                note: state.note,
                isFav: false
            })
        }else {
            console.log('empty')
        }
    }

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
                            onChange={e => setState({
                                ...state,
                                title: e.target.value
                            })}
                        />
                        <InputTextarea className='mt-3 w-100' placeholder='Type Node Here' rows={8} cols={30} onChange={e => setState({
                            ...state,
                            note: e.target.value
                        })} />
                        <Btn
                            text='Add'
                            className='mt-3 w-100 border-0 text-center'
                            onClick={handleSubmit}
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
});
