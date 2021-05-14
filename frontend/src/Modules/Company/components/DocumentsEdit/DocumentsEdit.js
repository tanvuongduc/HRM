import React, { useEffect, useState } from 'react';
import ModalForm from './ModalForm'



const DocumentsEdit = ({ data1, addDocument }) => {
    console.log(data1.data)


    return (
        <div className="document-content" style={{ justifyContent: 'space-evenly' }}>
            <h3 >Documents</h3><ModalForm addDocument={addDocument} />
            <div className="document-item">
                {
                    
                }
            </div>
        </div>
    )
}

export default DocumentsEdit
