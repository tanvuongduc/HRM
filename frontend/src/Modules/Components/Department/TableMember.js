import React, { Component, Fragment } from 'react';
import avt from '../../../Asset/Img/avatar.png';
import avt2 from '../../../Asset/Img/avatar2.png';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class TableMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: false
        }
    };
    showMember() {
        this.setState({
            button: true
        });
    };
    closeMember() {
        this.setState({
            button: false
        });
    };
    render() {
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
                            <Link to='department/detail'><button>&#8689;</button></Link>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TableMember;
