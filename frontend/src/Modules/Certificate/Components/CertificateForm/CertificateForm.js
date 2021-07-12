import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CertifecateService from '../../Shared/CertificateService'
import { ModalConfirm, Form } from "../../../../Shared";

const useStyles = (theme) => ({
    card: {
        margin: `100px`,
    },
    header: {
        padding: "50px ",
        width: "80%"
    },
    btn: {
        float: `right`,
        margin: `30px 10px`,
    },
    form: {
        margin: `30px 100px`,
    }

})
class CertifecateForm extends Form {
    constructor(props) {
        super(props);
        this.state = {
            form: this._getInitFormData({ name: '', code: '', desc: '', dirty: false }),
            confirmMessage: ''
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = () => {
        const urlId = this.props.match.params.id;
        if (urlId === "create") {
            this.setState({
                confirmMessage: 'Bạn muốn thêm mới Chứng chỉ này không ?'
            });
        } else {
            this.setState({
                confirmMessage: 'Bạn có chắc chắn muốn sửa thông tin này không ?'
            });
        }
    }
    setErr() {
        console.log('object')
    }

    answer = (isYes) => {
        const urlId = this.props.match.params.id;
        const payload = {
            name: this.state.form.name.value,
            code: this.state.form.code.value,
            desc: this.state.form.desc.value,
        }
        if (urlId === 'create') {
            isYes ? (
                this.postCertifacate(payload),
                this.historyBack()
            ) : this.setState({ confirmMessage: '' })
        } else {
            isYes ? (
                this.updateCertifecate(urlId, payload),
                this.historyBack()
            ) : this.setState({ confirmMessage: '' })
        }
    }
    historyBack = () => {
        window.history.back();
    }
    postCertifacate = (payload) => {
        CertifecateService.postCertifecate(payload).then(res => {
            console.log(res.id)
        })
    }
    updateCertifecate = (urlId, payload) => {
        CertifecateService.patchCertifecate(urlId, payload)
    }
    componentDidMount() {

        const urlId = this.props.match.params.id;
        if (urlId !== 'create') {
            CertifecateService.getCertifecateById(urlId).then(res => {
                return (
                    this._fillForm({
                        name: res.data.name,
                        code: res.data.code,
                        desc: res.data.desc
                    })
                )
            })
        }
    }

    render() {
        const { classes } = this.props;
        const urlId = this.props.match.params.id;
        const { name, code, desc, } = this.state.form
        return (
            <Card className={classes.card}>
                <h2 className={classes.header}>{urlId === 'create' ? "Thêm Chứng chỉ" : "Sửa Chứng Chỉ"}</h2>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                        id="standard-helperText"
                        label="Tên Chứng Chỉ"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="name"
                        defaultValue={name.value}
                        multiline
                        fullWidth
                        margin="normal"
                        onChange={(ev) => this._setValue(ev, "name")}
                    />
                    <TextField
                        id="standard-helperText"
                        label="Mã Chứng Chỉ"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="code"
                        defaultValue={code.value}
                        multiline
                        fullWidth
                        margin="normal"
                        onChange={(ev) => this._setValue(ev, "code")}
                    />
                    <TextField
                        id="standard-helperText"
                        label="Mô Tả"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="desc"
                        defaultValue={desc.value}
                        margin="normal"
                        multiline
                        fullWidth
                        onChange={(ev) => this._setValue(ev, "desc")}
                    />
                    {
                        urlId === 'create' ? (<>
                            <Button
                                className={classes.btn}
                                size="small"
                                variant="contained"
                                color="secondary"
                                onClick={this.historyBack}
                            >Hủy
                            </Button>
                            <Button
                                className={classes.btn}
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={this.onSubmit}>
                                Thêm
                            </Button>
                        </>) : (<>
                            <Button
                                className={classes.btn}
                                size="small"
                                variant="contained"
                                color="secondary"
                                onClick={this.historyBack}
                            >Hủy
                            </Button>
                            <Button
                                onClick={this.onSubmit}
                                className={classes.btn}
                                size="small"
                                variant="contained"
                                color="primary"
                            >Sửa
                            </Button>
                        </>)
                    }
                </form>
                <ModalConfirm message={this.state.confirmMessage} answer={this.answer}></ModalConfirm>
            </Card>
        )
    }
}
export default withStyles(useStyles)(CertifecateForm)
