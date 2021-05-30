import React, { useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Http } from '../../Shared/';
import ModalAdd from './ModalAdd';

const Document = () => {
    const [documents, setDocuments] = useState([]);

    const getDocuments = async () => {
        try {
            const data = await Http.get('company')
            setDocuments(data.data.notes)
        } catch (error) {
            console.log(error)
        }
    };

    const addDocument = async (item) => {
        documents.push(item)

        setDocuments(documents)

        try {
            await Http.patch('company',
                {
                    "id": "60ab237c987896146488c43e",
                    "name": "HRM",
                    "domain": "dududu.com",
                    "address": "87 Lê Thanh Nghị",
                    "email": "ltrungtrieu@gmail.com",
                    "phone": "0347525147",
                    "pic": "60a8c904674c16155830c7f1",
                    "overviews": [
                        {
                            "img": "a.png",
                            "title": "back",
                            "desc": "di du dua di"
                        }
                    ],
                    "notes": documents,
                    "documents": []
                }
            )
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getDocuments();
    }, []);

    const showDocumentItem = documents.map((event, index) => {
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
                <h3>Document</h3><ModalAdd add={addDocument} />
            </div>
            <div className="document-item">
                {showDocumentItem}
            </div>
        </div>
    )
}

export default Document;
