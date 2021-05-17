import React from 'react'
import { ModalAD } from '../../Shared/ModalAD/ModalAD'
import { Link } from 'react-router-dom'
import avt from '../../../../Asset/Img/avatar.png'
import avt2 from '../../../../Asset/Img/avatar2.png'

export function ItemDepartment({ data }) {

    const path = window.location.pathname;
    const listItem = data.data.map((e, i) =>
        <div className='department-item-content' key={i}>
            <div className='item-content-top'>
                <b>{e}</b>
            </div>
            <div className='item-content-bottom'>
                <p>MEMBER</p>
                <div className='content-member'>
                    <div className='content-member-avt'>
                        <img src={avt} alt={avt} />
                        <img src={avt2} alt={avt2} />
                    </div>
                    <div className='content-member-nav'>
                        <Link to={`${path} + '/detail' + '/' + data.id`}><button>&#8689;</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className='department-item'>
            <div className='department-item-nav'>
                <ModalAD />
            </div>
            {listItem}
        </div>
    )
}
