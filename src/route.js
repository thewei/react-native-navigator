import React from 'react-native';
const {
    createElement,
    Component,
    PropTypes,
} = React;

export default class Route extends Component {
    static propTypes = {
        component: PropTypes.func,
        path: PropTypes.string,
    }

    render() {
        return null;
    }
}
