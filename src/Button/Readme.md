Button component for Avenue Code.
Returns a HTLM button element of type `button`. All default HTML button attributes also work. Pass them in as you would normally using React props.

___
#### **How do I style this component?**
___
This component uses `Bootstrap button` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@avenueeco/design-system/src/bridge/buttons";
```
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop, include them as part of `children` nodes, or apply your own custom styles.

**Don't see the import for `Avenue Eco` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-button` or displayname `Button`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
```jsx
<Button>Button text</Button>
```

**Example:** Apply Bootstrap button classes to style button.
```jsx
<Button classList={['btn', 'btn-sm', 'btn-primary', 'btn-plain', 'btn-rounded']}>Button text</Button>
```

**Example:** Add onClick Handler
```jsx
<Button onClick={() => alert('Button alert!')}>Button text</Button>
```

**Example:** Apply HTML button disabled attribute
```jsx
<Button disabled>Button text</Button>
```
