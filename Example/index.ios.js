/**
 * Sample Router React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import Router from 'react-native-navigator';
import routes from './src/routes';

var Example = React.createClass({
  render: function() {
    return (
      <Router
          initRoute="/"
          noFoundRoute="/400"
          routes={routes} />
    );
  }
});

React.AppRegistry.registerComponent('Example', () => Example);
