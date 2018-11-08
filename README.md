# Grommet Starter - New App

Welcome :tada:! Thanks for your interest in starting fresh with Grommet, we are thrilled to have you on board.

## Getting Started

We are going to leverage and install the awesome [create-react-app](https://facebook.github.io/create-react-app/). We will call it CRA from now on.

```bash
npm install create-react-app -g
create-react-app my-app
cd my-app
```

CRA will automatically install dependencies for you. It uses [Yarn](https://yarnpkg.com/en/) behind the scenes. If you prefer to use NPM, you can delete the `yarn.lock` file and run `npm install` manually.

```bash
rm -rf yarn.lock
rm -rf node_modules
npm install
```

Start the development server.

```bash
npm start
```

You should see the CRA landing page. They keep updating it, but it will look something like this:

![CRA Screenshot](https://raw.githubusercontent.com/grommet/grommet-starter-new-app/master/public/cra-landing-page.png)

## Cleaning Up

We like a clean house. Let's first remove the modules and components we are not going to be using for this exercise.

** Remove these files: **

* `src/App.css`
* `src/App.test.js`
* `src/index.css`
* `src/logo.svg`

Inside `src/index.js`, remove the import of `index.css`.

```diff
import ReactDOM from 'react-dom';
- import './index.css';
import App from './App';
```

Inside `src/App.js`, remove the logo and the import of `app.css`

```diff
import React, { Component } from 'react';
- import logo from './logo.svg';
- import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
-         <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

You should see a beautiful, mostly black and white (accessible), landing page :smile:.

`src/App.js` is the only module in this example (to keep things simple). All the steps from here on will just assume you are inside `src/App.js`.

## Adding Grommet

To add grommet you first need to install our packages

```bash
npm install grommet@next grommet-icons styled-components --save
```

You can now add the import of the `Grommet` component.

```diff
import React, { Component } from 'react';
+ import { Grommet } from 'grommet';
```

Typically, you should include Grommet only once as one of your top-level nodes.

Let's replace the main `div` with `Grommet`.

```diff
- <div className="App">
+ <Grommet plain>
  <header className="App-header">
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
+ </Grommet>
- </div>
```

Nothing should change by including Grommet.
Everything in Grommet is self-contained with very minimal global settings.

You should be asking why you are including it if nothing is changing.
The answer for this question is simple. Although not strictly required,
we recommend you add `Grommet` from day one, so that you can customize it
in the future by using the theme.

Let's now remove `plain` from Grommet and add a custom font-family, font-size, and line-height.

```javascript
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

<Grommet theme={theme}>
```

This theme will propagate to all components under this given `Grommet` instance.

FYI. To access Roboto you need to include the font-face. Let's update `public/index.html` to include the font and fix some browser defaults.

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
+   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <title>React App</title>
    <style type="text/css">
      body {
        margin: 0;
      }
    </style>
  </head>
```

Go back to your browser of choice, and you should see that the font-size and font-family are properly applied.

Good job, you just completed an important step in your Grommet journey.

## Using Box

[Box](https://v2.grommet.io/box) is an abstraction over [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and it is very likely you will be using it all over the place in your Grommet app.

To use Box we first need to import it:

```diff
- import { Grommet } from 'grommet';
+ import { Box, Grommet } from 'grommet';
```

We like to keep our imports in alphabetical order :smile:.

Let's create an AppBar component and replace the `header` tag with it.

```diff
+const AppBar = (props) => (
+  <Box
+    tag='header'
+    direction='row'
+    align='center'
+    justify='between'
+    background='brand'
+    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
+    elevation='medium'
+    style={{ zIndex: '100' }}
+    {...props}
+  />
+);

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
-       <header className="App-header">
-         <p>
-          Edit <code>src/App.js</code> and save to reload.
-         </p>
-         <a
-           className="App-link"
-           href="https://reactjs.org"
-           target="_blank"
-           rel="noopener noreferrer"
-         >
-           Learn React
-         </a>
-       </header>
+       <AppBar>
+         Hello Grommet!
+       </AppBar>
      </Grommet>
    );
  }
}
```

AppBar is just a Box with `row` direction. Children are justified `between` (a space will be added in between them) so that the title is on the left and the buttons are on the right. We add an `elevation` to simulate the same box-shadow from the original example.

Look at your browser again. You should see the AppBar with the `brand` background and some elevation.

Usually you are working in a company that has its own brand colors, let's fix that. The place to change colors is the theme object, as you might have already guessed.

```diff
const theme = {
  global: {
+   colors: {
+     brand: '#228BE6',
+   },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};
```

The AppBar now has a different color. You can create colors with any name, `brand` was just an example.
Another great feature that is available to you is to use one color that has two variations: `dark` and `light`.
This is very useful when you want to apply a different color depending on your context. For example, use a light text color in a dark background, and vice-versa.
We have created this [codesandbox](https://codesandbox.io/s/213mry1mnj) with more details on color usage.

## Improving the AppBar

Let's add some children to the AppBar to make it more realistic.

Let import `Button`, `Heading`, and `Notification` icon.

```diff
- import { Box, Grommet } from 'grommet';
+ import { Box, Button, Heading, Grommet } from 'grommet';
+ import { Notification } from 'grommet-icons';
```

Update AppBar children to the following:

```diff
  <AppBar>
-    Hello Grommet!
+   <Heading level='3' margin='none'>My App</Heading>
+   <Button icon={<Notification />} onClick={() => {}} />
  </AppBar>
```

## Adding a main body

Now that we have an AppBar let's augment the dashboard with a body.
We will have a main left panel and a sidebar.

```diff
-<Grommet theme={theme}>
+<Grommet theme={theme} full>
+ <Box fill>
    <AppBar>
      <Heading level='3' margin='none'>My App</Heading>
      <Button icon={<Notification />} onClick={() => {}} />
    </AppBar>
+   <Box direction='row' flex>
+     <Box flex align='center' justify='center'>
+       app body
+     </Box>
+     <Box
+       width='medium'
+       background='light-2'
+       elevation='small'
+       align='center'
+       justify='center'
+     >
+       sidebar
+     </Box>
+   </Box>
+ </Box>
</Grommet>
```

We are extending Grommet to take the full viewport height and width. We add a Box to fill all the available space so that we have a flexbox container to rely on. The body is a Box with `row` direction, the `flex` prop just tells that Box to expand and take the rest of the avaible space (AppBar is taking some of the height in the container). The sidebar box has a `medium` width with a `light-2` background.

## Adding State

Everything is so static here, let's add some state. We are going to hide the sidebar initially and show it only when we click the notifications icon inside the AppBar.

```diff
class App extends Component {
+ state = {
+   showSidebar: false,
+ }
  render() {
+   const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
            <Heading level='3' margin='none'>My App</Heading>
-           <Button icon={<Notification />} onClick={() => {}} />
+           <Button
+             icon={<Notification />}
+             onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
+           />
          </AppBar>
          <Box direction='row' flex>
            <Box flex align='center' justify='center'>
              app body
            </Box>
-           <Box
-             width='medium'
-             background='light-2'
-             elevation='small'
-             align='center'
-             justify='center'
-           >
-             sidebar
-           </Box>
+           {showSidebar && (
+             <Box
+               width='medium'
+               background='light-2'
+               elevation='small'
+               align='center'
+               justify='center'
+             >
+               sidebar
+             </Box>
+           )}
         </Box>
        </Box>
      </Grommet>
    );
  }
}
```