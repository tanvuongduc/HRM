import axios from 'axios';
import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Modal, Button } from '@material-ui/core';

class Upload extends Component {

	state = {
		selectedFile: null,
		modal: false
	};

	handleModal = () => {
		this.setState({ modal: !this.state.modal })
	}

	onFileUpload = async (event) => {
		event.preventDefault();
		event.target.reset();

		const formData = new FormData();
		formData.append(
			"file",
			this.state.selectedFile,
			this.state.selectedFile.name
		);
		const upload = await axios.post("http://103.138.108.104:3000/upload", formData)
		const idDocumentUpload = upload.data.id;
		this.props.idUpload(idDocumentUpload)

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
		return (
			<div>
				<Button variant="contained" color="primary" onClick={this.handleModal} startIcon={<AddCircleIcon />}>Document</Button>
				<Modal open={this.state.modal} onClose={this.handleModal} >
					<div className="modalStyle">
						<h4>Upload new file</h4><hr />
						<form className="formStyle" onSubmit={(event) => this.onFileUpload(event)}>
							<input className="inputStyle" type="file" onChange={this.onFileChange} required />
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
