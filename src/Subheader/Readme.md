Subheader component for Avenue Code.
Should sit right below the page header

The name to the left will correspond to the current page, the right hand side of the subheader
can be filled with useful links or other information

___
#### **How do I style this component?**
___
This component uses `Avenue Eco` base styles (which includes Bootstrap SCSS variables, functions, and mixins).
To apply default styles, import `Avenue Eco` base style:
```scss
@import "~@avenueeco/design-system/src/base";
```
  
Thereafter, you can pass in Bootstrap classnames via the `classList` prop or apply your own custom styles.

___
#### **How can I reference this component?**
___
This component content can be accessed using the classname `ac-subheader` or displayname `Subheader`.

___
#### **How do I use this component?**
___
**Example:** Default
```jsx
<div className="bg-info p-5">
	<Subheader title={<span>Subheading text</span>} content={'Optional content'} />
</div>
```
