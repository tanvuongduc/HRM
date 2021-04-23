import React from 'react';
import { Form, ModalNoti, REGEX_TEL } from '../../../Exam/Shared';

class DetailsEdit extends Form {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='container-company'>
            <div className='main'>
                <div className='main-header'>
                    <h2>Name: Company</h2>
                    <p>Quản lý: MR. ABC</p>
                </div>
                <div className='main-nav'>
                    <div className="main-nav-top">
                        <h5>Chi tiet</h5>
                        <h5>...</h5>
                    </div>
                    <div className='main-container'>
                        <div className='main-container-left'>
                            <div className='main-container-left-overview'>
                                <div className='main-container-left-overview-header'>
                                    <div className='main-container-left-overview-header-left'>
                                        <h4>Total: </h4>
                                    </div>
                                    <div className='main-container-left-overview-header-right'>
                                        <button><i class="fa fa-gear"></i> Quan ly thanh vien</button>
                                    </div>
                                </div>
                                <div className='main-container-left-overview-content'>
                                    <div className='content-items'>
                                        <h4>7: Team</h4>
                                    </div>
                                    <div className='content-items'>
                                        <h4>100: Thanh vien</h4>
                                    </div>
                                    <div className='content-items'>
                                        <h4>1: Phong ban</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='main-container-left-note'>
                                <h5>Note: hihi</h5>
                            </div>
                        </div>
                        <div className='main-container-right'>
                            <div className='main-container-right-top'>
                                <h4>Lien he</h4>
                                <p><i className="fa fa-phone"></i> 0123456789</p>
                                <p><i className="fa fa-link"></i> Website</p>
                                <p><i className="fa fa-envelope"></i> Email</p>
                                <p><i className="fa fa-map-marker"></i> Address</p>
                            </div>
                            <div className='main-container-right-bottom'>
                                <h4><i className="fa fa-file"></i><br /> Them chu thich</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default DetailsEdit;