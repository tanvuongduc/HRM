import React, { useContext, useState } from 'react';
import ModalForm from './ModalForm'



const DocumentsEdit = ({ document, addDocument }) => {

    return (
        <div className="document-content" style={{justifyContent: 'space-evenly'}}>
            <h3 >Documents</h3><ModalForm addDocument={addDocument} />
            <div className="document-item">
                {document}
            </div>
        </div>
    )
}

export default DocumentsEdit
