import React from 'react'
import ModalAdd from './ModalAdd.jsx'
import Div from './CssDocument'

const Document = ({ data, addDocument }) => {
    const showData = data.map((e, i) => {
        return (
            <div key={i}>
                <h2>{e.title}hihi</h2>
                <p>{e.description}hahah</p>
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
