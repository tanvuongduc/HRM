import React, { Fragment } from 'react'
import { ModalAD } from '../../Shared/ModalAD/ModalAD'
import { TableMember } from '../TableMember/TableMember'

export function ItemDepartment(props) {
    const listItem = props.data.map((e, i) =>
        <div className='department-item-content' key={i}>
            <div className='item-content-top'>
                <b>{e.department_name}</b>
            </div>
            <TableMember id={e.department_id} />
        </div>
    );
    return (
        <Fragment>
            <div className='department-item'>
                <div className='department-item-nav'>
                    <ModalAD />
                </div>
                {listItem}
            </div>
        </Fragment>
    )
}
