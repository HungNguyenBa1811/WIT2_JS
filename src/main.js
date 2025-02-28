import Navigo from 'navigo';
import renderHome from './pages/renderHome.js';
import renderWatch from './pages/renderWatch.js';
import renderHistory from './pages/renderHistory.js';
import renderShorts from './pages/renderShorts.js';

// function fett() {
//     const email = 'test@test.com';
//     const password = 'test';

//     const auth = {
//         email,
//         password,
//     };
//     fetch('/api/auth/login', {
//         method: 'POST',
//         body: JSON.stringify(auth),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//         });
// }

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

router.resolve();

export { router };