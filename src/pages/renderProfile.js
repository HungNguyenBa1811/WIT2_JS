import { router } from '../main.js';
import { videoList, sidebarList } from '../data/list.js';
import Sidebar from '../components/Sidebar.js';
import Navbar from '../components/Navbar.js';
import CheckAuth from '../services/auth.js';

function renderProfile({ isAuth }) {
    if (!isAuth) {
        router.navigate('/login');
    }
    if (document.querySelector('#main')) {
        //// Render \\\\
        document.querySelector('#main').innerHTML = `
            ${Navbar({ isAuth })}
            <div id="sidebar" class="pt-16 fixed top-0 left-0 w-1/6 min-w-60 bg-white z-1 flex flex-col h-full px-4">
                <!-- Sidebar -->
                ${Sidebar({ itemActive: 'home' })}
            </div>
            <div id="app" class="pt-16 ml-[16.67%] w-5/6 flex flex-col gap-5">
                <!-- Content -->
                <div class="w-full px-15">
                    <div class="w-full h-45 bg-black rounded-xl">
                        <img
                            src="https://yt3.googleusercontent.com/hHkAO3VTa5i1larZaf3EuxZ2Ld-HBHGn56Gil6QXznNCRPJhTShMYYYXxu9XU9V_vFOwwvccOQ=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                            alt="banner"
                            class="w-full h-full rounded-xl"
                        >
                    </div>
                </div>
                <div class="w-full px-15">
                    <div class="w-full flex flex-row gap-4">
                        <div class="w-42 h-42 rounded-full bg-sky-400">
                            <img
                                src="./lta-avt.jpg"
                                alt="profile avt"
                                class="w-full h-full rounded-full"
                            >
                        </div>
                        <div class="flex flex-col justify-between">
                            <div class="flex flex-col gap-2">
                                <h1 class="font-bold text-3xl">LTA Alt Channel</h1>
                                <p class="text-sm"><strong class="font-semibold">@ltaltalta</strong> • 7.27K subscribers • 0 video</p>
                                <p class="text-sm">return null</p>
                                <a class="text-sm text-blue-700" href="https://www.facebook.com/n0xgg03">https://www.facebook.com/n0xgg03</a>
                            </div>
                            <button class="max-w-24 bg-black rounded-full text-white text-sm font-semibold px-2 py-2">
                                Subscribe
                            </button>
                        </div>
                    </div>
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
        // Navbar \\
        document.querySelector('#navbar').addEventListener('click', () => {
            router.navigate('/');
        });
        // Login \\
        if (!isAuth) {
            document.querySelector('#viewsignin').addEventListener('click', () => {
                router.navigate('/login');
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

export default renderProfile;
