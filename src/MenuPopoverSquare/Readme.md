This is a component stub, essentially a template for making new components.
___
#### **How do I make a component?**
___
  * Run `npm run component:stub`
  * Rename component to desired name, and update all references
  * Make component exportable by adding it to `src/index.js`
  * Preview components in styleguidist using `npm run styleguide`
___
#### **What does a component need to have**
___
A component only needs to have:
  * `index.js`
  * `ComponentName.jsx`

As nice to haves
  * `Readme.md` to enhance component in Styleguidist
  * `ComponentName.spec.js` because unit testing is always smart
  * `style.scss` to style things

___
#### **How do I style a component?**
___
**Completely custom element?**

Import the variables, mixins, and helpers all in one go
```scss
@import "~@ac-ui/design-system/src/base";
```

**Is it built around a TWBS Component**

Import the 'bridge', which imports variables, helpers, and utility classes for the component
```scss
@import "~@ac-ui/design-system/src/bridge/buttons";
```

**Always style using variables, and TWBS where possible!**

A variable doesn't exist?
  * Is there one close to it? Use that.
  * Is it going to be used only in this component? Initiate variable there
  * Is it only going to be used in many files? Add it to @ac-ui/design-system
___
#### **How do I use this component?**
___
**Example:** Can receive a string
```jsx
<Component>里îßPseudo language is preferred in tests里îß</Component>
```

**Example:** Can receive HTML
```jsx
<Component><strong>里îßPseudo language is preferred in tests里îß</strong></Component>
```
