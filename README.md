# react-native-navigator
[![Build Status](https://travis-ci.org/thewei/react-native-navigator.svg?branch=master)](https://travis-ci.org/thewei/react-native-navigator)
[![npm version](https://badge.fury.io/js/react-native-navigator.svg)](http://badge.fury.io/js/react-native-navigator)
[![NPM downloads](http://img.shields.io/npm/dm/react-native-store.svg?style=flat-square)](https://npmjs.org/package/react-native-navigator)

A web like router for ReactNative

## Installation

```bash
$ npm install react-native-navigator --save
```

## Example

index.ios.js:
```javascript
'use strict';

import React from 'react-native';
import App from './src/app';

React.AppRegistry.registerComponent('Example', () => App);
```

app.js:
```javascript
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
