# Grommet Starter - New App

Welcome :tada:! Thanks for your interest in starting fresh with Grommet, we are thrilled to have you on board.

## Prerequisites
This tutorial assumes that you have node.js and a package manager; either npm (npm is installed with node.js) or yarn package manager. Create react app can be installed globally or locally using npx (npx comes with npm 5.2+).

[Node Download Page](https://nodejs.org/en/download/) - The latest LTS version will have node.js, npm, and npx.  
[Create React App Local Install](https://create-react-app.dev/docs/getting-started/) - Instructions to install it locally can be found here (npm versions 5.2+).  
[Create React App Global Install](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f) - Not Recommended - Instructions to install it globally can be found here (npm versions 5.1 or earlier).  
[Yarn Package Manager](https://yarnpkg.com/en/docs/getting-started) - Not Required.  

## Getting Started

We are going to leverage and install the awesome [create-react-app](https://facebook.github.io/create-react-app/). We will call it CRA from now on.

```bash
npx create-react-app my-app
cd my-app
```

CRA will automatically install dependencies for you. It uses [Yarn](https://yarnpkg.com/en/) as a package manager behind the scenes. If you prefer to use NPM for your package management, you can delete the `yarn.lock` file and run `npm install` manually.

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

Remove these files from the 'src' directory:

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
import React from 'react';
- import logo from './logo.svg';
- import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
-        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
```

You should see a beautiful, mostly black and white (accessible), landing page :smile:.

`src/App.js` is the only module in this example (to keep things simple). All the steps from here on will just assume you are inside `src/App.js`.

## Adding Grommet

To add grommet you first need to install our packages

```bash
npm install grommet grommet-icons styled-components --save
```

You can now add the import of the `Grommet` component.

```diff
import React from 'react';
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

You will notice no visible change resulted from including Grommet.
Everything in Grommet is self-contained with very minimal global settings.

You might be asking, 'Why do you include it if nothing is changing?'
The answer is simple: Although not strictly required,
we recommend you add `Grommet` from day one, so that you can customize it
in the future by using a `theme`.

Let's now remove `plain` from Grommet and add a custom font-family, font-size, and line-height.

Below the `import` statements, let's add an initial theme declaration:
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
```
And modify the Grommet tag with our new theme:
```javascript
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
+   <style type="text/css">
+     body {
+       margin: 0;
+     }
+   </style>
  </head>
```

Look at your updated landing page, and you should see that the font-size and font-family are properly applied.

Good job, you just completed an important step in your Grommet journey.

## Using Box

[Box](https://v2.grommet.io/box) is an abstraction over [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox), and it is very likely you will be using it very frequently in your Grommet app.

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
+    style={{ zIndex: '1' }}
+    {...props}
+  />
+);

const App = () => {
  return (
    <Grommet theme={theme}>
-     <header className="App-header">
-       <p>
-         Edit <code>src/App.js</code> and save to reload.
-       </p>
-       <a
-         className="App-link"
-         href="https://reactjs.org"
-         target="_blank"
-         rel="noopener noreferrer"
-       >
-         Learn React
-       </a>
-     </header>
+     <AppBar>Hello Grommet!</AppBar>
    </Grommet>
  );
}
```

AppBar is just a Box with `row` direction. Children are justified `between` (a space will be added in between them). We add an `elevation` to simulate the same box-shadow from the original example.

Look at your browser again. You should see the AppBar with the `brand` background and some elevation.

With Grommet it is very easy to apply custom brand colors. The place to change colors is in the theme object as you might have already guessed.

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

The AppBar now has a different color. You can create colors with any name; `brand` was just an example.
Another great Grommet feature is the ability to easily declare context-aware colors which automatically adapt to light and dark themes. That is, any color can have two variations: `dark` and `light`. For example, use a light text color in a dark background, 
and vice-versa. We have created this [codesandbox](https://codesandbox.io/s/213mry1mnj) with more details on color usage.

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
+   <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
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

We are extending Grommet to take the full viewport height and width. We add a Box to fill all the available space so that we have a flexbox container to rely on. The body is a Box with `row` direction. The `flex` prop instructs the Box to expand into the remaining available space (AppBar is taking some of the height in the container). The `overflow` prop ensures that both the main panel and sidebar fit within the width of the viewport, instead of having to scroll horizontally. The sidebar box has a `medium` width with a `light-2` background.

## Adding React State

Everything is so static here. Let's add some state. We are going to hide the sidebar initially and show it only when we click the notifications icon inside the AppBar.

```diff
- import React from "react";
+ import React, { useState } from "react";
```

```diff
const App = () => {
+ const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
-         <Button icon={<Notification />} onClick={() => {}} />
+         <Button
+           icon={<Notification />}
+           onClick={() => setShowSidebar(!showSidebar)}
+         />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
-         <Box
-           width='medium'
-           background='light-2'
-           elevation='small'
-           align='center'
-           justify='center'
-         >
-           sidebar
-         </Box>
+         {showSidebar && (
+           <Box
+             width='medium'
+             background='light-2'
+             elevation='small'
+             align='center'
+             justify='center'
+           >
+             sidebar
+           </Box>
+         )}
      </Box>
      </Box>
    </Grommet>
  );
}
```

We are just leveraging React state by creating a `showSidebar` flag initially set to false.
Once we click in the notification button, we toggle the `showSidebar` state. The button then serves to open and 
close the sidebar.

## Adding Animation

Currently, the sidebar suddenly appears and disappears. Let's make it smoother by using the [Collapsible](https://v2.grommet.io/collapsible) component.

```diff
- import { Box, Button, Heading, Grommet } from 'grommet';
+ import { Box, Button, Collapsible, Heading, Grommet } from 'grommet';
```

Let's put the sidebar as a children of collapsible.

```diff
-{showSidebar && (
+ <Collapsible direction="horizontal" open={showSidebar}>
    <Box
+     flex
      width='medium'
      background='light-2'
      elevation='small'
      align='center'
      justify='center'
    >
      sidebar
    </Box>
+ </Collapsible>
-)}
```

Now the sidebar animates in and out. Without the added flex prop, the Box would no longer
expand vertically to fill the available space.

## Making it responsive

If you open this page in a mobile device it will look **terrible**. You can verify this by reducing the browser window to approximate a mobile screensize. Relax, we will make it better by using [ResponsiveContext](https://v2.grommet.io/responsivecontext).

As usual, importing first:

```diff
- import { Box, Button, Collapsible, Heading, Grommet } from 'grommet';
+import {
+ Box,
+ Button,
+ Collapsible,
+ Heading,
+ Grommet,
+ ResponsiveContext,
+} from 'grommet';
```

Let's make this a little easier to read for you and your future co-workers by breaking
the long import statement down to one component per line.
You may want to consider using [prettier](https://prettier.io/) to auto format for you (Tip: you may want to change prettier config default to prettier.singleQuote: true).

`ResponsiveContext` uses [react context api](https://reactjs.org/docs/context.html) behind the scenes. Let's wrap the `ResponsiveContext.Consumer` inside Grommet.

```diff
<Grommet theme={theme} full>
+ <ResponsiveContext.Consumer>
+   {size => (
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
          <Button
            icon={<Notification />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
-         <Collapsible direction="horizontal" open={showSidebar}>
+         {size !== 'small' && (
+           <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
              </Box>
            </Collapsible>
+         )}
        </Box>
      </Box>
+   )}
+ </ResponsiveContext.Consumer>
</Grommet>
```

If you open your browser and start resizing your window you will see that the sidebar disappears. What a great fix, right? We understand that you may be upset right now, but we promise to fix this in the next section.

## Using Layer

[Layer](https://v2.grommet.io/layer) is one of our favorite components; it is very powerful as it handles accessibility and responsiveness.

We will use it in our example when size is small so that the sidebar takes the entire screen.

Please import the Layer first:

```diff
+import {
+ Box,
+ Button,
+ Collapsible,
+ Heading,
+ Grommet,
+ Layer,
+ ResponsiveContext,
+} from 'grommet';
```

We now can change the logic to swap between Collapsible and Layer.

```diff
- {size !== 'small' && (
+ {(!showSidebar || size !== 'small') ? (
    <Collapsible direction="horizontal" open={showSidebar}>
      <Box
        flex
        width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
      >
        sidebar
      </Box>
    </Collapsible>
+ ): (
+   <Layer>
+     <Box
+       fill
+       background='light-2'
+       align='center'
+       justify='center'
+     >
+       sidebar
+     </Box>
+   </Layer>
  )}
```

You can resize your browser now, and you will see that the sidebar takes over in mobile.
But there is no way to close it, however that's easy to fix.

Import the `FormClose` icon:

```diff
- import { Notification } from 'grommet-icons';
+ import { FormClose, Notification } from 'grommet-icons';
```

Let's add that to our Layer.

```diff
<Layer>
+ <Box
+   background='light-2'
+   tag='header'
+   justify='end'
+   align='center'
+   direction='row'
+ >
+   <Button
+     icon={<FormClose />}
+     onClick={() => setShowSidebar(false)}
+   />
+ </Box>
  <Box
    fill
    background='light-2'
    align='center'
    justify='center'
  >
    sidebar
  </Box>
</Layer>
```

Well, let's celebrate because now we have a responsive Grommet app, thanks for hanging with us until now.

## Using the Light and Dark Theme Modes

Grommet has the ability to toggle between light and dark modes baked into the theme. To toggle the theme from the application level, you can use the `themeMode` prop for the Grommet component:

```js
<Grommet theme={theme} themeMode="dark">
```

This is useful when you wish to add a toggle for light and dark modes at the application level.

## Final Considerations

We will keep updating this starter page with more steps. The latest completed version of this exercise is available in this repo in the `master` branch.

Grommet can co-exist with other frameworks. We will never add global styles that will affect your existing components. Although the reverse is not true. By helping other teams migrate to Grommet, we have identified a common problem: global CSS modifiers affecting Grommet components. Whenever you see something weird, try to [reproduce](https://codesandbox.io/s/m7mml8l0zj) it outside your application environment.

If you are able to reproduce it, be nice, file an [issue](https://github.com/grommet/grommet/issues/new).
If you cannot reproduce it, inspect your elements, and you will probably find some global CSS applying unexpected overly opinionated changes to our components. As always, you can join our [Slack](https://slackin.grommet.io) and share your pain with us.

Finally, here are some additional pointers to keep you engaged:

1) [Using Grommet in an existing app tutorial](https://github.com/grommet/grommet-starter-existing-app)
2) [Grommet Storybook](https://storybook.grommet.io) - a lot of examples on how to use our components. Most of them are not real app scenarios though. They are there to illustrate our different props.
3) [Grommet Sandbox](https://codesandbox.io/s/github/grommet/grommet-sandbox) - more friendly when you want to edit and play with the examples, also does not have real app scenarios.
4) [Grommet Vending](https://github.com/grommet/grommet-vending) - a sample app done in v2.
5) [Grommet Controls](https://grommet-nextjs.herokuapp.com/add-ons) - higher level grommet components maintained by one of our external contributors [Atanas Stoyanov](https://github.com/atanasster).
6) [Grommet Site](https://github.com/grommet/grommet-site) - site for v2 implemented in grommet v2, of course.
7) [Grommet Slack Inviter](http://slackin.grommet.io/) - don't forget to join our awesome community!
