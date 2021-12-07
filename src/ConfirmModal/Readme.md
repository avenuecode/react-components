ConfirmModal component for Avenue Code.
This component uses the Avenue Code `Modal` component to generate a custom Confirm Modal.
**When using the ConfirmModal component, remember to apply the `aria-hidden` attribute to your `App` component.**
**It is important for screenreaders that other page content be hidden while the `Modal` is open.**

___
#### **How do I style this component?**
___
This component uses `Bootstrap modal`, `button`, `utility` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
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
This component content can be accessed using the classname `ac-modal--confirm` or displayname `ConfirmModal`.

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
      <Button onClick={handleOpen}>Open Confirm Modal</Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => null}
        title="Example Confirm"
        subtitle="Are you sure?"
        disclaimer="This action cannot be undone."
      />
    </>
  )
}

<ExampleModal />
```

**Example:** Custom dismiss button label
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
      <Button onClick={handleOpen}>Open Confirm Modal</Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => null}
        title="Example Confirm"
        subtitle="Are you sure?"
        disclaimer="This action cannot be undone."
        dismissButtonLabel="Close this please!"
      />
    </>
  )
}

<ExampleModal />
```

**Example:** Custom confirm button label
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
      <Button onClick={handleOpen}>Open Confirm Modal</Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => null}
        title="Example Confirm"
        subtitle="Are you sure?"
        disclaimer="This action cannot be undone."
        confirmButtonLabel="I Accept"
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
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
      <Button onClick={handleOpen}>Open Confirm Modal</Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => null}
        title="Example Confirm"
        subtitle="Are you sure?"
        disclaimer="This action cannot be undone."
        dialogIcon={<DialogIcon className="feather-64" />}
      />
    </>
  )
}

<ExampleModal />
```

**Example:** Danger dialog type
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
      <Button onClick={handleOpen}>Open Confirm Modal</Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => null}
        title="Example Confirm"
        subtitle="Are you sure?"
        disclaimer="This action cannot be undone."
        dialogType="danger"
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
      <Button onClick={handleOpen}>Open Confirm Modal</Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => null}
        title="Example Confirm"
        subtitle="Are you sure?"
        disclaimer="This action cannot be undone."
        dialogType="warning"
      />
    </>
  )
}

<ExampleModal />
```

**Example:** Success dialog type
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
      <Button onClick={handleOpen}>Open Confirm Modal</Button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => null}
        title="Example Confirm"
        subtitle="Are you sure?"
        disclaimer="This action cannot be undone."
        dialogType="success"
      />
    </>
  )
}

<ExampleModal />
```
