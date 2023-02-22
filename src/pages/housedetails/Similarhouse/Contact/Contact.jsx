import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CalendarHeader from '../Datepicker/Datepicker';
import Request from '../Request/Request';

function Contact() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 mt-10"
    >
      <Tab eventKey="calender"  title="Calender">
      <CalendarHeader />

      </Tab>
      <Tab eventKey="request" title="Request">
      <Request/>
        
      </Tab>
    </Tabs>

  );
}

export default Contact;