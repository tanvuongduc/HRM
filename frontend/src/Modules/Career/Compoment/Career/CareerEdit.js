import React from 'react';
import { Form, ModalNoti, REGEX_TEL } from '../../Shared';

class CarreEdit extends Form {
    constructor(props) {
        super(props);
        this.state = {
            notiMessage: '',
            form: this._getInitFormData({ temp: '10', pres: '10', hRate: '10' }),
        }
    }

    componentDidMount() {
        this._fillForm({ temp: '100', pres: '101', hRate: '102' })
    }

    render() {
        let { temp, pres, hRate } = this.state.form;
        return (
            <div>
                <h1>This is Carre component</h1>
                
            </div>
        );
    }
}

export default CarreEdit;