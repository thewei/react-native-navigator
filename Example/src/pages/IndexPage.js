'use strict';

var React = require('react-native');
import DocPage from './DocPage';
var {
  StyleSheet,
  TabBarIOS,
  NavigatorIOS,
  Text,
  View,
} = React;

var IndexPage = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'IndexPage',

  getInitialState: function() {
    return {
      selectedTab: '1',
      notifCount: 0,
      presses: 0,
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
          <NavigatorIOS
              style={styles.container}
              initialRoute={{
                component: DocPage,
                title: 'Documents'
              }}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === '2'}
          onPress={() => {
            this.setState({
              selectedTab: '2',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === '3'}
          onPress={() => {
            this.setState({
              selectedTab: '3',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
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
