import React from 'react';
import { withRouter } from "react-router-dom";
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import { AuthService } from '../../';

class AppHeader extends React.Component {
    state = {
        dropdownUserOpen: false,
        dropdownMasterDataOpen: false,
        dropdownWareHouseOpen: false,
    }

    goTo(url = '') {
        url = window.location.origin + '/' + url
        window.location.replace(url)
    }

    toggleUser = () => {
        this.setState({
            dropdownUserOpen: !this.state.dropdownUserOpen,
        })
    }

    toggleMasterData = () => {
        this.setState({
            dropdownMasterDataOpen: !this.state.dropdownMasterDataOpen,
        })
    }

    toggleWareHouse = () => {
        this.setState({
            dropdownWareHouseOpen: !this.state.dropdownWareHouseOpen,
        })
    }

    logout() {
        AuthService.userInfo = null;
        window.localStorage.clear();
        window.location.replace('login');
    }

    render() {
        return (
            <Nav pills>
                <Row className="appHeaderContainer" style={{margin:'0px'}}>
                    <Col xs="2"></Col>
                    <Col xs="8"></Col>
                    <Col xs="2">
                        <Dropdown nav isOpen={this.state.dropdownUserOpen} toggle={this.toggleUser}>
                            <DropdownToggle nav caret>{AuthService.userInfo.first_name}ADMIN</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Info</DropdownItem>
                                <DropdownItem>Change Passworld</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => this.logout()}>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </Nav>
        );
    }
}

export default withRouter(AppHeader);
