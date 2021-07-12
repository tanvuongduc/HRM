import axios from 'axios';
import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { Modal, Button } from '@material-ui/core';
import { BASE_URL } from '../../../Constances/const';

class Upload extends Component {

	state = {
		selectedFile: null,
		modal: false
	};

	handleModal = () => {
		this.setState({ modal: !this.state.modal })
	};

	onFileUpload = async (event) => {
		event.preventDefault();
		event.target.reset();

		let formData = new FormData();
		formData.append(
			"file",
			this.state.selectedFile,
			this.state.selectedFile.name
		);
		let upload = await axios.post(`${BASE_URL}upload`, formData)
		console.log(upload);
		let idUpload = upload.data.id
		let DocumentUpload = upload.data
		this.props.Upload(idUpload, DocumentUpload)
		this.setState({ modal: !this.state.modal })
	};

	onFileChange = (event) => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	/*--------------------------------------------------*/

	fileData = () => {
		if (this.state.selectedFile) {
			return (
				<div>
					<h3>File Details:</h3>
					<p>File Name:{" "}{this.state.selectedFile.name}</p>
					<p>File Type:{" "}{this.state.selectedFile.type}</p>
					<p>Last Modified:{" "}{this.state.selectedFile.lastModifiedDate.toDateString()}</p>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h5>Choose file before Pressing the Upload button</h5>
				</div>
			);
		}
	};

	render() {
		console.log(this.props.idUpload);
		return (
			<div>
				<Button variant="contained" color="primary" onClick={this.handleModal} startIcon={<AttachFileIcon />}>Upload file</Button>
				<Modal open={this.state.modal} onClose={this.handleModal} >
					<div className="modalStyle">
						<h4>Upload new file</h4><hr />
						<form className="formStyle" onSubmit={(event) => this.onFileUpload(event)}>
							<input className="inputStyle" type="file" multiple onChange={this.onFileChange} required />
							{this.fileData()}
							<Button variant="contained" color="primary" type="submit" startIcon={<SaveIcon />}>Save</Button>{' '}
							<Button variant="contained" color="secondary" onClick={this.handleModal} startIcon={<CancelIcon />}>Cancel</Button>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}
export default Upload;
