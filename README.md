# react-native-navigator ![NPM version](https://img.shields.io/npm/v/react-native-navigator.svg?style=flat)
a simple router for react native

## Installation

```bash
$ npm install react-native-navigator --save
```

## Example

index.ios.js:
```js
'use strict';

import React from 'react-native';
import App from './src/app';

React.AppRegistry.registerComponent('Example', () => App);
```

app.js:
```js
import React from 'react-native';
import Navigator from 'react-native-navigator';
const {
	Router,
	Route
} = Navigator;

import IndexPage from './pages/IndexPage';
import DocPage from './pages/DocPage';
import DocSection from './pages/DocSection';
import BreadcrumbNavSample from './pages/BreadcrumbNavSample';
import NavigationBarSample from './pages/NavigationBarSample';
import JumpingNavSample from './pages/JumpingNavSample';
import NavSimpleExample from './pages/NavSimpleExample';

// Support params and query
export default class App extends React.Component{
  render() {
    return (
      <Router component={IndexPage} >
      	<Route path="/example/navbar-sample" component={NavigationBarSample} />
      	<Route path="/example/jumping-nav-sample" component={JumpingNavSample} />
      	<Route path="/example/breadcrumb-nav-sample" component={BreadcrumbNavSample} />
      	<Route path="/example/nav-simple-example" component={NavSimpleExample} />
      	<Route path="/doc/:id" component={DocSection} />
      </Router>
    );
  }
};

export default App;
```
more example pleace checkout the example: `Example/index.ios.js`

## API
- LinkTo( path, props )
- Back()

## Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

## MIT license
Copyright (c) 2015 thewei

Permission is hereby granted, free of charge, to any person obtaining a copy<br>of this software and associated documentation files (the "Software"), to deal<br>in the Software without restriction, including without limitation the rights<br>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br>copies of the Software, and to permit persons to whom the Software is<br>furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in<br>all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN<br>THE SOFTWARE.

--------------------------------------------------------------------------------

![docor]()<br>built upon love by [docor](git+https://github.com/turingou/docor.git) v0.3.0
