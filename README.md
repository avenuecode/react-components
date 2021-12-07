# @avenueeco/react-components

A React Component library

## Installation
- Install as a npm dependency `npm i @avenueeco/react-components`
- Import component
    - ```jsx harmony
      import { Subheader } from '~@avenueeco/react-components';
      
      const Example = () => <Subheader title={"Subheader example"}/> 
      ```

## Contribution

Everyone is encouraged and welcome to contribute to @avenueeco/react-components! This library is built (being built) for 
Avenue Coders to use, and to develop. To maintain usability, keep code consistent, and to ensure a quality product,
linting and pre-commit hooks have been added in to the repository.

**How do I make a component?**
- Run `$ npm run component:stub`
- Rename component to desired name, and update all references
- Make component exportable by adding it to `src/index.js`
- Preview components in styleguidist using `npm run styleguide`

**What does a component need to have**
- A component only needs to have:
    - `index.js` (with the following content `export{ default as ComponentName } from './ComponentName' `)
    - `ComponentName.jsx`
- As nice to haves
    - `ComponentName.md` to enhance component in Styleguidist
    - `ComponentName.spec.js` because unit testing is always smart
    - `ComponentName.scss` to style things

**How do I style a component?**
- Completely custom element?
    - Import the variables, mixins, and helpers all in one go
        - (`@import "~@avenueeco/design-system/src/base";`)
- Is it built around a [TWBS Component](https://getbootstrap.com/docs/4.1/components)
    - Import the 'bridge', which imports variables, helpers, and utility classes for the component
        - (`@import "~@avenueeco/design-system/src/bridge/buttons";`)
- Always style using variables, and TWBS where possible!
    - A variable doesn't exist? 
        - Is there one close to it? Use that.
        - Is it going to be used only in this component? Initiate variable there
        - Is it only going to be used in many files? Add it to `@avenueeco/design-system`
