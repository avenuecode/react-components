HeaderTitle component for Avenue Code.
This component uses the Avenue code 'AlternatingText' component to generate a custom header title.

___
#### **How do I style this component?**
___
This component uses `Bootstrap utility` classes in addition to `ac-ui` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@ac-ui/design-system/bridge/utilities";
```
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

**Don't see the import for `ac-ui` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-header-title` or displayname `HeaderTitle`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
```jsx
<HeaderTitle text="Header Title" />
```

**Example:** Apply custom style using Bootstrap classes
```jsx
<HeaderTitle text="Header Title" classList="text-uppercase" />
```
