/**
 * Sample Router React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import Router from 'react-native-navigator';
import routes from './src/routes';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Example = React.createClass({
  render: function() {
    return (
      <Router routes={routes} />
    );
  }
});

React.AppRegistry.registerComponent('Example', () => Example);
