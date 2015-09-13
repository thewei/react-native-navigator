# react-native-navigator ![NPM version](https://img.shields.io/npm/v/react-native-navigator.svg?style=flat)
a simple router for react native

## Installation

```bash
$ npm install react-native-navigator --save
```

## Example

```js
'use strict';

import React from 'react-native';
import ReactNativeNavigator from 'react-native-navigator';

class ReactNativeComponent1 extends React.Component {
    jumpOtherPage() {
        ReactNativeNavigator.go('/user/2');
    },
    render(){
        console.log(this.props); // You can get { route, navigator, query, params }
        return (
            <React.View style={{flex:1}}>
                <React.TouchableOpacity
                  onPress={this.jumpOtherPage.bind(this)}>
                  <React.Text >jump to '/user/2'</React.Text>
                </React.TouchableOpacity>
            </React.View>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <ReactNativeNavigator routes={routes} />
        )
    }
}

const routes = {
    '/': ReactNativeComponent1,
    '/test': ReactNativeComponent2,
    '/user/:userId': ReactNativeComponent3,
    '/400': ReactNativeComponent4
}

React.AppRegistry.registerComponent('app', () => App);
```

## API
check this file: `libs/index.js`

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
