<<<<<<< HEAD
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DepartmentEdit from "./component/DepartmentEdit/DepartmentEdit";
import MenberEdit from "./component/menber/MenberEdit";

class Department extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="Department">
                <Switch>
                    <Route exact path={`${path}`} component={DepartmentEdit} />
                    <Route exact path={`${path}/menber`} component={MenberEdit} />
                </Switch>
            </div>
        );
    }
}

export default Department;
=======
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
>>>>>>> main
