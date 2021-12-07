Modal component for Avenue Code.
This component is a custom wrapper around `react-modal` with preset configurations. For a complete list of available props and configurations, refer to the [`react-modal` documentation](http://reactcommunity.org/react-modal/#usage).
**When using the Modal component, remember to apply the `aria-hidden` attribute to your `App` component.**
**It is important for screenreaders that other page content be hidden while the `Modal` is open.**

___
#### **How do I style this component?**
___
This component uses `Bootstrap modal` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@avenueeco/design-system/src/bridge/modal";
```
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop, include them as part of `children` nodes, or apply your own custom styles.

**Don't see the import for `Avenue Eco` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-modal` or displayname `Modal`.

___
#### **How do I use this component?**
___
**Example:** Default
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleModal = () => {
  const classes = ['custom', 'custom-modal'];
  const ariaAttributes = {
    describedby: 'description',
  }
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        classList={classes}
        contentLabel="Example Modal"
        ariaAttributes={ariaAttributes}
        shouldCloseOnEsc={false}
      >
        <div className="modal-content">
          <h1 id="heading">Example Modal</h1>
          <p id="description">This is the main content.</p>
        </div>
      </Modal>
    </>
  )
}

<ExampleModal />
```
