import { router } from '../main.js';
import CheckAuth from '../services/auth.js';

function renderLogin({ isAuth }) {
    if (isAuth) {
        router.navigate('/')
    } else {
        if (document.querySelector('#main')) {
            //// Render \\\\
            document.querySelector('#main').innerHTML = `
                <!-- Content -->
                <div class="w-full h-screen relative flex flex-row flex-wrap justify-center items-center gap-12">
                    <div class="flex items-center justify-center">
                        <img
                            src="https://code.ptit.edu.vn/beta/assets/image-1-Jbf5HJr8.png"
                        >
                    </div>
                    <div class="w-100 px-8 py-8 flex flex-col justify-center gap-7 border-1 border-neutral-100 shadow-2xl rounded-xl">
                        <div class="w-full flex flex-col justify-center items-center gap-3">
                            <img
                                src="./logo-main.svg"
                                alt="ptit jumpscare"
                                class="w-20 h-20"
                            >
                            <h1 class="text-2xl font-bold text-red-800">Đăng nhập</h1>
                        </div>
                        <div class="w-full flex flex-col">
                            <p class="text-lg">Tài khoản</p>
                            <input id="username" type="text" class="w-full text-md outline-none border-1 rounded-lg px-4 py-3 mb-5">
                            <p class="text-lg">Mật khẩu</p>
                            <input id="password" type="password" class="w-full text-md outline-none border-1 rounded-lg px-4 py-3">
                        </div>
                        <button id="signin" class="w-full flex flex-row items-center justify-center gap-3 py-3 bg-red-800 rounded-lg cursor-pointer">
                            <img
                                src="./signin.svg"
                                alt="icon signin"
                                class="w-4 h-4 invert"
                            >
                            <span class="text-white text-md">
                                Đăng nhập
                            </span>
                        </button>
                    </div>
                    <div id="failed" class="absolute top-0 mt-3 px-2 py-2 rounded-lg shadow-xl flex flex-row justify-center items-center gap-2 hidden">
                        <img
                            src="./error.svg"
                            alt="icon error"
                            class="w-4 h-4"
                        >
                        <p class="text-sm text-red-800">Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập!</p>
                    </div>
                </div>
            `;
    
            //// Login Form Control \\\\
            CheckAuth({ isAuth })
        }
    }
}

export default renderLogin;
