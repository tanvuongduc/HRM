import React, { Component } from 'react'
import { Card } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Settings from '../../../../Asset/svg/settings.svg';
import CompanyService from '../../Shared/CompanyService';

const NotiStack = () => {
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('This is a success message!', { variant })
        // this.setState({ editing: false })

        CompanyService.patchCompanyByLocation(this.state.domain)
            .then(res => console.log(res))
            .catch((error) => {
                console.error('Error:', error);
            })
    };
    return <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleClickVariant('success')}>Save</Button>
};

export default class Configuration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            companyInfo: {},
            domain: ''
        }
    };

    getCompanyInfo = () => {
        CompanyService.getCompanyByLocation()
            .then(res => {
                this.setState({
                    companyInfo: res.data
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    goBack = () => {
        window.history.back();
    };

    editingNote = (event) => {
        let { name, value } = event.target;
        this.setState({ editing: value.length });

        let newDomain = this.state.companyInfo[name] = value;
        this.setState({ domain: newDomain })
    };

    btnEditing = () => {
        if (this.state.editing) {
            return <NotiStack />
        } else {
            return <Button variant="contained" color="secondary" startIcon={<CloseIcon />} onClick={() => this.goBack()}>Close</Button>
        }
    };

    componentDidMount() {
        this.getCompanyInfo();
    };

    render() {
        let { domain } = this.state.companyInfo;
        return (
            <div className="configuration">
                <Card className="configuration-content">
                    <h3>Configuration</h3>
                    <div className="configuration-item">
                        <div className="content-item">
                            <FormControl fullWidth>
                                <h5>Email configuration settings</h5>
                                <TextField required name="domain" value={domain} helperText="Some important text" onChange={(event) => this.editingNote(event)} />
                            </FormControl>
                        </div>
                        <div className="background-item">
                            <img src={Settings} alt="icon-setting" />
                        </div>
                    </div>
                    <div className="configuration-btn">
                        <SnackbarProvider maxSnack={3}>
                            {this.btnEditing()}
                        </SnackbarProvider>
                    </div>
                </Card>
            </div>
        )
    }
}
