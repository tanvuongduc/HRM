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
		console.log("11111");
		event.preventDefault();
		event.target.reset();
		let idUpload =[]
		let DocumentUpload=[]
        let ListFiles = this.state.selectedFile
		console.log(ListFiles);
		for(let i= 0; i< ListFiles.length; i++){
			console.log("111");
			let formData = new FormData();
			formData.append(
				"file",
			ListFiles[i],
			ListFiles[i].name
			);
			let upload = await axios.post(`${BASE_URL}upload`, formData)
			console.log(formData);
			idUpload.push(upload.data.id)
			DocumentUpload.push(upload.data)
		}
		this.props.Upload(idUpload, DocumentUpload)
		this.setState({ modal: !this.state.modal })
	};

	onFileChange = (event) => {
		let listFiles = event.target.files;
		let data =[]
		for (let i= 0;i < listFiles.length;i++){
			data.push(listFiles[i])
		}
		console.log(data);
		this.setState({ selectedFile:data});
	};

	/*--------------------------------------------------*/

	fileData = () => {
		if (this.state.selectedFile) {
			let listFiles = this.state.selectedFile
			console.log(listFiles);
			let element =[]
			for (let i = 0; i< listFiles.length;i++){
				element.push(<div>
					<h3>File Details: {i}</h3>
					<p>File Name:{" "}{listFiles[i].name}</p>
					<p>File Type:{" "}{listFiles[i].type}</p>
					<p>Last Modified:{" "}{listFiles[i].lastModifiedDate.toDateString()}</p>
				</div>)
			}
			return element;
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
							<input className="inputStyle" type="file" multiple={this.props.multiple ? true :false} onChange={this.onFileChange} required />
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
