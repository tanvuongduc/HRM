import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Http } from '../../Helper/Http'
import { DetailDepartment } from './Components/DetailDepartment/DetailDepartment';
import { ItemDepartment } from './Components/ItemDepartment/ItemDepartment.'

export function Department() {
    const path = window.location.pathname;
    const [department, setDepartment] = useState({ data: [] });

    useEffect(() => {
        Http.get("department").then(e => {
            return setDepartment(e)
        }).catch(err => { console.log(err) })
    }, []);

    return (
        <Router>
            <Switch>
                <div className='department-container'>
                    <h1>Department</h1>
                    <ItemDepartment data={department} />
                    <Route exact path={`${path}/detail:id`} data={department} component={DetailDepartment} />
                </div>
            </Switch>
        </Router>
    )
}
