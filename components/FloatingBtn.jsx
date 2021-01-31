import React, { useState } from 'react'
import { IconButton, Icon, Modal, Button, ButtonToolbar } from 'rsuite';

export default class Confirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ show: false });
    }
    open() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="modal-container">
                <ButtonToolbar>
                    <Button onClick={this.open}> Open</Button>
                </ButtonToolbar>

                <Modal backdrop="static" show={this.state.show} onHide={this.close} size="xs">
                    <h1>working</h1>
                </Modal>
            </div>
        );
    }
}
