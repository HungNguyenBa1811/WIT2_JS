import { router } from '../main.js';
import { videoList, sidebarList } from '../data/list.js';
import Sidebar from '../components/Sidebar.js';
import Video from '../components/videoGrid.js';
import Navbar from '../components/Navbar.js';
import CheckAuth from '../services/auth.js';

function renderHome({ isAuth }) {
    if (document.querySelector('#main')) {
        //// Render \\\\
        document.querySelector('#main').innerHTML = `
            ${Navbar({ isAuth })}
            <div id="sidebar" class="pt-16 fixed top-0 left-0 w-1/6 min-w-60 bg-white z-1 flex flex-col h-full px-4">
                <!-- Sidebar -->
                ${Sidebar({ itemActive: 'home' })}
            </div>
            <div id="app" class="pt-16 ml-[16.67%] w-5/6 flex">
                <!-- Content -->
                <div class="flex flex-row flex-wrap justify-around gap-2 px-5 py-5">
                    ${videoList.map((vid) => Video(vid)).join('')}
                </div>
            </div>
        `;

        //// Toggle \\\\
        // Sign In \\
        document.getElementById('toggle-signin').addEventListener('click', () => {
            let form = document.getElementById('signin-form');
            if (form.classList.contains('hidden')) form.classList.remove('hidden');
            else form.classList.add('hidden');
        });

        //// Login Form Control \\\\
        CheckAuth({ isAuth });

        //// Navigator \\\\
        // Video \\
        videoList.forEach(({ id }) => {
            let idSelector = '#' + id;
            document.querySelector(idSelector).addEventListener('click', () => {
                router.navigate('/watch/' + id);
            });
        });
        // Navbar \\
        document.querySelector('#navbar').addEventListener('click', () => {
            router.navigate('/');
        });
        if (!isAuth) {
            // Login \\
            document.querySelector('#viewsignin').addEventListener('click', () => {
                router.navigate('/login');
            });
        } else {
            // Profile \\
            document.querySelector('#profile').addEventListener('click', () => {
                router.navigate('/profile');
            });
        }

        // Sidebar \\
        sidebarList.forEach(({ path, id }) => {
            let idSelector = '#' + id;
            document.querySelector(idSelector).addEventListener('click', () => {
                router.navigate(path);
            });
        });
    }
}

export default renderHome;
