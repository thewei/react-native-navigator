'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _navigate = require('./navigate');

var _navigate2 = _interopRequireDefault(_navigate);

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

var createElement = _reactNative2['default'].createElement;
var Component = _reactNative2['default'].Component;
var PropTypes = _reactNative2['default'].PropTypes;

var Router = (function (_Component) {
    _inherits(Router, _Component);

    _createClass(Router, null, [{
        key: 'Route',
        value: _route2['default'],
        enumerable: true
    }]);

    function Router(props) {
        _classCallCheck(this, Router);

        _get(Object.getPrototypeOf(Router.prototype), 'constructor', this).call(this, props);

        var routes = {
            '/': this.props.component
        };

        function mapRoutes(childProps) {

            if (!Array.isArray(childProps)) {
                childProps = [childProps];
            }

            childProps.map(function (children) {
                routes[children.props.path] = children.props.component;
                if (children.props.children) {
                    mapRoutes(children.props.children);
                }
            });
        }

        mapRoutes(this.props.children);

        this.state = {
            routes: routes
        };
    }

    _createClass(Router, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var initRoute = _props.initRoute;
            var notFoundRoute = _props.notFoundRoute;

            return createElement(_navigate2['default'], {
                initRoute: initRoute,
                notFoundRoute: notFoundRoute,
                routes: this.state.routes
            }, children);
        }
    }]);

    return Router;
})(Component);

exports['default'] = Router;
module.exports = exports['default'];