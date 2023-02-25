import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from '../../../footer/Footer';
import Footerlast from '../../../footerlast/Footerlast';

import CalendarHeader from '../Datepicker/Datepicker';
import Request from '../Request/Request';

function Contact() {
  const [key, setKey] = useState('calender');
  return (
    <>
    <Tabs
      defaultActiveKey="calender"
      id="uncontrolled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-10"
    >
      <Tab eventKey="calender"  title="Calender">
      <CalendarHeader />

      </Tab>
      <Tab eventKey="request" title="Request">
      <Request/>
        
      </Tab>
    </Tabs>
    <Footer/>
    <Footerlast/>
    </>
  );
}

export default Contact;