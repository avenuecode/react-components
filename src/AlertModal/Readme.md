AlertModal component for Avenue Code.
This component uses the Avenue Code `Modal` component to generate a custom Alert Modal.
**When using the AlertModal component, remember to apply the `aria-hidden` attribute to your `App` component.**
**It is important for screenreaders that other page content be hidden while the `Modal` is open.**

___
#### **How do I style this component?**
___
This component uses `Bootstrap modal`, `button`, and `utility` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@avenueeco/design-system/src/bridge/modal";
@import "~@avenueeco/design-system/src/bridge/buttons";
@import "~@avenueeco/design-system/src/bridge/utilities";
```

Thereafter, you can pass in Bootstrap classnames via the `classList` prop, include them as part of `children` nodes, or apply your own custom styles.

**Don't see the import for `Avenue Eco` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-modal--alert` or displayname `AlertModal`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleModal = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Alert</Button>
      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Example Alert"
        description="This is an alert!"
      />
    </>
  )
}

<ExampleModal />
```

**Example:** Custom button label
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleModal = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Alert</Button>
      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Example Alert"
        description="This is an alert!"
        buttonLabel="Dismiss Alert"
      />
    </>
  )
}

<ExampleModal />
```

**Example:** Custom dialog icon
```jsx
import { useState } from 'react';
import Button from '../Button';

const DialogIcon = () => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12" y2="16" />
    </svg>
);

const ExampleModal = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Alert</Button>
      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Example Alert"
        description="This is an alert!"
        dialogIcon={<DialogIcon className="feather-64" />}
      />
    </>
  )
}

<ExampleModal />
```

**Example:** Warning dialog type
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleModal = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Alert</Button>
      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Example Alert"
        description="This is an warning!"
        dialogType="warning"
      />
    </>
  )
}

<ExampleModal />
```

**Example:** Apply Bootstrap modal class to change modal size.
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleModal = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Alert</Button>
      <AlertModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Example Alert"
        description="This is an warning!"
        classList="modal-sm"
      />
    </>
  )
}

<ExampleModal />
```
