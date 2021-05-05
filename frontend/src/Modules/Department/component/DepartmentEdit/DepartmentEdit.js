import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import AddDepartment from './addDepartment';

class DepartmentEdit extends Component {


    toggle = () => setModal(!modal);
    render() {
        return (
            <div>
                <Button color="danger" onClick={toggle}>add</Button>
                <h3>
                    phong 1
                    <Link to='menber'>
                        <button>
                            chi tiet
                        </button>
                    </Link>

                </h3>
                <h3>
                    phong 2
                    <Link to='menber'>
                        <button>
                            chi tiet
                        </button>
                    </Link>
                </h3>
                <h3>
                    phong 3
                    <Link to='menber'>
                        <button>
                            chi tiet
                        </button>
                    </Link>
                </h3>
            </div>
        );
    }
}

export default DepartmentEdit;