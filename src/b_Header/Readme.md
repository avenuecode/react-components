Header component for Avenue Code.
This component uses the Avenue Code `HeaderTitle`, and `MenuPopover` components to create a custom Header.

#### **How do I style this component?**
___
This component uses `Bootstrap navbar`, `nav`, and `utility` classes in addition to `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@ac-ui/design-system/src/bridge/navbar";
@import "~@ac-ui/design-system/src/bridge/nav";
@import "~@ac-ui/design-system/src/bridge/utilities";
```

Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

**Don't see the import for `ac-ui` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-header` or displayname `Header`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
```jsx
<Header title="AC Header" />
```

**Example:** Include navigation
```jsx
<Header
  title="AC Header"
  nav={
    [
      <a className="nav-link" href="#">Opportunities</a>,
      <a className="nav-link" href="#">Contacts</a>,
      <a className="nav-link" href="#">Accounts</a>,
    ]
  }
/>
```

**Example:** Include hamburger icon
```jsx
<Header
  title="AC Header"
  onHamburgerMenuClick={() => null}
/>
```

**Example:** Include menu popover
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);
  const handleClose = () => setOpen(false);

  const PopoverToggle = () => (
    <Button
      classList="ac-menu-popover__button nav-link btn btn-link rounded-circle text-white px-1"
      id="popover-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={handleClick}
    >
      Open
    </Button>
  );

  return (
    <Header
      title="AC Header"
      popoverToggle={<PopoverToggle />}
      popoverContent={<p className="dropdown-item text-white">Header Popover</p>}
      isPopoverOpen={isOpen}
      onPopoverClose={handleClose}
    />
  )
}

<ExampleHeader />
```
