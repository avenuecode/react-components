AlternatingText component for Avenue Code.
Splits text string and applies alternating bold and light font-weight styles. By default, text string is split after the first word and returned as a `<h1>` element.

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
This component can be accessed using the classname `ac-alternating-text` or displayname `AlternatingText`.

___
#### **How do I use this component?**
___
Below are some self-contained usage examples.

**Example:** Default
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" />
```

**Example:** Use array input
```jsx
const textArray = ['里îßPseudo', 'language', 'is', 'preferred', 'in', 'tests里îß'];
<AlternatingText text={textArray} />
```

**Example:** Custom separator
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" separator={' --> '} />
```

**Example:** Reversed styling
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" isReversed={true} />
```

**Example:** Apply Bootstrap utility class to right-align text.
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" classList="text-right" />
```

**Example:** Custom split location
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" splitAt={3} />
```

**Example:** Custom return type (`<mark>`)
```jsx
<AlternatingText text="里îßPseudo language is preferred in tests里îß" As={'mark'} />
```
