'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

var _urlliteLibCore = require('urllite/lib/core');

var _urlliteLibCore2 = _interopRequireDefault(_urlliteLibCore);

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var Navigator = _reactNative2['default'].Navigator;

var Navigate = _reactNative2['default'].createClass({
    displayName: 'Navigate',

    getInitialState: function getInitialState() {
        return {
            _routes: this._processRoutes(this.props.routes)
        };
    },

    componentWillUnmount: function componentWillUnmount() {
        this._listeners && this._listeners.forEach(function (listener) {
            return listener.remove();
        });
        _event2['default'].off("RNnavigate.redirect");
        _event2['default'].off("RNnavigate.back");
    },

    _parseUrl: function _parseUrl(path) {
        return (0, _urlliteLibCore2['default'])(path || '/');
    },

    _parseSearch: function _parseSearch(str) {
        var parsed = {};

        if (str.indexOf('?') === 0) str = str.slice(1);
        var pairs = str.split('&');

        pairs.forEach(function (pair) {
            var keyVal = pair.split('=');
            parsed[decodeURIComponent(keyVal[0])] = decodeURIComponent(keyVal[1]);
        });

        return parsed;
    },

    _matchParams: function _matchParams(path) {
        if (!path) {
            return false;
        }

        var matchedRoute = {};

        this.state._routes.some(function (route) {
            var matches = route.pattern.exec(path);

            if (matches) {
                if (route.params[0] && route.params[0].name === 0) {
                    return false;
                }

                matchedRoute.component = route.component;

                var params = matches.slice(1, route.params.length + 1);
                matchedRoute.params = {};
                params.map(function (_params, index) {
                    matchedRoute.params[route.params[index].name] = _params;
                });

                return true;
            }

            return false;
        });

        return matchedRoute.component ? matchedRoute : false;
    },

    _processRoutes: function _processRoutes(routes) {
        var patterns = [],
            path,
            pattern,
            keys,
            component;

        for (path in routes) {
            if (routes.hasOwnProperty(path)) {
                keys = [];
                pattern = (0, _pathToRegexp2['default'])(path, keys);
                component = routes[path];

                patterns.push({ pattern: pattern, params: keys, component: component });
            }
        }

        return patterns;
    },

    _setNavigatorRef: function _setNavigatorRef(navigator) {
        if (navigator !== this._navigator) {
            this._navigator = navigator;

            if (navigator) {
                var callback = function callback(event) {
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
                this._listeners = [navigator.navigationContext.addListener('willfocus', callback), navigator.navigationContext.addListener('didfocus', callback)];

                _event2['default'].on("RNnavigate.redirect", function (path) {
                    var info = {};
                    var replace = false;
                    if (typeof path === "object") {
                        if (path.replace) {
                            delete path.replace;
                            replace = true;
                        }
                        info = Object.assign({}, path);
                    } else {
                        info.id = path;
                    }

                    replace ? navigator.replace(info) : navigator.push(info);
                });

                _event2['default'].on("RNnavigate.back", function (opts) {
                    var info = {};
                    if (opts && typeof opts === "object") {
                        if (opts.id === "/") {
                            navigator.popToTop();
                        }
                    } else {
                        navigator.pop();
                    }
                });
            }
        }
    },

    renderScene: function renderScene(route, nav) {
        var url = this._parseUrl(route.id);
        var query = this._parseSearch(url.search);
        var matchedRoute = this._matchParams(url.pathname);

        if (matchedRoute) {
            return _reactNative2['default'].createElement(matchedRoute.component, Object.assign(route.props || {}, {
                route: route,
                navigator: nav,
                query: query,
                params: matchedRoute.params
            }));
        } else if (this.props.routes.hasOwnProperty('/400')) {
            return _reactNative2['default'].createElement(this.props.routes['/400'], {
                route: route,
                navigator: nav
            });
        } else {
            throw new Error('No route matched path: ' + url.pathname);
        }
    },

    render: function render() {
        return _reactNative2['default'].createElement(Navigator, {
            ref: this._setNavigatorRef,
            style: styles.container,
            initialRoute: { path: "/" },
            renderScene: this.renderScene,
            configureScene: function (route) {
                if (route.mode) {
                    return Navigator.SceneConfigs[route.mode];
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }
        });
    }

});

Navigate.redirect = function (path) {
    _event2['default'].emit("RNnavigate.redirect", path);
};

Navigate.back = function (opts) {
    _event2['default'].emit("RNnavigate.back", opts);
};

var styles = {
    container: {
        flex: 1
    }
};

exports['default'] = Navigate;
module.exports = exports['default'];
//# sourceMappingURL=navigate.js.map