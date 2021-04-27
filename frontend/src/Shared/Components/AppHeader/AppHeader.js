import React from 'react';
import { withRouter } from "react-router-dom";
import { Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import { AuthService } from '../../';
import avt from '../../../Asset/Img/avatar.png';
import logo from '../../../Asset/Img/logo.png';

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
                    <Col xs="2" className='header-left'>
                        <img src={logo} alt={logo} />
                    </Col>
                    <Col xs="8" className="header-middle">
                        <form className='header-middle-search'>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText className='search-button'>
                                        <svg className="o-icon u-padding--10" viewBox="0 0 50 50" aria-label="Search icon" role="img">
                                            <path d="M30.5 5A14.5 14.5 0 1 0 45 19.5 14.5 14.5 0 0 0 30.5 5zm0 23.62a9.13 9.13 0 1 1 9.13-9.12 9.13 9.13 0 0 1-9.13 9.12z"></path>
                                            <path d="M29.72 13a.68.68 0 0 0-.49.9l.72 1.9a.66.66 0 0 0 .73.42 2.61 2.61 0 0 1 3.08 3.08.64.64 0 0 0 .42.72l1.9.73a.68.68 0 0 0 .9-.49A6 6 0 0 0 29.72 13zM16.19 30.16a.67.67 0 0 0-1-.09l-10 10a.66.66 0 0 0 0 .95L9 44.8a.66.66 0 0 0 .95 0l10-10a.67.67 0 0 0-.09-1 18.56 18.56 0 0 1-3.67-3.64z"></path>
                                        </svg>
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
