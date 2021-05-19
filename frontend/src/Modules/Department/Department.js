import React, { useState, useEffect } from 'react'
import { Http } from '../../Helper/Http'
import { ItemDepartment } from './Components/ItemDepartment/ItemDepartment.'

export function Department() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Http.get("department").then(e => {
            return setData(e.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);
    return (
        <div className='department-container'>
            <h1>Department</h1>
            <ItemDepartment data={data} />
        </div>
    )
}
