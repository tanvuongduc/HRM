import React from 'react'
import { Form } from '../../../Shared'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

export default class CertifecateForm extends Form {
    constructor(props) {
        super(props);
        this.state = {
            form: this._getInitFormData({ code: '', name: '', desc: '' }),
        }
    }
    render() {
        return (
            <Card className='CertifecateForm'>
                <h4>CERTIFICATE FORM</h4>
                <form >
                    <TextField
                        label="CODE"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={(ev) => this._setValue(ev, 'code')}
                    />
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={(ev) => this._setValue(ev, 'name')}
                    />
                    <TextField
                        label="Description"
                        margin="normal"
                        multiline
                        fullWidth
                        rows={4}
                        variant="outlined"
                        onChange={(ev) => this._setValue(ev, 'desc')}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => console.log(this.state)}>
                        Save
                    </Button>
                </form>
            </Card>
        )
    }
}
