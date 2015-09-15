'use strict';

var React = require('react-native');
import DocPage from './DocPage';
import NavExamplePage from './NavExamplePage';
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var IndexPage = React.createClass({

  displayName: 'IndexPage',

  getInitialState: function() {
    return {
      selectedTab: '1'
    };
  },

  _renderContent: function(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab === '1'}
          onPress={() => {
            this.setState({
              selectedTab: '1',
            });
          }}>
          <DocPage
              style={styles.container}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selectedTab === '2'}
          onPress={() => {
            this.setState({
              selectedTab: '2'
            });
          }}>
          <NavExamplePage
              style={styles.container}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === '3'}
          onPress={() => {
            this.setState({
              selectedTab: '3'
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', 1)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = IndexPage;
