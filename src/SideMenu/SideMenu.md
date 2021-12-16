
**styles.scss**
```scss
@import '~@avenueeco/design-system/src/page';           // Imports Bootstrap utility classes
@import '~@avenueeco/design-system/src/bridge/grid';    // Imports Avenue Eco base styles
@import '~@avenueeco/design-system/src/bridge/forms';   // Imports Avenue Eco base styles
@import '~@avenueeco/design-system/src/bridge/modal';   // Imports Avenue Eco base styles
@import '~@avenueeco/design-system/src/bridge/buttons'; // Imports Avenue Eco base styles
@import "~@avenueeco/design-system/src/bridge/navbar";  // Imports Avenue Eco base styles
@import "~@avenueeco/design-system/src/bridge/nav";     // Imports Avenue Eco base styles

```

**Example:**
```jsx
import React, { useState, forwardRef } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { X } from 'react-feather';
import { TabSelector, SideMenu } from '../';
import Header from '../b_Header';

import AClogoSVG from '../../examples/assets/logo-avenue-code.svg';
import CalendarWeekSVG from '../../examples/assets/calendar-week.svg';
import CalendarMonthSVG from '../../examples/assets/calendar-month.svg';
import MessageRequestSVG from '../../examples/assets/message-request.svg';
import BriefcaseSVG from '../../examples/assets/briefcase.svg';
import DollarSignSVG from '../../examples/assets/dollar-sign.svg';
import ClockSVG from '../../examples/assets/clock.svg';
import CrosshairSVG from '../../examples/assets/crosshair.svg';
import UsersSVG from '../../examples/assets/users.svg';
import MapPinSVG from '../../examples/assets/map-pin.svg';


const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'New',
      label: 'New'
    },
    {
      id: 'Archived',
      label: 'Archived'
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabItemsData[0].id);

  const tabItems = tabItemsData.map(tabData => (
    <div
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      onClick={() => {
        setCurrentTab(tabData.id);
      }}
    >
      {tabData.label}
    </div>
  ));

  return (
        <div className="page-wrapper container d-flex flex-column" style={{width: '60vw'}}>
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <h2 className="text-capitalize font-weight-black no-selec">
              Notifications
            </h2>
            <TabSelector tabItems={tabItems} />
          </div>
          <hr className="my-4" />
        </div>
  );
};

const menuData = [
    {
      id: 'TIME_PERIOD',
      title: 'Time Period',
      items: [
        { id: 'TIMESHEETS', path: '/', icon: <img src={CalendarWeekSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">My Time Entries</Link>
        },
        { id: 'MON_REPORT', path: '/', icon: <img src={CalendarMonthSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Monthly Report</Link>
        }
        ]
    },
    {
      id: 'REQUESTS',
      title: 'Requests',
      items: [
        { id: 'REQUESTS', path: '/', icon: <img src={MessageRequestSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Requests</Link> },
        { id: 'VACATION', path: '/', icon: <img src={BriefcaseSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Vacation</Link> },
        { id: 'REIMBURSEMENTS', path: '/', icon: <img src={DollarSignSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Reimbursements</Link> }
        ]
    },
    {
      id: 'REPORTS',
      title: 'Reports',
      items: [
        { id: 'WORK_HOURS', path: '/work', icon: <img src={ClockSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Working Hours</Link> },
        { id: 'TS_ACCURACY', path: '/', icon: <img src={MessageRequestSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Timesheet Accurary</Link> },
        { id: 'REQUEST_STS', path: '/', icon: <img src={CrosshairSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Requests Status</Link> }
        ]
    },
    {
      id: 'HR',
      title: 'Human Resources',
      items: [
        { id: 'EMPLOYEE_MNG', path: '/', icon: <img src={UsersSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Emmployee Management</Link>},
        { id: 'TMP_LOCATION', path: '/', icon: <img src={MapPinSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Temporary Location</Link> }
      ]
    },
    {
      id: 'FINANCE',
      title: 'Finance',
      items: [
        { id: 'PAYROLL', path: '/', icon: <img src={DollarSignSVG}/>,
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Payroll</Link> }
      ]
    }
  ];

const App = () => {

  return (
    <>
      <Header
        classList="mb-5"

        title={
          <div>
          <div className="ac-header-title-text">DIGITAL</div>
          <div className="ac-header-title-text">CONTROL</div>
          </div>
          }

        logo={
        <img 
          className="ac-header-title-logo" 
          src={AClogoSVG} 
          alt="Avenue Code logo" />
        }

        dotsMenuChildren={
          <BrowserRouter>
            <div className="d-flex flex-column justify-content-space-around align-items-space-around">
              <div className="d-flex flex-row justify-content-space-around">
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
              </div>
              <div className="d-flex flex-row justify-content-space-around">
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
              </div>
                            <div className="d-flex flex-row justify-content-space-around">
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
                <Link className="p-3" to="/">
                  <img src={CalendarWeekSVG}/>
                  <div>Option</div>
                </Link>
              </div>
            </div>
          </BrowserRouter>
        }

        notificationContent={
          <div className="modal-content p-2" style={{width: '60vw'}}>
          <ExampleTabSelector />
          </div>
        }
        notificationCount={7}

        profileContent={
          <div className="modal-content p-2" style={{width: '60vw'}}>
          <ExampleTabSelector />
          </div>
        }
        profileLogo="../examples/assets/logo-fanatics.png"
        profilePicture = "../examples/assets/avatar-pic.png"
      />
      <BrowserRouter>
        <SideMenu menuData={menuData}/>
      </BrowserRouter>
    </>
  )
}

<App />
```
