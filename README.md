![License: CC BY-NC-SA 4.0](https://flat.badgen.net/static/license/CC-BY-NC-SA-4.0/green)

# Web.Component

This repository contains a comprehensive boilerplate template for creating Web Components with unit testing and api document generation. The template is designed to demonstrate the use of modern web technologies such as HTML, CSS, and TypeScript to create modular, reusable, and testable web components. The template includes the following features:

1. **Separation of Concerns**: Demonstrates the principle of Separation of Concerns (SoC) by using HTML for structure, CSS for presentation, and TypeScript for behavior.
2. **State Management**: Implements state management using private properties and public getters and setters.
3. **Imperative and Declarative API**: Provides both imperative and declarative APIs for interacting with the web component.
4. **Event Handling**: Demonstrates event handling by dispatching custom events when the state of the component changes.
5. **Import Maps**: Demonstrates the use of import maps to resolve JavaScript module specifiers to their corresponding files or URLs.
6. **Unit Testing**: Includes unit tests for the web component using the Jasmine assertion library and Karma test runner.
7. **API Documentation**: Generates API documentation for the web component using the Typedoc documentation generator.

Before we dive into the details of all the features, let's first go through the installation and demonstration of the web component.

## Installation

1. Create a new repository using this template

2. Clone the repository to your local machine

3. Install the dependencies

```bash
npm install
```

4. Run the unit tests to ensure everything is working as expected

```bash
npm test
```

5. Build the web component

```bash
npm run build
```

## Usage

The below steps will guide you through all the unique feature associated with the demo web component, a `pin-button`. As the name implies, the `pin-button` is a simple button that can be switched `on` and `off`.

1. After successful build, run the following command:

```bash
npm run serve
```

2. Observe the `pin-button` web component in the browser

3. Open the chrome developer tools and select the console

4. Get a reference to the web component in the browser console

```javascript
const pin = document.querySelector("pin-button");
```

5. Create an onon event listener for the web component

```javascript
const onon = () => {
  console.log("onon triggered");
};
```

6. Add the event listener to the web component

```javascript
pin.onon = onon;
```

7. Switch the pin on using the imperative API

```javascript
pin.on();
```

8. Observe the visual changes in the browser and the console output

9. Select the elements tab in the chrome developer tools and inspect the html

```html
<pin-button state="on"></pin-button>
```

10. manually change the state attribute value to `off`

11. Observe the visual changes in the browser

12. Return to the console tab and get the current state of the web component

```javascript
pin.state;
```

13. Click the web component with the mouse

14. Again observe the event which is triggered in the console

15. Lastly, get the current state of the web component again

```javascript
pin.state;
```

See [API Documentation](https://scalable-software.github.io/web.component/) for details of all state, operations and events implemented.

> **Note**: See the section of Typedoc how to generate the API documentation.

Now that you have successfully interacted with the `pin-button` web component, let's dive into the details of the features that make this boilerplate template unique.

## Separation of Concerns

In modern web development, the principle of Separation of Concerns (SoC) is fundamental to creating maintainable, scalable, and easily understandable code. This principle is elegantly demonstrated through the use of HTML, CSS, and TypeScript, each serving a distinct purpose while seamlessly working together to create robust web components. Below, we outline how each technology contributes to this principle:

### HTML Template: Structure

The technology used to define the layout of the web component is [HTML templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template). HTML templates are HTML fragments that are loaded into the DOM but not rendered immediately. Web component typically clones the HTML template and insert that inside the shadow DOM of a web component after which it is rendered. This allows developers to define the structure of the web component without cluttering the main HTML file with complex markup.

With reference to this boilerplate:

1. The `Pin.template.html` in the `src` folder contains the layout of the `Pin` component.
2. This template is loaded into the dom using a public `loadTemplate(filename)` static method in the base `Component` class, where the filename in this case is `Pin.template.html`. (See the `index.js` file in the `demo` folder which illustrate how this method is used to load the template into the DOM.)
3. This keep things simple, by default the template id is the same as the web component tag, see the public `template` getter in the `Pin` class. This id is then used by the protected `_loadTemplate` instance method on the base `Component` class to clone and inserted the template into the shadow DOM of the web component.

### CSS: Presentation

CSS (Cascading Style Sheets) takes charge of the presentation aspect, dictating how the structured HTML elements should appear on the screen. This includes layouts, colors, fonts, and animations. CSS is also used to update visual changes based on changes to web component attributes. CSS's role in Separation of Concerns is to decouple the visual styling from the content structure, allowing for design changes without altering the underlying HTML. This separation not only makes the styling more manageable but also enhances the flexibility and reusability of the components.

With reference to this boilerplate:

1. The `Pin.style.css` in the `src` folder contains the styling for the `Pin` component.
2. The public `css` getter in the `Pin` class contains the `css` filename and is used by the protected `loadStyle` method on the base `Component` class to insert a `link` element into the shadow DOM of the web component which points to the `css` file.

### TypeScript: Behavior

TypeScript, a superset of JavaScript, adds type safety and advanced object-oriented features to the component's behavior. It controls how the component reacts to user interactions, fetches data, and manipulates the DOM. By isolating the behavioral logic in TypeScript, developers can create more predictable and maintainable codebase. TypeScript's static typing and compile-time checks further contribute to the robustness and scalability of the component.

Fundamentally, the behavior of a web component can be grouped into three parts:

1. **State**: Implements state management using private properties and public getters and setters.
2. **Operations**: Provides both imperative and declarative APIs for interacting with the web component.
3. **Events**: Demonstrates event handling by dispatching custom events when the state of the component changes.

With reference to this boilerplate, see the `Pin` class in the `src` folder which contains three sections described above.

## Development Workflow

This boilerplate was developed using a specific workflow that ensures the web component is modular, testable, and well-documented. As a first step, a business analyst defined the needed specifications for the web component. These specifications were then used to guide the development of the web component. The development process followed the steps outlined below:

### Web Component Specifications

A component is built according to a set of specifications, see the content in the `specifications` folder for an example. The specifications are divided into the following categories:

1. Metadata
2. State
3. Operations
4. Events
5. Composition

Below in an overview of each section and a reference to the `pin-button` web component:

#### Component Metadata

This section defines the name of the component, the tag name, and namespace to use when applicable

```json
{
  "Component": "Pin",
  "Tag": "pin-button",
  "Namespace": "Pin",
  "Description": "The Pin component is a button that can be turned on or off."
}
```

#### Component State

Component state is implemented using a combination of private properties and public getters and setter methods. Some properties are also defined as attributes to enable declarative API.

For example, the specifications refer to a `visible` state:

```json
{
  "state": {
    "visible": {
      "type": "string",
      "description": "Indicates whether the pin is visible.",
      "values": ["yes", "no", null],
      "default": "yes",
      "isAttribute": true
    }
  }
}
```

Note the `null` value in the `values` array. This is used to indicate that the attribute can be removed from the html element.

here is the extract of the implementation of the `visible` state:

```typescript
  private _visible: Visibility = Visible.YES;

  public get visible(): Visibility {
    return <Visibility>this.getAttribute(Attribute.VISIBLE) ?? this._visible;
  }
  public set visible(visible: Visibility) {
    visible = visible || Visible.YES;
    if (this.visible !== visible) {
      this._visible = visible;
      visible == Visible.YES && this.removeAttribute(Attribute.VISIBLE);
      visible == Visible.YES &&
        this.dispatchEvent(new CustomEvent(Event.ONSHOW, { detail: visible }));
      visible == Visible.NO && this.setAttribute(Attribute.VISIBLE, visible);
      visible == Visible.NO &&
        this.dispatchEvent(new CustomEvent(Event.ONHIDE, { detail: visible }));
    }
  }
```

#### Component Operations

Component operations are implemented using public methods and used to enable the imperative API. In essence these public methods are thin wrappers which use the available setters to change the state of the component.

For example, the specifications refer to a `on` operation:

```json
{
  "operations": {
    "on": {
      "description": "Turns the pin on.",
      "parameters": [],
      "returns": "void"
    }
  }
}
```

Here is the extract of the implementation of the `on` operation:

```typescript
  public on = () => (this.state = State.ON);
```

#### Component Events

Component events are implemented using the `CustomEvent` constructor. The `CustomEvent` constructor is used to create a new event object which can be dispatched using the `dispatchEvent` method. Events are dispatched when the state of the component changes inside the setter methods.

For example, the specifications refer to a `onon` event:

```json
{
  "events": {
    "onon": {
      "description": "Triggered when the pin is turned on.",
      "parameters": []
    }
  }
}
```

Here is the extract of the implementation of the `onon` event:

```typescript
  // Event Registration
  public set onon(handler: Handler) {
    this.addEventListener(Event.ONON, handler);
  }
```

The `onon` event is dispatched in the `setter` of the `state` property:

```typescript
state === State.ON &&
  this.dispatchEvent(new CustomEvent(Event.ONON, { detail: { state } }));
state === State.OFF &&
  this.dispatchEvent(new CustomEvent(Event.ONOFF, { detail: { state } }));
```

#### Component Composition

Component composition is implemented using the `HTMLTemplateElement` and `ShadowRoot` API. The `HTMLTemplateElement` is used to define the layout of the component and the `ShadowRoot` is used to attach the template to the component.

For example, the specifications refer to the `Pin.template.html` file:

```json
{
  "composition": {
    "on": {
      "description": "The SVG icon used for on state.",
      "contains": ["path"],
      "type": "svg"
    }
  }
}
```

Here is the extract of the implementation of the `on` element in the composition:

```html
<svg class="on" height="24px" width="24px" viewBox="0 0 20 20" fill="#212121">
  <path
    d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.896 7.60309L4.01834 8.75415C3.35177 9.02078 3.17498 9.88209 3.68262 10.3897L6.29289 13L3 16.2929V17H3.70711L7 13.7071L9.61027 16.3174C10.1179 16.825 10.9792 16.6482 11.2459 15.9817L12.3969 13.104L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L2.85355 2.14645ZM11.6276 12.3347L10.3174 15.6103L4.38973 9.68263L7.66531 8.3724L11.6276 12.3347ZM12.9565 10.7127C12.9294 10.7263 12.9026 10.7403 12.8761 10.7548L13.6202 11.4989L16.8622 9.87793C18.0832 9.26743 18.3473 7.64015 17.382 6.67486L13.3251 2.61804C12.3599 1.65275 10.7326 1.91683 10.1221 3.13783L8.5011 6.37977L9.24523 7.1239C9.25971 7.09739 9.27373 7.07059 9.28728 7.04349L11.0165 3.58504C11.3218 2.97454 12.1354 2.8425 12.618 3.32514L16.6749 7.38197C17.1575 7.86461 17.0255 8.67826 16.415 8.98351L12.9565 10.7127Z"
  />
</svg>
```

### Typescript Compiler Options

Two different typescript configuration are defined: `tsconfig.build.json` and `tsconfig.test.json`. The typescript complier options of the two files are largely the same. Below is an overview of the compiler options used:

```json
{
  "compilerOptions": {
    "module": "es2022",
    "target": "es2022",
    "moduleResolution": "node",
    "declaration": true,
    "rootDir": "./src",
    "outDir": "./dist/",
    "baseUrl": "./",
    "paths": {
      "pin": ["./src/Index.js"]
    }
  },
  "include": ["./src/**/*"]
}
```

The important options to note are:

1. `module`  
   The `es2022` module system is used to enable the use of ESM in the browser.

2. `paths`  
   The `paths` option is used to define module aliases and used in conjunction with importmaps to avoid the use of a bundler. See the section on importmaps for more details.

### Unit Testing

Unit test are designed to test the web component based on the defined specifications.

This template enables both realtime and manual unit testing. Realtime unit testing is achieved using `wallaby` and manual unit testing is done using the `karma` test runner with `jasmine` assertion library. Both `wallaby` and `karma` configuration file is located at the root of the project: `wallaby.js`, `karma.conf.js`.

To manually run the unit tests, and generate coverage reports in the `coverage` folder, use the following command:

```bash
npm test
```

### Typedoc Configuration

In addition the typescript compiler options, the `tsconfig.test.json` configuration file also contains Typedoc configuration details. Typedoc is a documentation generator for typescript projects.

To generate the API documentation, in the docs folder, use the following command:

```bash
npm run document
```

### Importmaps

Import maps are a browser feature that enables developers to define how JavaScript module specifiers are resolved to their corresponding files or URLs, allowing for custom mapping of module names to paths and facilitating easier management of dependencies. By using import maps, developers can therefore easily switch between a local file, an NPM installed package or even a CDN hosted file. Also, Import maps is what enables the use of ESM compiled TypeScript to work in the browser without the use of any bundler.

Lastly, the keep the mail HTML file as lean as possible, an injection script is used to inject import maps defined as json objects into the html document. Once, external Import maps have been added to the HTML spec, the injection script will not longer be needed. See the `./importmap` folder, which contains the following files:

1. `inject.js` - The script that injects the import map into the HTML document
2. `importmap.build.js` - The import map used by the demo page
3. `importmap.test.js` - The import map used by the test page

### Publishing

The beauty of combining HTML, CSS, and TypeScript lies in their ability to be bundled together into a single, installable package. This approach not only adheres to the Separation of Concerns but also simplifies the distribution and reuse of components across different projects.

With reference to this boilerplate, the web component is bundled and published as a NPM package. The `package.json` file contains the necessary scripts and configurations to build, test, and publish the web component. The `dist` folder contains the compiled JavaScript files as well as a copy of the HTML Template and CSS Files.

A github workflow is setup to automatically publish the web component to NPM when a new release is created. The workflow is defined in the `.github/workflows/publish.yml` file.

Before creating a new release in GitHub, ensure the following steps are completed:

1. Determine the type of version bump (major, minor, patch)
2. Run one of the following commands to bump the version in the `package.json` file:

```bash
npm version major
npm version minor
npm version patch
```

3. Given you have used the above command, a tag will automatically be created in the repository, else you can create a tag manually using the following command:

```bash
git tag -a v1.0.0 -m "Version 1.0.0"
```

4. Push the tag to the remote repository:

```bash
git push origin v1.0.0
```

5. Create a new release in GitHub and the workflow will automatically publish the web component to NPM.

> Note: a manual publication to NPM is required for the first release when using a scoped package on the free tier of NPM: `npm publish --access public`.

## License

> his software and its documentation are released under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License (CC BY-NC-SA 4.0). This means you are free to share, copy, distribute, and transmit the work, and to adapt it, but only under the following conditions:
>
> Attribution: You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work).
>
> NonCommercial: You may not use this material for commercial purposes.
>
> ShareAlike: If you alter, transform, or build upon this work, you may distribute the resulting work only under the same or similar license to this one.
>
> For more details, please visit the full [license agreement](https://creativecommons.org/licenses/by-nc-sa/4.0/).
