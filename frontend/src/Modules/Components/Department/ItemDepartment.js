import React, { Component, Fragment } from 'react';
import ModalExample from './Modal';
import TableMember from './TableMember';

class ItemDepartment extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.data)

        return (
            <Fragment>
                <div className='department-item'>
                    <div className='department-item-nav'>
                        <ModalExample />
                    </div>
                    {
                        this.props.data.map((e, i) => (
                            <div className='department-item-content' key={i}>
                                <div className='item-content-top'>
                                    <b>{e.department_name}</b>
                                </div>
                                <TableMember data={e} />
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default ItemDepartment;
