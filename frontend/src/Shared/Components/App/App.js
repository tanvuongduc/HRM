import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Exam from '../../../Modules/Exam/Exam';
import NotAuthorized from '../../../Modules/Org/Components/NotAuthorized/NotAuthorized';
import MainTeam from '../../../Modules/Team/Components/MainTeam';

class App extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div className="App">
                <AppHeader></AppHeader>
                <Switch>
                    <Route path={`${path}/exam`} component={Exam} />
                    <Route path={`${path}/team`} component={MainTeam} />
                    <Route path={`${path}/notauthorized`} component={NotAuthorized} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);