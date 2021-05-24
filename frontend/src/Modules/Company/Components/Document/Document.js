import React, { useState, useEffect } from 'react'
import { Http } from '../../Shared/Index';
import Modaladd from './Modaladd';

const Document = () => {
    const [dataDocument, setDataDocument] = useState([]);

    const getDataDocument = async () => {
        try {
            const data = await Http.get('company')
            data.data.map(event => {
                return setDataDocument(event.documents)
            })
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getDataDocument();
    }, []);

    const showDocumentItem = dataDocument.map((event, index) => {
        return (
            <div key={index}>
                <p><b>Title: </b>{event.title}</p>
                <p><b>Description: </b>{event.description}</p><hr />
            </div>
        )
    });

    return (
        <div className="document-content">
            <div className="document-header">
                <h3>Document</h3><Modaladd />
            </div>
            <div className="document-item">
                {showDocumentItem}
            </div>
        </div>
    )
}

export default Document;
