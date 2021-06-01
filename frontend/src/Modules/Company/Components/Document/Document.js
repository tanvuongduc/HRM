import React, { Component } from 'react'
import ModalAdd from './ModalAdd'

export default class Document extends Component {
    render() {
        return (
            <div className="document-content">
                <div className="document-header">
                    <h3>Document</h3><ModalAdd add={(item) => this.addNote(item)} />
                </div>
                <div className="document-item">
                </div>
            </div>
        )
    }
}
