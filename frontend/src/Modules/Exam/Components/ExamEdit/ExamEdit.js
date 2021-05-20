import React from 'react';
import { Form, ModalNoti, REGEX_TEL } from '../../Shared';

class ExamEdit extends Form {
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
                <h1>This is Exam component</h1>
                <input type="text" placeholder="Nhiệt độ" value={temp.value} minLength="3" onChange={(ev) => this._setValue(ev, 'temp')}></input>
                <input type="number" placeholder="Huyết áp" value={pres.value} min="3" onChange={(ev) => this._setValue(ev, 'pres')}></input>
                <input type="text" pattern={REGEX_TEL} placeholder="Nhịp tim" value={hRate.value} required onChange={(ev) => this._setValue(ev, 'hRate')}></input>
                <button onClick={() => console.log('aaaaaaaaaaaaaaaaaaaa', this.state)}>test</button>
                <h1>{JSON.stringify(this.state.form)}</h1>
                <ModalNoti message={this.state.notiMessage} done={() => this.setState({ notiMessage: '' })}></ModalNoti>
            </div>
        );
    }
}

export default ExamEdit;
