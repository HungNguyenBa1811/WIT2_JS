import Navigo from 'navigo';
import renderHome from './pages/renderHome.js';
import renderWatch from './pages/renderWatch.js';
import renderHistory from './pages/renderHistory.js';
import renderShorts from './pages/renderShorts.js';
import renderLogin from './pages/renderLogin.js';
import renderProfile from './pages/renderProfile.js';

function authWrapper(func){
    return (params) => {
        let isAuth = localStorage.getItem('loginToken')?.length > 0 && localStorage.getItem('isLogin');
        return func({ isAuth, params })
    }
}

const router = new Navigo('/');
router.on('/', authWrapper(renderHome));

router.on('/watch/:id', authWrapper(renderWatch));

router.on('/shorts', authWrapper(renderShorts));

router.on('/history', authWrapper(renderHistory));

router.on('/login', authWrapper(renderLogin));

router.on('/profile', authWrapper(renderProfile));

router.resolve();

export { router };