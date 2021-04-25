import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
// import Exam from '../../../Modules/Exam/Exam';
import AppFooter from '../AppFooter/AppFooter';
import AppSidebar from '../AppSidebar/AppSidebar';
import Department from '../../../Modules/Org/Components/Department/Department';
import Company from '../../../Modules/Org/Components/Company/Company';
import Career from '../../../Modules/Org/Components/Career/Career';

class App extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div>
                <AppHeader />
                <div className='app-container'>
                    <AppSidebar />
                    <Switch>
                        <Route exact path={`${ path }/department`} component={Department}/>
                        <Route exact path={`${ path }/company`} component={Company}/>
                        <Route exact path={`${ path }/career`} component={Career}/>
                        {/* <Route exact path={`${path}/exam`} component={Exam} /> */}
                    </Switch>
                </div>
                <AppFooter />
            </div>
        );
    }
}

export default withRouter(App);
