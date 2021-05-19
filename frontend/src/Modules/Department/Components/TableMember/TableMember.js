import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import avt from '../../../../Asset/Img/avatar.png'
import avt2 from '../../../../Asset/Img/avatar2.png'

export function TableMember(props) {
    return (
        <Fragment>
            <div className='item-content-bottom'>
                <p>MEMBER</p>
                <div className='content-member'>
                    <div className='content-member-avt'>
                        <img src={avt} alt={avt} />
                        <img src={avt2} alt={avt2} />
                    </div>
                    <div className='content-member-nav'>
                        <Link to={"department/detail" + "/" + props.id}><button>&#8689;</button></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
