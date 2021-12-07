TableHeader component for Avenue Code. This component should appear as child of `<table>`.
Generates a HTML thead element given an array of column headings. All global HTML attributes are supported. Pass them in as you would normally using React props.

___
#### **How do I style this component?**
___
This component uses `Bootstrap utility` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@avenueeco/design-system/src/bridge/utilities";
```

Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

**Don't see the import for `Avenue Eco` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-table-header` or displayname `TableHeader`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
```jsx
const headerNames = ['Name', 'Billable Hours', 'Total Pay'];

<table className="table table-bordered table-hover">
  <TableHeader headerNames={headerNames} />
</table>
```

**Example:** Add custom styling using Bootstrap classes
```jsx
const headerNames = ['Name', 'Billable Hours', 'Total Pay'];

<table className="table table-bordered table-hover">
  <TableHeader headerNames={headerNames} classList="thead-dark" />
</table>
```
