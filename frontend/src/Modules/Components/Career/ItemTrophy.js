import React, { Component } from 'react';
import trophy from '../../../Asset/Img/trophy.svg';
import trophy2 from '../../../Asset/Img/trophy2.svg';

class ItemTrophy extends Component {
    render() {
        return (
            <div className='item-content-right'>
                <h2>My Career</h2>
                <p>
                    <img src={trophy} alt={trophy} />&ensp;
                    Hội nghị nhất trí với 5 điểm lớn theo đề nghị của Nguyễn Ái Quốc và quyết định hợp nhất các tổ chức cộng sản, lấy tên là Đảng Cộng sản Việt Nam.
                </p>
                <p>
                    <img src={trophy2} alt={trophy2} />&ensp;
                    Hội nghị thảo luận và thông qua các văn kiện: Chánh cương vắn tắt, Sách lược vắn tắt, Chương trình tóm tắt và Điều lệ vắn tắt của Đảng Cộng sản Việt Nam.
                </p>
            </div>
        );
    }
}

export default ItemTrophy;
