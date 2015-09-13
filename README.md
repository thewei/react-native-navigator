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
import Router from 'react-native-navigator';
import routes from './src/routes';

var Example = React.createClass({
  render: function() {
    return (
      <Router routes={routes} />
    );
  }
});

React.AppRegistry.registerComponent('Example', () => Example);
```

routes.js:
```js
import IndexPage from './pages/IndexPage';
import DocPage from './pages/DocPage';
import DocSection from './pages/DocSection';

// Support params and query
export default {
    '/': IndexPage,
    '/doc?sort=1': DocPage,
    '/doc/:id': DocSection
};
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
