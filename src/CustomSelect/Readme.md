CustomSelect component for Avenue Code.
This component creates a dropdown select menu. All default HTML select attributes also work. Pass them in as you would normally using React props.

There are a few additional points to keep in mind when using CustomSelect:
  * Selected value should explicitly reference an item value
  * Selected option should represent itself in the DOM as selected
  * Forms require a label, or an aria-label for a11y

___
#### **How do I style this component?**
___
This component uses `Bootstrap form` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@avenueeco/design-system/src/bridge/forms";
```
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

**Don't see the import for `Avenue Eco` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-custom-select` or displayname `CustomSelect`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleCustomSelect = () => {
  const [selected, setSelected] = useState(0);
  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <div className="w-100 bg-info p-4">
      <div className="w-25">
        <CustomSelect
          items={[{ name: 'Client', id: 1 }, { name: 'Task', id: 2 }]}
          selectedValue={selected}
          idKey="id"
          valueKey="name"
          name="activityId"
          onDropDownItemChange={handleChange}
          onDropDownItemBlur={()=>{}}
        />
      </div>
    </div>
  )
}

<ExampleCustomSelect />
```

**Example:** Pre-selection option
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleCustomSelect = () => {
  const [selected, setSelected] = useState(1);
  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <div className="w-100 bg-info p-4">
      <div className="w-25">
        <CustomSelect
          items={[{ name: 'Client', id: 1 }, { name: 'Task', id: 2 }]}
          selectedValue={selected}
          idKey="id"
          valueKey="name"
          name="activityId"
          onDropDownItemChange={handleChange}
          onDropDownItemBlur={()=>{}}
        />
      </div>
    </div>
  )
}

<ExampleCustomSelect />
```

**Example:** Custom fallback text when no items are passed to dropdown
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleCustomSelect = () => {
  const [selected, setSelected] = useState(0);
  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <div className="w-100 bg-info p-4">
      <div className="w-25">
        <CustomSelect
          items={[]}
          selectedValue={selected}
          idKey="id"
          valueKey="name"
          name="activityId"
          noItemsText="Items array is empty"
          onDropDownItemChange={handleChange}
          onDropDownItemBlur={()=>{}}
        />
      </div>
    </div>
  )
}

<ExampleCustomSelect />
```

**Example:** Custom placeholder text of unselected dropdown
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleCustomSelect = () => {
  const [selected, setSelected] = useState(0);
  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <div className="w-100 bg-info p-4">
      <div className="w-25">
        <CustomSelect
          items={[{ name: 'Client', id: 1 }, { name: 'Task', id: 2 }]}
          selectedValue={selected}
          idKey="id"
          valueKey="name"
          name="activityId"
          dummyOptionText="Please select me"
          onDropDownItemChange={handleChange}
          onDropDownItemBlur={()=>{}}
        />
      </div>
    </div>
  )
}

<ExampleCustomSelect />
```

**Example:** Disabled dropdown
```jsx
import { useState } from 'react';
import Button from '../Button';

const ExampleCustomSelect = () => {
  const [selected, setSelected] = useState(0);
  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <div className="w-100 bg-info p-4">
      <div className="w-25">
        <CustomSelect
          items={[{ name: 'Client', id: 1 }, { name: 'Task', id: 2 }]}
          selectedValue={selected}
          idKey="id"
          valueKey="name"
          name="activityId"
          disabled
          onDropDownItemChange={handleChange}
          onDropDownItemBlur={()=>{}}
        />
      </div>
    </div>
  )
}

<ExampleCustomSelect />
```
