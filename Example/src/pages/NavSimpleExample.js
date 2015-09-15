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
        <Text style={styles.messageText}>{this.props.message}</Text>
        <NavButton
          onPress={() => {
              Router.redirect({
                  id: "/example/nav-simple-example",
                  props:{
                      message: this.props.message
                  },
                  mode: this.props.route.mode,
              });
          }}
          text="Go To Next Page"
        />
        <NavButton
          onPress={() => {
            Router.back();
          }}
          text="Come Back"
        />
        <NavButton
          onPress={() => {
              Router.back({
                  id: "/"
              });
          }}
          text="Come Back HomePage"
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
    marginTop:50,
    marginBottom:50,
    marginLeft: 15,
    textAlign: "center"
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
  }
});

module.exports = NavExamplePage;
