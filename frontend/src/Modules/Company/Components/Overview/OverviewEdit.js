import React from 'react';
import { Form, ModalNoti, REGEX_TEL } from '../../Shared';

class OverviewEdit extends Form {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div className="detailContent">
                <div className="leftContent">
                    <div className="overView boxContent">
                        <div className="overViewTop">
                            <h3 className="topLeftContent">Overview</h3>
                        </div>
                        <div className="overViewContent">
                            <div className="overViewContentItem">
                                <h4>2</h4>
                                <h2>Teams</h2>
                            </div>
                            <div className="overViewContentItem">
                                <h4>12</h4>
                                <h2>People</h2>
                            </div>
                            <div className="overViewContentItem">
                                <h4>10</h4>
                                <h2>Permanent</h2>
                            </div>
                            <div className="overViewContentItem">
                                <h4>2</h4>
                                <h2>Freelancers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="document boxContent">
                        <div className="documentTop">
                            <h3 className="topLeftContent">Documents</h3>
                            <div className="right">Add document</div>
                        </div>
                        <div className="documentContent">
                            <div className="documentContentItem">
                                <h3>Company Information</h3>
                                <p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ut, nulla, cumque! Maxime suscipit at corrupti quis voluptatum dignissimos dolores, eius unde explicabo provident officia praesentium excepturi fugit facere inventore sint.</p>
                            </div>
                        </div>
                        <div className="documentContent">
                            <div className="documentContentItem">
                                <h3>Company Information</h3>
                                <p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ut, nulla, cumque! Maxime suscipit at corrupti quis voluptatum dignissimos dolores, eius unde explicabo provident officia praesentium excepturi fugit facere inventore sint.</p>
                            </div>
                        </div>
                        <div className="documentContent">
                            <div className="documentContentItem">
                                <h3>Company Information</h3>
                                <p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ut, nulla, cumque! Maxime suscipit at corrupti quis voluptatum dignissimos dolores, eius unde explicabo provident officia praesentium excepturi fugit facere inventore sint.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContent">
                    <div className="contact boxContent">
                        <div className="contactTop">
                            <h3 className="topLeftContent">Contact</h3>
                            <div className="contactItem">
                                <i className="fa fa-phone" />&nbsp;Phone:
                                </div>
                            <div className="contactItem">
                                <i className="fa fa-globe" />&nbsp;Website:
                                </div>
                            <div className="contactItem">
                                <i className="fa fa-envelope" />&nbsp;Email:
                                </div>
                            <div className="contactItem">
                                <i className="fa fa-map-marker" />&nbsp;Adress:
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OverviewEdit;