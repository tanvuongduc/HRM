import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import avatar from '../../../../Asset/Img/avatar.png';


class CareerEdit extends Component {
    render() {
        return (
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
                <div className='item-content-right'>
                    <h2>My Career</h2>
                    <p> Hội nghị nhất trí với 5 điểm lớn theo đề nghị của Nguyễn Ái Quốc và quyết</p>
                    <p> Hội nghị thảo luận và thông qua các văn kiện: Chánh cương vắn</p>
                </div>

            </div>

        );
    }
}

export default CareerEdit;