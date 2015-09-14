'use strict';

var React = require('react-native');
import Router from 'react-native-navigator';

var {
  Navigator,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
} = React;

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

class NavExamplePage extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scene}>
          <NavButton
            onPress={() => {
                Router.redirect({
                    id: "/example/nav-simple-example",
                    props:{
                        message: 'PushFromRight'
                    },
                    mode: "PushFromRight",
                });
            }}
            text="PushFromRight"
          />
        <NavButton
          onPress={() => {
              Router.redirect({
                  id: "/example/nav-simple-example",
                  props:{
                      message: 'FloatFromLeft'
                  },
                  mode: "FloatFromLeft",
              });
          }}
          text="FloatFromLeft"
        />
        <NavButton
          onPress={() => {
                Router.redirect({
                    id: "/example/nav-simple-example",
                    props:{
                        message: 'FloatFromRight'
                    },
                    mode: "FloatFromRight",
                });
          }}
          text="FloatFromRight"
        />
        <NavButton
          onPress={() => {
              Router.redirect({
                  id: "/example/nav-simple-example",
                  props:{
                      message: 'FloatFromBottom'
                  },
                  mode: "FloatFromBottom",
              });
          }}
          text="FloatFromBottom"
        />
        <NavButton
          onPress={() => {
              Router.redirect({
                  id: "/example/nav-simple-example",
                  props:{
                      message: 'FloatFromBottomAndroid'
                  },
                  mode: "FloatFromBottomAndroid",
              });
          }}
          text="FloatFromBottomAndroid"
        />
        <NavButton
          onPress={() => {
              Router.redirect({
                  id: "/example/nav-simple-example",
                  props:{
                      message: 'FadeAndroid'
                  },
                  mode: "FadeAndroid",
              });
          }}
          text="FadeAndroid"
        />
        <NavButton
          onPress={() => {
              Router.redirect({
                  id: "/example/nav-simple-example",
                  props:{
                      message: 'HorizontalSwipeJump'
                  },
                  mode: "HorizontalSwipeJump",
              });
          }}
          text="HorizontalSwipeJump"
        />
        <NavButton
          onPress={() => {
              Router.redirect('/example/navbar-sample');
          }}
          text="Navbar Example"
        />
        <NavButton
          onPress={() => {
              Router.redirect('/example/jumping-nav-sample');
          }}
          text="Jumping Example"
        />
        <NavButton
          onPress={() => {
            Router.redirect('/example/breadcrumb-nav-sample');
          }}
          text="Breadcrumbs Example"
        />
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  messageText: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: 15,
  },
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 16,
  },
  scene: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    paddingBottom: 50,
  }
});

module.exports = NavExamplePage;
