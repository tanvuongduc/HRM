import React, { Component, Fragment, useState } from 'react';
import TableMember from './TableMember';
import { Modal } from 'react-modal';

class ItemDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            setModalIsOpen: false
        }
    }
    
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showModal: false
    //     }
    // };
    // Modal() {
    //     this.setState({
    //         showModal: true
    //     });
    // };
    render() {
        
        return (
            <Fragment>

                <div className='department-item'>
                    <div className='department-item-nav'>
                        <Modal isOpen={modalIsOpen} updateTodo={updateTodo}>
                            <div className="modal">
                                <h2>Edit todo</h2>
                                <form >
                                    <input type="text" />
                                    <input type="submit" />
                                </form>
                            </div>
                        </Modal>
                        {/* <h2>Modal Example</h2>
                        <button id="myBtn" onClick={this.Modal()}>Open Modal</button>
                        <div id="myModal" className="modal">
                            <div className="modal-content">
                                <span className="close">&times;</span>
                                <p>Some text in the Modal..</p>
                            </div>

                        </div> */}
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
