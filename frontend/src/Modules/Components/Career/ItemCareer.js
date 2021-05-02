import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import avatar from '../../../Asset/Img/avatar.png';
import ItemTrophy from './ItemTrophy';
import Tabs from './tabs';

class ItemCareer extends Component {
    render() {
        return (
            <div className='career-item'>
                <div className='career-item-content'>
                    <div className='item-content-left'>
                        
                        <Card className='card-content'>
                            <CardImg top src={avatar} alt={avatar} className='card-img' />
                            <CardBody>
                                <CardTitle tag="h5">MR: {localStorage.getItem('user')}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Manager</CardSubtitle>
                                <CardText>Join date: 01/01/2020</CardText>
                                
                            </CardBody>
                        </Card>
                    </div>
                    <ItemTrophy />
                    <Tabs></Tabs>
                </div>
                
            </div>
        );
    }
}

export default ItemCareer;
