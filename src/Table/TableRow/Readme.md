TableRow component for Avenue Code. This component should appear as child of `<tbody>`.
Generates a HTML tr element given an array of data or a custom React Component. If both are passed in, the custom React Component will take precedence and be rendered. All global HTML attributes are also supported. Pass them in as you would normally using React props.

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
This component can be accessed using the classname `ac-table-row` or displayname `TableRow`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Create table row using a data array
```jsx
const rowData = ['John Appleseed', '40', '$1010.00'];

<table className="table table-bordered table-hover">
  <tbody>
    <TableRow rowData={rowData} />
  </tbody>
</table>
```

**Example:** Create table row using a custom React component
```jsx
const CustomTableRow = () => (
  <tr>
    <td className="d-table-cell align-middle text-center w-10 font-weight-bold">John Appleseed</td>
    <td className="d-table-cell align-middle text-left">
      <p className="text-truncate name-field-width" title="custom-data">40</p>
    </td>
    <td className="table-success">
      <span>$1010.00</span>
    </td>
    <td className="d-table-cell align-middle text-center w-10">
      <button type="button" className="btn btn-sm btn-primary btn-plain btn-rounded">Check</button>
    </td>
  </tr>
);

<table className="table table-bordered table-hover">
  <tbody>
    <TableRow CustomTableRow={CustomTableRow} />
  </tbody>
</table>
```

**Example:** Add custom styling using Bootstrap classes
```jsx
const rowData = ['John Appleseed', '40', '$1010.00'];

<table className="table table-bordered table-hover">
  <tbody>
    <TableRow rowData={rowData} classList="bg-danger" />
  </tbody>
</table>
```
