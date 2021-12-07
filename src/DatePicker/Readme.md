DatePicker component for Avenue Code.
This component is a custom wrapper for `react-datepicker ` with preset configurations. Some usage examples are given below. For a complete list of configuration options, refer to the [react-datepicker documentation](https://reactdatepicker.com/).

___
#### **How do I style this component?**
___
This component uses `Bootstrap button` and `utility` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@avenueeco/design-system/src/bridge/buttons";
@import "~@avenueeco/design-system/src/bridge/utilities";
```

Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

**Don't see the import for `Avenue Eco` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component content can be accessed using the classname `ac-datepicker` or displayname `DatePicker`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker onChange={handleChange} selected={date} />
  );
}

<ExampleDatePicker />
```

**Example:** Custom date format (MMMM d, yyyy h:mm aa)
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}

<ExampleDatePicker />
```

**Example:** Custom calendar popper placement (top-start)
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      popperPlacement="top-start"
    />
  );
}

<ExampleDatePicker />
```

**Example:** Custom calendar header
```jsx
import { useState } from 'react';

const CustomHeader = (props) => (
  <section>
    <button className="btn btn-sm btn-danger px-4 mx-3" onClick={props.decreaseMonth} disabled={props.prevMonthButtonDisabled}>{'<'}</button>
    <span>{props.date.toDateString()}</span>
    <button className="btn btn-sm btn-danger px-4 mx-3" onClick={props.increaseMonth} disabled={props.nextMonthButtonDisabled}>{'>'}</button>
  </section>
);

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      customHeader={CustomHeader}
    />
  );
}

<ExampleDatePicker />
```

**Example:** Custom today button
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      todayButton={'What day is it today?'}
    />
  );
}

<ExampleDatePicker />
```

**Example:** Another custom today button
```jsx
import { useState } from 'react';

const TodayButton = (props) => (
    <button className="btn btn-sm btn-danger" >What day is it today?</button>
);

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      todayButton={<TodayButton />}
    />
  );
}

<ExampleDatePicker />
```

**Example:** Custom input/toggle button using Bootstrap button classes
```jsx
import { useState, forwardRef } from 'react';

const Toggle = forwardRef((props, ref) => (
  <button type="button" className="btn btn-primary" ref={ref} onClick={props.onClick}>{props.value}</button>
));

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      useCustomInput={true}
      customInput={<Toggle />}
    />
  );
}

<ExampleDatePicker />
```

**Example:** Apply the built-in custom input/toggle button
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      useCustomInput={true}
    />
  );
}

<ExampleDatePicker />
```

**Example:** Apply Bootstrap classes to style calendar component
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      calendarClassList="bg-warning"
    />
  );
}

<ExampleDatePicker />
```

**Example:** Apply Bootstrap classes to style input/toggle component
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      inputClassList="rounded border-secondary bg-success"
    />
  );
}

<ExampleDatePicker />
```

**Example:** Create alert when date changes
```jsx
import { useState } from 'react';

const ExampleDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <DatePicker
      onChange={handleChange}
      selected={date}
      onChange={(date) => alert(date)}
    />
  );
}

<ExampleDatePicker />
```
