import React, { Component } from 'react';
import trophy_01 from '../../../Asset/Img/trophy_01.svg';
import trophy_02 from '../../../Asset/Img/trophy_02.svg';

class ItemTrophy extends Component {
    render() {
        return (
            <div className='item-content-right'>
                <h2>My Career</h2>
                <p>
                    <img src={trophy_01} alt={trophy_01} />&ensp;
                    Hội nghị nhất trí với 5 điểm lớn theo đề nghị của Nguyễn Ái Quốc và quyết định hợp nhất các tổ chức cộng sản, lấy tên là Đảng Cộng sản Việt Nam.
                </p>
                <p>
                    <img src={trophy_02} alt={trophy_02} />&ensp;
                    Hội nghị thảo luận và thông qua các văn kiện: Chánh cương vắn tắt, Sách lược vắn tắt, Chương trình tóm tắt và Điều lệ vắn tắt của Đảng Cộng sản Việt Nam.
                </p>
            </div>
        );
    }
}

export default ItemTrophy;
