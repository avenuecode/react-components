Table component for Avenue Code.
Generates a HTML table element given a data array or a custom React component. All global HTML attributes are supported. Pass them in as you would normally using React props.
This component makes use of `<TableHeader>`, `<TableBody>` and `<TableRow>` sub-components, each of which are reusable independently as well.
**Don't forget to add a caption for your table. It helps screen reader users find the table and understand it’s content and decide if they want to read it.**

___
#### **How do I style this component?**
___
This component uses `Bootstrap table` classes in addition to `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import Bootstrap classes:
```scss
@import "~@avenueeco/design-system/src/bridge/tables";
```
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

**Don't see the import for `Avenue Eco` base styles?**  
That's because they're already included when importing `bridge`, no need to duplicate import!

___
#### **How can I reference this component?**
___
This component can be accessed using the classname `ac-table` or displayname `Table`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Render table using a data array
```jsx
const caption = 'This is an example table created using a data array.';
const headerNames = ['Name', 'Billable Hours', 'Total Pay'];
const tableData = [
  ['John Doe', '80', '$2020.00'],
  ['Jane Smith', '55', '$1388.75'],
  ['John Appleseed', '40', '$1010.00']
];

<Table caption={caption} headerNames={headerNames} tableData={tableData} />
```

**Example:** Use a custom React component for the table body
```jsx
const caption = 'This is an example table created using a custom table body component.';
const headerNames = ['Name', 'Billable Hours', 'Total Pay', ''];
const CustomTableBody = () => {
  const tableData = [
    {name: 'John Doe', hours: '80', pay: '$2020.00'},
    {name:'Jane Smith', hours: '55', pay:'$1388.75'},
    {name:'John Appleseed', hours: '40', pay:'$1010.00'},
  ];

  return (
    <tbody>
    {
      tableData.map(rowData => {
        return (
          <tr key={rowData.hours}>
            <td className="d-table-cell align-middle text-center w-10 font-weight-bold">
              {rowData.name}
            </td>
            <td className="d-table-cell align-middle text-left">
              <p className="text-truncate name-field-width" title="custom-data">{rowData.hours}</p>
            </td>
            <td className="table-success">
              <span>{rowData.pay}</span>
            </td>
            <td className="d-table-cell align-middle text-center w-10">
              <button type="button" className="btn btn-sm btn-primary btn-plain btn-rounded">Check</button>
            </td>
          </tr>
        )
      })
    }
    </tbody>
  )
}

<Table caption={caption} headerNames={headerNames} CustomTableBody={CustomTableBody} />
```

**Example:** Style table using Bootstrap table classes
```jsx
const caption = 'This is an example table styled using Bootstrap.';
const headerNames = ['Name', 'Billable Hours', 'Total Pay'];
const tableData = [
  ['John Doe', '80', '$2020.00'],
  ['Jane Smith', '55', '$1388.75'],
  ['John Appleseed', '40', '$1010.00']
];

<Table caption={caption} headerNames={headerNames} tableData={tableData} classList="table-sm table-striped" />
```
