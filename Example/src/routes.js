import IndexPage from './pages/IndexPage';
import DocPage from './pages/DocPage';
import DocSection from './pages/DocSection';

export default {
    '/': IndexPage,
    '/doc': DocPage,
    '/doc/:id': DocSection
};
