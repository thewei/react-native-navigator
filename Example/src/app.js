import React from 'react-native';
import Navigator from 'react-native-navigator';
const {
	Router,
	Route
} = Navigator;

import IndexPage from './pages/IndexPage';
import DocPage from './pages/DocPage';
import DocSection from './pages/DocSection';
import BreadcrumbNavSample from './pages/BreadcrumbNavSample';
import NavigationBarSample from './pages/NavigationBarSample';
import JumpingNavSample from './pages/JumpingNavSample';
import NavSimpleExample from './pages/NavSimpleExample';


export default class App extends React.Component{
  render() {
    return (
      <Router component={IndexPage} >
      	<Route path="/example/navbar-sample" component={NavigationBarSample} />
      	<Route path="/example/jumping-nav-sample" component={JumpingNavSample} />
      	<Route path="/example/breadcrumb-nav-sample" component={BreadcrumbNavSample} />
      	<Route path="/example/nav-simple-example" component={NavSimpleExample} />
      	<Route path="/doc/:id" component={DocSection} />
      </Router>
    );
  }
};

export default App;