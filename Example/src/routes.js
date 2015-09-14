import IndexPage from './pages/IndexPage';
import DocPage from './pages/DocPage';
import DocSection from './pages/DocSection';
var BreadcrumbNavSample = require('./pages/BreadcrumbNavSample');
var NavigationBarSample = require('./pages/NavigationBarSample');
var JumpingNavSample = require('./pages/JumpingNavSample');
import NavSimpleExample from './pages/NavSimpleExample';

export default {
    '/': IndexPage,
    '/example/navbar-sample': NavigationBarSample,
    '/example/jumping-nav-sample': JumpingNavSample,
    '/example/breadcrumb-nav-sample': BreadcrumbNavSample,
    '/example/nav-simple-example': NavSimpleExample,
    '/doc/:id': DocSection
};
