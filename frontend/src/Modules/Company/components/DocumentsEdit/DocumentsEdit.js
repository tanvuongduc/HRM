import React, { useContext, useState } from 'react';
import ModalForm from './ModalForm'



const DocumentsEdit = ({ document }) => {

    return (
        <div className="document-content">
            <h3 >Documents</h3>
            <ModalForm></ModalForm>
            <div className="document-item">
                {document}
            </div>
        </div>
    )
}

export default DocumentsEdit
