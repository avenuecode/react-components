TabSelector component for Avenue Code.
This component creates a tab selector header. All default HTML attributes and React Component work. Pass them in as you would normally using React props.

There are a few additional points to keep in mind when using TabSelector:

- Tab Items should be sent as a React Component, that could be a link of `react-router-dom` or a simple HTML link
- Current Tab value should explicitly reference the ID/value of active tab in order to give control to the user that is using the component

---

#### **How do I style this component?**

---

This component uses `Bootstrap nav` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:

```scss
@import '~@avenueeco/design-system/src/base';
@import '~@avenueeco/design-system/src/bridge/nav';
```

---

### **How can I reference this component?**

---

This component can be accessed using the classname `ac-tab-selector` or displayname `TabSelector`.

---

### **How do I use this component?**

---

Below are some self-contained usage examples.

**Example:** Using `react-router-dom`: The page content is involved by `BrowserRouter` giving the possibility to use `Routes`. So in this case is sent to the `TabSelector` component the list of `tabItems` using `Link` from `react-router-dom`. In addition is used a `currentTab` state which is changed on tab click, giving the possibility to manipulate the page content using its value.

```jsx
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'REQUEST',
      path: '/request-management',
      label: 'Management'
    },
    {
      id: 'WEEKS',
      path: '/weeks-management',
      label: 'Weeks'
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabItemsData[0].id);

  const tabItems = tabItemsData.map(tabData => (
    <Link
      key={tabData.id}
      to={tabData.path}
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      onClick={() => {
        setCurrentTab(tabData.id);
      }}
    >
      {tabData.label}
    </Link>
  ));

  return (
    <>
      <BrowserRouter>
        <div className="page-wrapper container d-flex flex-column">
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <TabSelector tabItems={tabItems} />
          </div>
          <hr className="my-4" />
        </div>
      </BrowserRouter>
    </>
  );
};

<ExampleTabSelector />;
```

**Example:** Using `react-router-dom`: The page content is involved by `BrowserRouter` giving the possibility to use `Routes`. So in this case is sent to the `TabSelector` component the list of `tabItems` using `Link` from `react-router-dom`, that will load the spicific component from the pointed `Route`. In addition is used a `currentTab` state which is changed on tab click, giving the possibility to manipulate the page content using its value, like the tab style (present on this example).

```jsx
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'HOME',
      path: '/',
      label: 'Home'
    },
    {
      id: 'ABOUT',
      path: '/about',
      label: 'About'
    },
    {
      id: 'Topics',
      path: '/topics',
      label: 'Topics'
    }
  ];

  function Home() {
    return (
      <div>
        <h2>Home Content</h2>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h2>About Content</h2>
      </div>
    );
  }

  function Topics() {
    return (
      <div>
        <h2>Topics Content</h2>
      </div>
    );
  }

  const [currentTab, setCurrentTab] = useState('/');

  const tabItems = tabItemsData.map(tabData => (
    <Link
      key={tabData.id}
      to={tabData.path}
      className={`nav-link ${currentTab === tabData.path ? 'active' : ''}`}
      onClick={() => {
        setCurrentTab(tabData.path);
      }}
    >
      {tabData.label}
    </Link>
  ));

  return (
    <>
      <BrowserRouter>
        <div className="page-wrapper container d-flex flex-column">
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <h2 className="text-capitalize font-weight-black no-selec">
              Title
            </h2>
            <TabSelector tabItems={tabItems} />
          </div>
          <hr className="my-4" />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    </>
  );
};

<ExampleTabSelector />;
```

**Example:** Using HTML `button`: Tabs are created using `button`. In addition is used a `currentTab` state which is changed on tab click, giving the possibility to manipulate the page content using its value.

```jsx
import React, { useState, Fragment } from 'react';

const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'home',
      label: 'Home',
      content: (
        <div>
          <h2>Home Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Condimentum lacinia quis vel eros donec ac. Morbi enim nunc faucibus
            a. Fermentum et sollicitudin ac orci phasellus egestas. Quisque id
            diam vel quam. Velit ut tortor pretium viverra suspendisse potenti
            nullam ac. Integer malesuada nunc vel risus. Viverra orci sagittis
            eu volutpat odio. Maecenas sed enim ut sem. Senectus et netus et
            malesuada fames ac turpis egestas. Sollicitudin nibh sit amet
            commodo nulla facilisi.
          </p>
        </div>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      content: (
        <div>
          <h2>Profile Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Condimentum lacinia quis vel eros donec ac. Morbi enim nunc faucibus
            a. Fermentum et sollicitudin ac orci phasellus egestas.
          </p>
        </div>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      content: (
        <div>
          <h2>Contact Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Condimentum lacinia quis vel eros donec ac. Morbi enim nunc faucibus
            a. Fermentum et sollicitudin ac orci phasellus egestas. Quisque id
            diam vel quam. Velit ut tortor pretium viverra suspendisse potenti
            nullam ac. Integer malesuada nunc vel risus. Viverra orci sagittis
            eu volutpat odio.
          </p>
        </div>
      )
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabItemsData[0].id);

  const tabItems = tabItemsData.map(tabData => (
    <button
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      id={tabData.id}
      key={tabData.id}
      data-toggle="tab"
      role="tab"
      onClick={event => {
        event.preventDefault();
        setCurrentTab(tabData.id);
      }}
    >
      {tabData.label}
    </button>
  ));

  return (
    <>
      <Fragment>
        <div className="page-wrapper d-flex flex-column">
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <TabSelector tabItems={tabItems} />
          </div>
          <hr className="my-4" />
          <div className="tab-content">
            {tabItemsData.map(tabData => (
              <div
                className={`tab-pane fade ${
                  currentTab === tabData.id ? 'show active' : ''
                }`}
                id={tabData.id}
                role="tabpanel"
                key={tabData.id}
              >
                {tabData.content}
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    </>
  );
};

<ExampleTabSelector />;
```

**Example:** Using HTML `hyperlinks`: Tabs are created using `hyperlinks`. In addition is used a `currentTab` state which is changed on tab click, giving the possibility to manipulate the page content using its value. And in this example the tab transition animation is disabled.

```jsx
import React, { useState, Fragment } from 'react';

const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'dashboard',
      path: '#',
      label: 'Dashboard',
      content: (
        <div>
          <h2>Dashboard Content</h2>
        </div>
      )
    },
    {
      id: 'testA',
      path: '#',
      label: 'Test A',
      content: (
        <div>
          <h2>Test A Content</h2>
        </div>
      )
    },
    {
      id: 'testB',
      path: '#',
      label: 'Test B',
      content: (
        <div>
          <h2>Test B Content</h2>
        </div>
      )
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabItemsData[0].id);

  const tabItems = tabItemsData.map(tabData => (
    <a
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      id={tabData.id}
      key={tabData.id}
      data-toggle="tab"
      href={tabData.path}
      role="tab"
      onClick={event => {
        event.preventDefault();
        setCurrentTab(tabData.id);
      }}
    >
      {tabData.label}
    </a>
  ));

  return (
    <>
      <Fragment>
        <div className="page-wrapper d-flex flex-column">
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <TabSelector
              tabItems={tabItems}
              hasTabTransitionAnimation={false}
            />
          </div>
          <hr className="my-4" />
          <div className="tab-content">
            {tabItemsData.map(tabData => (
              <div
                className={`tab-pane fade ${
                  currentTab === tabData.id ? 'show active' : ''
                }`}
                id={tabData.id}
                role="tabpanel"
                key={tabData.id}
              >
                {tabData.content}
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    </>
  );
};

<ExampleTabSelector />;
```


# Other variants
You can specify the following variants to this component:
### Engage

```jsx
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'REQUEST',
      path: '/request-management',
      label: 'My Time Entries'
    },
    {
      id: 'WEEKS',
      path: '/weeks-management',
      label: 'Weeks'
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabItemsData[0].id);

  const tabItems = tabItemsData.map(tabData => (
    <Link
      key={tabData.id}
      to={tabData.path}
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      onClick={() => {
        setCurrentTab(tabData.id);
      }}
    >
      {tabData.label}
    </Link>
  ));

  return (
    <>
      <BrowserRouter>
        <div className="page-wrapper container d-flex flex-column">
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <TabSelector tabItems={tabItems} variant="engage" />
          </div>
          <hr className="my-4" />
        </div>
      </BrowserRouter>
    </>
  );
};

<ExampleTabSelector />;
```

### Expand

```jsx
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'REQUEST',
      path: '/request-management',
      label: 'Management'
    },
    {
      id: 'WEEKS',
      path: '/weeks-management',
      label: 'Weeks'
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabItemsData[0].id);

  const tabItems = tabItemsData.map(tabData => (
    <Link
      key={tabData.id}
      to={tabData.path}
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      onClick={() => {
        setCurrentTab(tabData.id);
      }}
    >
      {tabData.label}
    </Link>
  ));

  return (
    <>
      <BrowserRouter>
        <div className="page-wrapper container d-flex flex-column">
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <TabSelector tabItems={tabItems} variant="expand" />
          </div>
          <hr className="my-4" />
        </div>
      </BrowserRouter>
    </>
  );
};

<ExampleTabSelector />;
```

### Exceed

```jsx
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'REQUEST',
      path: '/request-management',
      label: 'Management'
    },
    {
      id: 'WEEKS',
      path: '/weeks-management',
      label: 'Weeks'
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabItemsData[0].id);

  const tabItems = tabItemsData.map(tabData => (
    <Link
      key={tabData.id}
      to={tabData.path}
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      onClick={() => {
        setCurrentTab(tabData.id);
      }}
    >
      {tabData.label}
    </Link>
  ));

  return (
    <>
      <BrowserRouter>
        <div className="page-wrapper container d-flex flex-column">
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <TabSelector tabItems={tabItems} variant="exceed" />
          </div>
          <hr className="my-4" />
        </div>
      </BrowserRouter>
    </>
  );
};

<ExampleTabSelector />;
```

**Small Variants**
```jsx
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ExampleTabSelector = () => {
  const tabItemsData = [
    {
      id: 'REQUEST',
      path: '/request-management',
      label: 'Management'
    },
    {
      id: 'WEEKS',
      path: '/weeks-management',
      label: 'Weeks'
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabItemsData[0].id);

  

  const tabItems = tabItemsData.map(tabData => (
    <Link
      key={tabData.id}
      to={tabData.path}
      className={`nav-link ${currentTab === tabData.id ? 'active' : ''}`}
      onClick={() => {
        setCurrentTab(tabData.id);
      }}
    >
      {tabData.label}
    </Link>
  ));

  
  return (
    <>
      <BrowserRouter>
        <div className="tab-sm page-wrapper container d-flex flex-column">
          
          <div className="page-header section-header mt-5 mb-4 d-flex justify-content-between">
            <TabSelector tabItems={tabItems} variant="expand" />
          </div>
          <hr className="my-4" />
        </div>
      </BrowserRouter>
    </>
  );
};

<ExampleTabSelector />;
```
