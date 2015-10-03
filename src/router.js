import React from 'react-native';
import Navigator from './navigate';
const {
    createElement,
    Component,
    PropTypes,
} = React;
import Route from './route';

export default class Router extends Component {
    static Route = Route;

    constructor(props) {
        super(props);

        let routes = {
        		'/': this.props.component
        	};

        function mapRoutes(childProps){
        	
        	if(!Array.isArray(childProps)){
        		childProps = [childProps];
        	}

        	childProps.map(function(children){
    			routes[children.props.path] = children.props.component;
    			if(children.props.children){
    				mapRoutes(children.props.children);
    			}
    		});
			
        }

        mapRoutes(this.props.children);

        this.state = {
        	routes: routes
        };
    }	

    componentDidMount() {
    	console.log(this.state);
    }


    render() {
    	const {
    		children,
    		initRoute,
    		notFoundRoute,
    	} = this.props;

        return createElement(Navigator, {
            initRoute: initRoute,
            notFoundRoute: notFoundRoute,
            routes: this.state.routes
        }, children);
    }
}
