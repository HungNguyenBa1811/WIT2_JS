import Navigo from 'navigo';
import renderHome from './pages/renderHome.js';
import renderWatch from './pages/renderWatch.js';
import renderHistory from './pages/renderHistory.js';
import renderShorts from './pages/renderShorts.js';

const router = new Navigo('/');
router.on('/', () => {
    renderHome();
});
router.on('/watch/:id', (params) => {
    renderWatch(params);
});
router.on('/shorts', () => {
    renderShorts();
});
router.on('/history', () => {
    renderHistory();
});
router.resolve();

export { router };