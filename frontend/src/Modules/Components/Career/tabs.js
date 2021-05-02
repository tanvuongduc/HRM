import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className = "tabs">
      <Nav tabs  >
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            2020
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            2021
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} >
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <p>Mẹ ơi, mẹ bảo quả táo trên cây chín đỏ là nhờ có mặt trời. Thế thì củ cải đỏ lớn lên trong lòng đất vì sao mà nó đỏ ?

              Mẹ ơi, mẹ bảo gà trống gáy trời sáng, thế sao gà trống chết rồi mà trời vẫn sáng ?

              Mẹ ơi, mẹ bảo con không nên hỏi mẹ như vậy, vì làm mẹ thì không bao giờ nói sai. Vậy thì con cũng sẽ không bao giờ nói sai, vì sau này con cũng sẽ làm mẹ.</p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <p> Không phải ngẫu nhiên mà người ta dành rất nhiều lời ca, tiếng hát cho những người thầy, người cô đến như vậy. Bởi thầy cô chính là những người dạy bảo, dìu dắt chúng ta thành người. Trong suốt mấy năm học qua, tôi được học rất nhiều thầy cô, nhưng người cô mà em yêu quý nhất chính là cô Giang – cô giáo chủ nhiệm năm lớp bốn.</p>
            </Col>

          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tabs;