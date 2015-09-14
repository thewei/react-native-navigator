'use strict';
import React from 'react-native';
import Router from 'react-native-navigator';

const {
  StyleSheet,
  Text,
  View,
  WebView,
  NavigatorIOS,
} = React;

const BASE_URL = 'http://facebook.github.io/react-native/docs/';

class DocSection extends React.Component {

  render() {
    const url = BASE_URL + this.props.params.id + '.html#content';
    return (
      <View style={styles.container}>
        <WebView style={styles.webView} url={url} startInLoadingState={true} />
      </View>
    );
  }

}

export default class DocSectionBox extends React.Component {

  render() {
    return (
        <NavigatorIOS
            style={styles.webView}
            initialRoute={{
              component: DocSection,
              title: this.props.title,
              passProps: this.props,
              leftButtonTitle: 'Back',
              onLeftButtonPress: () => {
                Router.back();
              },
            }}
          />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  webView: {
    flex: 1,
  },
});
