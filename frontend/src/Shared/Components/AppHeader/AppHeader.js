import React from 'react';
import { withRouter } from "react-router-dom";
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import { AuthService } from '../../';
import avt from '../../../Asset/Img/avatar.png';

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

    logout() {
        AuthService.userInfo = null;
        window.localStorage.clear();
        window.location.replace('login');
    }

    render() {
        return (
            <Nav pills>
                <Row className="appHeaderContainer" style={{ margin: '0px' }}>
                    <Col xs="2" className='header-left'></Col>
                    <Col xs="8" className="header-middle">
                        <form className='header-middle-search'>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText className='search-button'>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input className='search-input' placeholder="Search.." />
                            </InputGroup>
                        </form>
                    </Col>
                    <Col xs="2" className="header-right">
                        <Dropdown nav isOpen={this.state.dropdownUserOpen} toggle={this.toggleUser}>
                            <DropdownToggle nav caret className='dropdownToggle'>
                                <img src={avt} alt={avt} />
                                <span>&ensp;{localStorage.getItem('user')}</span>
                            </DropdownToggle>
                            <DropdownMenu right>
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
