import React, { useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Http } from '../../Shared';
import Modaladd from './Modaladd';

const Document = () => {
    const [dataDocument, setDataDocument] = useState([]);

    const getDataDocument = async () => {
        try {
            const data = await Http.get('company')
            return setDataDocument(data.data.notes)
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
                <div>
                    <span><b>Title: </b>{event.title}</span><MenuIcon />
                </div>
                <p><b>Description: </b>{event.desc}</p><hr />
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
