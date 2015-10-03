import React from 'react-native';
import Event from './event';
import urllite from 'urllite/lib/core';
import pathToRegexp from 'path-to-regexp';

const {
    Navigator
} = React;

var Navigate = React.createClass({

    getInitialState: function() {
        return {
            _routes: this._processRoutes(this.props.routes)
        };
    },

    componentWillUnmount() {
      this._listeners && this._listeners.forEach(listener => listener.remove());
      Event.off("RNnavigate.redirect");
      Event.off("RNnavigate.back");
    },

    _parseUrl(path) {
        return urllite(path || '/');
    },

    _parseSearch(str) {
        let parsed = {};

        if (str.indexOf('?') === 0) str = str.slice(1);
        let pairs = str.split('&');

        pairs.forEach(function(pair) {
            let keyVal = pair.split('=');
            parsed[decodeURIComponent(keyVal[0])] = decodeURIComponent(keyVal[1]);
        });

        return parsed;
    },

    _matchParams(path) {
        if (!path) {
            return false;
        }

        var matchedRoute = {};

        this.state._routes.some(function(route) {
            var matches = route.pattern.exec(path);

            if (matches) {
                if(route.params[0] && route.params[0].name===0){
                    return false;
                }

                matchedRoute.component = route.component;

                let params = matches.slice(1, route.params.length + 1);
                matchedRoute.params = {};
                params.map(function(_params,index){
                    matchedRoute.params[route.params[index].name] = _params;
                });

                return true;
            }

            return false;
        });

        return matchedRoute.component ? matchedRoute : false;
    },

    _processRoutes(routes) {
        var patterns = [], path, pattern, keys, component;

        for (path in routes) {
            if (routes.hasOwnProperty(path)) {
                keys = [];
                pattern = pathToRegexp(path, keys);
                component = routes[path];

                patterns.push({ pattern: pattern, params: keys, component: component });
            }
        }

        return patterns;
    },

    _setNavigatorRef(navigator) {
      if (navigator !== this._navigator) {
        this._navigator = navigator;

        if (navigator) {
          var callback = (event) => {
            // console.log(
            //   `ReactNativeNavigator: event ${event.type}`,
            //   {
            //     route: JSON.stringify(event.data.route),
            //     target: event.target,
            //     type: event.type,
            //   }
            // );
          };
          // Observe focus change events from the owner.
          this._listeners = [
            navigator.navigationContext.addListener('willfocus', callback),
            navigator.navigationContext.addListener('didfocus', callback),
          ];

          Event.on("RNnavigate.redirect", function(path){
              let info = {};
              let replace = false;
              if(typeof path === "object"){
                  if (path.replace){
                      delete path.replace;
                      replace = true;
                  }
                  info = Object.assign({},path);
              } else {
                  info.id = path;
              }

              replace ? navigator.replace(info) : navigator.push(info);
          });

          Event.on("RNnavigate.back", function(opts){
              let info = {};
              if(opts && typeof opts === "object"){
                  if(opts.id==="/"){
                      navigator.popToTop();
                  }
              }else{
                   navigator.pop();
              }
          });

        }
      }
  },

    renderScene(route, nav) {
        let url = this._parseUrl(route.id);
        let query = this._parseSearch(url.search);
        let matchedRoute = this._matchParams(url.pathname);

        if (matchedRoute) {
            return React.createElement(matchedRoute.component,Object.assign( route.props || {}, {
                route: route,
                navigator: nav,
                query: query,
                params: matchedRoute.params
            }));
        } else if(this.props.routes.hasOwnProperty('/400')) {
            return React.createElement(this.props.routes['/400'],{
                route: route,
                navigator: nav
            });
        } else {
            throw new Error('No route matched path: ' + url.pathname);
        }
    },

    render(){
        return (
            <Navigator
                ref={this._setNavigatorRef}
                style={styles.container}
                initialRoute={{ path: "/", }}
                renderScene={this.renderScene}
                configureScene={(route) => {
                  if (route.mode) {
                    return Navigator.SceneConfigs[route.mode];
                  }
                  return Navigator.SceneConfigs.FloatFromRight;
                }}
            />
        );
    }

});

Navigate.redirect = function(path){
    Event.emit("RNnavigate.redirect",path);
};

Navigate.back = function(opts){
    Event.emit("RNnavigate.back", opts);
};

const styles = {
    container: {
      flex: 1,
    }
}

export default Navigate;
