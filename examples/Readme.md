Here you will find illustrated examples of how the `Components Library` can be integrated to create complex components or even complete applications (eventually).

___
#### [**ACDC login page**](https://acdc2.avenuecode.com/login) (https://acdc2.avenuecode.com/login)
Features:
  * Click on the sign-in button to display a menu popover
___
**styles.scss**
```scss
@import '~@ac-ui/design-system/src/page';                 // Imports Bootstrap utility classes
@import '~@ac-ui/design-system/src/bridge/grid';          // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/buttons';       // Imports ac-ui base styles
@import "~@ac-ui/design-system/src/bridge/dropdown";      // Imports ac-ui base styles
@import "~@ac-ui/design-system/src/bridge/button-group";  // Imports ac-ui base styles
```

**App.jsx**
```jsx
import React, { useState } from 'react';
import AClogo from './assets/logo-avenue-code.svg';
import { HeaderTitle, Row, MenuPopover, Button } from '../src';

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);
  const handleClose = () => setOpen(false);

  const brandName = 'ACDC Plus';
  const PopoverToggle = () => (
    <Button
      classList="btn btn-primary rounded-pill"
      id="popover-toggle"
      onClick={handleClick}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={isOpen}
      style={{
        'borderRadius': '24px',
      }}
    >
      SIGN IN
    </Button>
  );

  return (
    <div className="acdc-login acdc-login-wrapper container mt-5">
      <Row classList="d-flex justify-content-center">
        <div className="acdc-login__presentation col-4 px-4 col">

          <header className="acdc-login__presentation-header">
            <img className="acdc-login__presentation-header__logo" src={AClogo} alt="Avenue Code logo" />
            <HeaderTitle text={brandName} classList="acdc-login__presentation-header__title text-uppercase my-4" />
          </header>

          <main className="acdc-login__presentation-content">
            <p>
              ACDC Plus is the main system where you can submit your worked hours, follow-up your bank of hours balance, and make requests such as Out of Office and Working from Home.
            </p>
          </main>

          <footer className="acdc-login__presentation-footer">
            <form className="acdc-login__presentation-footer__form form">

              <MenuPopover isOpen={isOpen} onClose={handleClose} toggle={<PopoverToggle />}>
                <div className="dropdown-item">
                  <div className="justify-content-center">
                    <p className="mb-0">Sign-in Button</p>
                    <div className="dropdown-divider"></div>
                    <small>This button does not actually work.</small>
                  </div>
                </div>
              </MenuPopover>

            </form>
          </footer>

        </div>
      </Row>
    </div>
  );
}

<App />
```

___
#### **Modal with embedded table and loading bar**
___
**styles.scss**
```scss
@import '~@ac-ui/design-system/src/page';           // Imports Bootstrap utility classes
@import '~@ac-ui/design-system/src/bridge/forms';   // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/modal';   // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/buttons'; // Imports ac-ui base styles
`@import "~@ac-ui/design-system/src/bridge/tables"` // Imports ac-ui base styles
```

**App.jsx**
```jsx
import React, { useState } from 'react';
import { X } from 'react-feather';
import { Modal, Button, LoadingBar, AlternatingText, Table } from '../src';

const App = () => {
  // Hooks
  const [isOpen, setOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  // Event handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tableCaption = 'This is an example table.';
  const tableHeaders = ['Account', 'Opportunities', 'Revenue', 'Actions']
  const tableData = [
    ['Apple', '23', 'Less than $100 USD', <Button classList="btn btn-sm btn-outline-primary">Edit</Button>],
    ['Brazuca', '3', 'Less than $100 USD', <Button classList="btn btn-sm btn-outline-primary">Edit</Button>],
    ['Caterpillar', '5', 'More than $100 USD', <Button classList="btn btn-sm btn-outline-primary">Edit</Button>],
  ];

  return (
    <>
      <Button classList="btn btn-primary btn-block" onClick={handleOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        contentLabel="Modal with loading bar"
      >
        <div className="modal-content">
          <LoadingBar isLoading={isOpen} />

          <div className="example-form-wrapper p-5 bg-white border rounded">
            <form className="example-form">

              <section className="modal-header d-flex justify-content-between align-items-center mb-3">
                <AlternatingText text="Monthly Report" As="h2" separator=" " isReversed={true} />
                <X className="clickable" onClick={handleClose} />
              </section>

              <section className="modal-body">
                <Table
                  caption={tableCaption}
                  headerNames={tableHeaders}
                  tableData={tableData}
                  classList="table-sm table-striped"
                />
                <label
                  htmlFor="description"
                  className="col-form-label-sm text-secondary text-uppercase"
                >
                  Description
                </label>
                <textarea name="description" className="form-control form-control-text-area mb-5"></textarea>
              </section>

              <section className="modal-footer">
                <Button classList="btn btn-outline-danger text-uppercase font-weight-bold">Delete</Button>
                <Button classList="btn btn-primary text-uppercase font-weight-bold">Save</Button>
              </section>

            </form>
          </div>

        </div>
      </Modal>
    </>
  );
}

<App />
```

___
#### **Interactive form with page header**
Features:
  * Alert modal with warning dialog if fields are empty when `submit` is clicked
  * Loading bar becomes active when form is correctly submitted (i.e. complete all fields and then click `submit`)
  * When loading is active, you can stop it by clicking on `cancel`
___
**styles.scss**
```scss
@import '~@ac-ui/design-system/src/page';           // Imports Bootstrap utility classes
@import '~@ac-ui/design-system/src/bridge/grid';    // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/forms';   // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/modal';   // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/buttons'; // Imports ac-ui base styles
@import "~@ac-ui/design-system/src/bridge/navbar";  // Imports ac-ui base styles
@import "~@ac-ui/design-system/src/bridge/nav";     // Imports ac-ui base styles
```

**App.jsx**
```jsx
import React, { useState, forwardRef } from 'react';
import { X } from 'react-feather';
import { Row, Button, CustomSelect, AlternatingText, DatePicker, AlertModal, LoadingBar, Header } from '../src';

const App = () => {
  // Hooks
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [date, setDate] = useState(new Date());
  const [formInput, setFormInput] = useState({
    requestTypeId: 0,
    startTime: '',
    endTime: '',
  })

  // Event handlers
  const handleAlert = () => { setLoading(false) };
  const handleDateChange = (newDate) => { setDate(newDate) };
  const handleClose = () => { setAlert(false) };
  const handleConfirm = () => {
    formInput.requestTypeId && formInput.startTime && formInput.endTime ? setLoading(true) : setAlert(true);
  };
  const handleFormInput = (e) => {
    if(e.target.name === 'requestTypeId') {
      setFormInput({ ...formInput, requestTypeId: e.target.value });
    } else if(e.target.name === 'startTime') {
      setFormInput({ ...formInput, startTime: e.target.value });
    } else {
      setFormInput({ ...formInput, endTime: e.target.value });
    }
  }

  // Custom DatePicker Toggle
  const DateToggle = forwardRef((props, ref) => (
    <Button
      classList="btn btn-outline-primary"
      ref={ref}
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  ));

  // Header navigation
  const nav = [
    <a className="nav-link" href="#">Opportunities</a>,
    <a className="nav-link" href="#">Contacts</a>,
    <a className="nav-link" href="#">Accounts</a>,
  ];

  // CustomSelect item list
  const requestTypes = [
    { value: 1 , type: 'Extra Hours' },
    { value: 2 , type: 'Floating Holiday' },
    { value: 3 , type: 'Justified Absence' },
    { value: 4 , type: 'Out of Office' },
    { value: 5 , type: 'PTO/Vacation' },
    { value: 6 , type: 'Sick' },
    { value: 7 , type: 'Unpaid Time Off' },
    { value: 8 , type: 'Working from Home' },
    { value: 9 , type: 'Working on Late Night' },
    { value: 10 , type: 'Working on Weekend or Holiday' },
  ]

  return (
    <>
      <Header title="AC UI" nav={nav} onHamburgerMenuClick={() => null} classList="mb-5" />
      <div className="border rounded position-relative mx-auto" style={{ width: '65%' }}>
        <LoadingBar isLoading={loading} />
        <form className="request-form p-5">

          <section className="form-header d-flex justify-content-between align-items-center">
            <AlternatingText text="Add Request" As="h2" separator=" " isReversed={true} />
          </section>

          <section className="form-body">
            <Row classList="row m-0">
              <div className="form-group col col-sm-6 pl-0 pr-4">
                <label
                  htmlFor="requestTypeId"
                  className="col-form-label-sm text-secondary text-uppercase"
                >
                  Request Type
                </label>
                <CustomSelect
                  items={requestTypes}
                  selectedValue={formInput.requestTypeId}
                  idKey="value"
                  valueKey="type"
                  name="requestTypeId"
                  dummyOptionText="Select an item"
                  classList="custom-select-sm"
                  onDropDownItemChange={handleFormInput}
                  onDropDownItemBlur={()=>{}}
                />
              </div>
              <div className="form-group col col-sm-4 pl-4 pr-0">
                <label
                  htmlFor="requestDate"
                  className="col-form-label-sm text-secondary text-uppercase"
                >
                  Request Date
                </label>
                <DatePicker
                  onChange={handleDateChange}
                  selected={date}
                  useCustomInput={true}
                  customInput={<DateToggle />}
                />
              </div>
            </Row>
            <Row classList="row mx-0 mb-5">
              <div className="form-group col col-sm-4 pl-0 pr-4">
                <label
                  htmlFor="startTime"
                  className="col-form-label-sm text-secondary text-uppercase"
                >
                  Start Time
                </label>
                <input
                  placeholder="__:__"
                  name="startTime"
                  className="form-control"
                  value={formInput.startTime}
                  onChange={handleFormInput}
                />
              </div>
              <div className="form-group col col-sm-4 pl-4 pr-0">
                <label
                  htmlFor="endTime"
                  className="col-form-label-sm text-secondary text-uppercase"
                >
                  End Time
                </label>
                <input
                  placeholder="__:__"
                  name="endTime"
                  className="form-control "
                  value={formInput.endTime}
                  onChange={handleFormInput}
                />
              </div>
            </Row>
          </section>

          <section className="form-footer d-flex justify-content-around">
            <Button
              classList="btn btn-outline-danger text-uppercase font-weight-bold"
              onClick={handleAlert}
            >
              Cancel
            </Button>
            <Button
              classList="btn btn-primary text-uppercase font-weight-bold"
              onClick={handleConfirm}
            >
              Submit
            </Button>
            <AlertModal
              isOpen={alert}
              onClose={handleClose}
              title="Alert"
              description="Fill in all entries!"
              dialogType="warning"
            />
          </section>

        </form>
      </div>
    </>
  )
}

<App />
```


___
#### **New Version Preview**
Features:
  * Alert modal with warning dialog if fields are empty when `submit` is clicked
  * Loading bar becomes active when form is correctly submitted (i.e. complete all fields and then click `submit`)
  * When loading is active, you can stop it by clicking on `cancel`
___
**styles.scss**
```scss
@import '~@ac-ui/design-system/src/page';           // Imports Bootstrap utility classes
@import '~@ac-ui/design-system/src/bridge/grid';    // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/forms';   // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/modal';   // Imports ac-ui base styles
@import '~@ac-ui/design-system/src/bridge/buttons'; // Imports ac-ui base styles
@import "~@ac-ui/design-system/src/bridge/navbar";  // Imports ac-ui base styles
@import "~@ac-ui/design-system/src/bridge/nav";     // Imports ac-ui base styles

```

**App.jsx**
```jsx
import React, { useState, forwardRef } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { X } from 'react-feather';
import { TabSelector } from '../src';
import Header from '../src/b_Header';
import SideMenu from '../src/b_SideMenu';

import AClogoSVG from './assets/logo-avenue-code.svg';
import CalendarWeekSVG from './assets/calendar-week.svg';
import CalendarMonthSVG from './assets/calendar-month.svg';
import MessageRequestSVG from './assets/message-request.svg';
import BriefcaseSVG from './assets/briefcase.svg';
import DollarSignSVG from './assets/dollar-sign.svg';
import ClockSVG from './assets/clock.svg';
import CrosshairSVG from './assets/crosshair.svg';
import UsersSVG from './assets/users.svg';
import MapPinSVG from './assets/map-pin.svg';


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
        linkComponent:<Link className="ac-side-menu-item-text" to="/">Timesheets</Link>
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