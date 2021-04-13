import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { Col, Row, Input, Button } from 'reactstrap';
import { AuthService, Form, ModalNoti } from '../../Shared';

class Login extends Form {
    constructor(props) {
        super(props);
        this.state = {
            notiMessage: '',
            form: this._getInitFormData({ username: '', password: '' }),
        }
    }

    login() {
        const { username, password } = this.state.form;
        AuthService.login(username.value, password.value).then(res => {
            window.localStorage.setItem('token', res.id);
            AuthService.getUserInfo().then(_res => {
                let user = _res.user;
                window.localStorage.setItem('user', JSON.stringify(user));
                AuthService.userInfo = user;
               
            }).catch(err => {
                console.log('Err', err);
                this.setState({
                    notiMessage: "Có lỗi xảy ra trong lúc lấy thông tin người dùng, xin thử lại sau!"
                })
            })
        }).catch(err => {
            console.log('Err', err);
            this.setState({
                notiMessage: "Có lỗi xảy ra trong lúc đăng nhập, xin thử lại sau!"
            })
        })
    }

    goTo(url = '') {
        url = window.location.origin + '/' + url
        window.location.replace(url)
    }

    render() {
        const { username, password } = this.state;
        return (
            <Fragment>
                <div className="loginCard">
                    <h2>Đăng Nhập</h2>

                    <Row>
                        <Col xs="4">Tên Đăng Nhập: </Col>
                        <Col>
                            <Input type="text" placeholder="User Name" value={username} name="username" onChange={(ev) => this._setValue(ev, 'username')}></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4">Mật Khẩu: </Col>
                        <Col>
                            <Input type="password" placeholder="Password" value={password} name="password" onChange={(ev) => this._setValue(ev, 'password')}></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="end">
                            <Button outline color="primary" title="Login" onClick={() => this.login()}>Đăng Nhập</Button>
                        </Col>
                    </Row>
                    <ModalNoti message={this.state.notiMessage} done={() => this.setState({ notiMessage: '' })}></ModalNoti>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Login);