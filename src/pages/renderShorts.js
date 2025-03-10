import { router } from '../main.js';
import { sidebarList } from '../data/list.js';
import Sidebar from '../components/Sidebar.js';
import Navbar from '../components/Navbar.js';
import CheckAuth from '../services/auth.js';

function renderShorts({ isAuth }) {
    if (document.querySelector('#main')) {
        //// Render \\\\
        document.querySelector('#main').innerHTML = `
            ${Navbar({ isAuth })}
            <div id="sidebar" class="pt-16 fixed top-0 left-0 w-1/6 flex flex-col h-full px-4">
                <!-- Sidebar -->
                ${Sidebar({ itemActive: 'shorts' })}
            </div>
            <div id="app" class="pt-16 ml-[16.67%] w-5/6 flex">
                <!-- Content -->
                <div class="w-full h-full flex justify-center">
                    <h1 class="text-xl text-gray-500">
                        No Shorts Available
                    </h1>
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
        CheckAuth({ isAuth })
        
        //// Navigator \\\\
        // Navbar \\
        document.querySelector('#navbar').addEventListener('click', () => {
            router.navigate('/');
        });
        // Sidebar \\
        sidebarList.forEach(({ path, id }) => {
            let idSelector = '#' + id;
            document.querySelector(idSelector).addEventListener('click', () => {
                router.navigate(path);
            });
        });
    }
}

//export function
export default renderShorts;
