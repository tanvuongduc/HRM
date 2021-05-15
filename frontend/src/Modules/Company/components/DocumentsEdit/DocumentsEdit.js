import React from 'react';
import ModalForm from './ModalForm'

const DocumentsEdit = ({ data, addDocument }) => {

    const showData = data.map((event, index) => {
        return (
            <div key={index}>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
            </div>
        )
    });

    return (
        <div className="document-content">
            <h3 >Documents</h3><ModalForm addDocument={addDocument} />
            <div className="document-item">
                {showData}
            </div>
        </div>
    )
}
export default DocumentsEdit;
