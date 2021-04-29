import React, { Component } from 'react';

class Company2 extends Component {
    render() {
        return (
            <div className="appCompanyContainer">
                <div className="c_header">
                <div className="textWelcome">
                    <h3>
                    Welcome to Summoner's Rift
                    </h3>
                    <div className="editButton">
                    <div className="editButtonItem">
                        Edit
                    </div>
                    <div className="editButtonItem">
                        Add cover image
                    </div>
                    </div>
                </div>
                </div>
                <div className="companyTab">
                <div className="companyTabSelect">
                    HanBook
                </div>
                <div className="companyTabSelect">
                    Detail
                </div>
                <div className="companyTabSelect">
                    Apps &amp; Intergrations
                </div>
                </div>
                <div className="detailContent">
                <div className="leftContent">
                    <div className="overView boxContent">
                    <div className="overViewTop">
                        <h3 className="topLeftContent">Overview</h3>
                        <div className="right">
                        Manage teams
                        </div>
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
                    <div className="buttonManage">
                        People Directory
                    </div>
                    </div>
                    <div className="document boxContent">
                    <div className="documentTop">
                        <h3 className="topLeftContent">
                        Documents
                        </h3>
                        <div className="right">
                        Add document
                        </div>
                    </div>
                    <div className="documentContent">
                        <div className="documentContentItem">
                        <h3>
                            Company Information
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ut, nulla, cumque! Maxime suscipit at corrupti quis voluptatum dignissimos dolores, eius unde explicabo provident officia praesentium excepturi fugit facere inventore sint.
                        </p>
                        </div>	
                    </div>
                    <div className="documentContent">
                        <div className="documentContentItem">
                        <h3>
                            Company Information
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ut, nulla, cumque! Maxime suscipit at corrupti quis voluptatum dignissimos dolores, eius unde explicabo provident officia praesentium excepturi fugit facere inventore sint.
                        </p>
                        </div>	
                    </div>
                    <div className="documentContent">
                        <div className="documentContentItem">
                        <h3>
                            Company Information
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ut, nulla, cumque! Maxime suscipit at corrupti quis voluptatum dignissimos dolores, eius unde explicabo provident officia praesentium excepturi fugit facere inventore sint.
                        </p>
                        </div>	
                    </div>
                    </div>
                </div>
                <div className="rightContent">
                    <div className="contact boxContent">
                    <div className="contactTop">
                        <h3 className="topLeftContent">
                        Contact
                        </h3>
                        <div className="contactItem">
                        <i className="fa fa-phone" /> Phone:
                        </div>
                        <div className="contactItem">
                        <i className="fa fa-globe" /> Website:
                        </div>
                        <div className="contactItem">
                        <i className="fa fa-envelope" /> Email:
                        </div>
                        <div className="contactItem">
                        <i className="fa fa-map-marker" /> Adress:
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Company2;
