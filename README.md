#  @Foxxhy -My Design System
__Version: 0.0.1__
! Under construction !

![image](doc/background.jpg)

## Principle

This Design System project is lightweight and flexible. It is based on the principle of composition with an approach that combines elements of Tailwind and Bootstrap. My Design System offers CSS utility classes, atoms, and web components for more complex components.

## Technologies & Code Quality

This project is built with SASS and the Lit library for web components. All CSS is valid according to the W3C standards.

## Installation

1) Using your favorite terminal:

```
    npm install Foxxhy-my-design-system
```

2) Using your preferred framework, import the CSS classes:
```jsx
    import '../../normalize.css'; /* Reset les CSS natif */
    import '../../styles.css'; /* Importe à la fois le thème et les classes CSS */
```

3) An example of importing web components:
```jsx
    import { FToggle } from '../../../../index';
```

## Best Practices

### Theme Customization
It is recommended to override CSS variables directly from your project. This will update all related variables (except for web components).

### Avoiding CSS Conflicts
To avoid conflicts between CSS classes and web components, library classes start with -f and web components start with F.

### Auto-completion Plugin
For VS Code enthusiasts, it is recommended to use "IntelliSense for CSS class names in HTML".

## Usage

### Utility Classes

Example code for using simple styles:

```jsx
    <div className="f-flex f-flex-row f-flex-wrap f-gap-6">
        my html...
    </div>
```

### Atoms

Example code for using atoms:

```jsx
    <button className="f-button-success">My Success Button</button>
    <button className="f-button-outline-success">My Outline Button</button>
```

### Molecules

Example using slightly more complex CSS classes and React:

```jsx
    import React from 'react';
    import { useState } from 'react';

    const Modal = () => {
        const [modal, setModal] = useState(false);

        return (
            <>
                <div className={modal ? 'f-modal-show' : 'f-modal-hide'} >
                    Click on cta to close modal
                    <button className="f-button-danger" onClick={() => setModal(false)} >fermer</button>
                </div>
                <div className={(modal) ? 'f-cover-shadow' : ''} ></div>
            </>
        )
    }
```

### Web Components

The Design System offers web components based on [Lit](https://lit.dev/). Before importing it into your preferred framework, you may need to use a wrapper. Here's an example of implementation in ReactJS:

```jsx
    import React from 'react';
    import { createComponent } from '@lit/react';
    import { FIcon } from '../../../../index';

    export const Icon = createComponent({
        tagName: 'f-icon',
        elementClass: FIcon,
        react: React,
    });

    const IconContainer = () => {
        return (
            <div className='f-flex f-gap-10' >
                <Icon name='anchor' />
                <Icon name='facebook' />
                <Icon name='linkedin' />
            </div>
        )
    }
```

### Release Notes
0.0.1 : Project Launch