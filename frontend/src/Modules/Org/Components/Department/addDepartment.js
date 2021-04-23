import React, { Component } from 'react';
import Menu from '../../Menu/Menu';
import department from '../../../Assets/images/team2.png';

class Adddepartment extends Component {
    render() {
        return (
            <div className='container-adddepartment'>
                <Menu />
                <div className='main'>
                    <div className='header'>
                        <h2>Add Department</h2>
                    </div>
                    <div className='content'>
                        <div className='content-top'>
                            <h4>Tạo một phòng ban mới</h4>
                            <p>
                                Phòng ban cho phép bạn nhóm mọi người theo vị trí. 
                                Các phòng ban có thể đăng ký các ngày nghỉ lễ khác nhau, 
                                giúp bạn xác định thời gian nghỉ phép của mọi người
                            </p>
                        </div>
                        <div className='content-bottom'>
                            <div className='content-bottom-left'>
                                <form>
                                    <label>Ten phong ban</label>
                                    <input type='text' placeholder='Ten phong ban'/>
                                    <label>Quan ly phong ban</label>
                                    <input type='text' placeholder='ID quan ly phong ban' />
                                    <textarea defaultValue='Mo ta phong ban'></textarea>
                                    <button type='reset'>Reset</button>
                                    <button type='submit'>Submit</button>
                                </form>
                            </div>
                            <div className='content-bottom-right'>
                                <img src={department} alt ={department}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Adddepartment;