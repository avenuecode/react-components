Toaster component for Avenue Code.
Should sit right below the page header or
on right top corner of the screen if page has been scrolled

The toaster will come from the right, display some information,
stay on screen and follow scroll for some time, then vanish.

Close button is optional but also closes the toaster

___
#### **How do I style this component?**
___
This component uses `Avenue Eco` theme styles.
To apply default styles, import `Avenue Eco` theme style:
```scss
@import "~@avenueeco/design-system/src/theme";
```
  
Thereafter, you can pass in Bootstrap classnames via the `classNames` prop such as `bg-success`,
`text-white` or apply your own custom styles.
___
#### **How do I use this component?**
___
**Example:** Render success toaster
```jsx
import { Check as CheckIcon, X as CloseIcon } from 'react-feather';

initialState = {
  visible: false,
  title: 'Toaster Title',
  subtitle: 'Toaster Subtitle',
  timeout: 3000,
  hasCloseIcon: true,
  topOffset: 0,
  icon: CheckIcon,
  closeIcon: CloseIcon,
  classList: ['bg-success', 'text-white'],
  onToasterDismissed: null
};
<>
 <button onClick={() => setState({visible:!state.visible})} className="btn btn-primary">Show Toaster</button>

 <Toaster 
   visible={state.visible}
   title={state.title}
   subtitle={state.subtitle}
   timeout={state.timeout}
   hasCloseIcon={state.hasCloseIcon}
   topOffset={state.topOffset}
   closeIcon={state.closeIcon}
   icon={state.icon}
   classList={state.classList}
   onToasterDismissed={() => setState({ visible: false })}
 />
</>
```
