import React from 'react'
import ModalAdd from './ModalAdd'
import Div from './CssDocument'

const Document = ({ data, addDocument }) => {
    const showData = data.map((event, index) => {
        return (
            <div key={index}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
            </div>
        )
    });
    return (
        <Div>
            <div>
                <h3>Document</h3><ModalAdd addDocument={addDocument} />
            </div>
            {showData}
        </Div>
    )
}
export default Document;
