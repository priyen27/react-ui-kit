
# REUSUABLE-COMPONENT-UI

Welcome to `my-ui-library`, a comprehensive UI library built using Vite, React, Tailwind CSS, and Shadcn. This design system is tailored for developers looking to integrate robust, scalable, and aesthetically pleasing UI components into their web applications.

## Features

- **Rich Component Library**: Equipped with various UI components designed to be versatile and adaptable for various design needs.
- **Tailored for React**: Components are built to leverage React's capabilities for state management and reactivity.
- **Styled with Tailwind CSS**: Utilize the utility-first classes of Tailwind CSS for rapid UI development and easy customization.
- **Enhanced with Shadcn**: Provides encapsulated Shadow DOM solutions for styled-components without side effects.

## Installation

To install the latest version of `my-ui-library`, run the following command in your project directory:
**Tailwind CSS is required**: Equipped with a variety of UI
```bash
npm install my-ui-library
```

Tailwind Config
```bash
 content: [
    ...
    // Add this to enable tailwind styling in the components:
    "./node_modules/@ultimo-learning/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  ```

## Usage

After installation, you can import and use the components in your React projects as follows:

```javascript
import { Button, TextInput } from 'ultimo-ui';

function App() {
  return (
    <div>
      <Button onClick={() => console.log('Clicked!')}>
        Click me!
      </Button>
      <Input placeholder="Enter text here" onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}
```

## Documentation

For detailed documentation on each component, including props and usage examples, please refer to our official documentation site: https://github.com/ultimo-learning/web-common.

## Contributing

We welcome contributions from the community! Feel free to fork the repository and submit a pull request if you have suggestions for improvements or new features.

## License

`my-ui-library` is open source and licensed under the MIT license.
