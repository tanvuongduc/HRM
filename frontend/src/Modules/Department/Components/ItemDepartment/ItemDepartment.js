import React, { useState, useEffect } from 'react'
import Modaladd from './Modaladd'
import { Http } from '../../Shared/index'

const ItemDepartment = () => {
    const [dataDepartment, setDataDepartment] = useState([]);

    const getDataDepartment = async () => {
        try {
            const data = await Http.get('company')
            data.data.map(event => {
                return setDataDepartment(event.departments)
            })
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getDataDepartment();
    }, []);

    // const showDepartment = dataDepartment.map((event, index) => {
    //     return (
    //         <div key={index}>
    //             <p><b>..: </b>{event}</p>
    //             <p><b>..: </b>{event}</p><hr />
    //         </div>
    //     )
    // });

    return (
        <div className="department-content">
            <Modaladd />
            <h3>List Department</h3>
            {/* {showDepartment} */}
        </div>
    )
}

export default ItemDepartment;
