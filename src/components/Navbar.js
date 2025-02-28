export default function Navbar({ isAuth }) {
    return `
        <div class="w-full bg-white h-16 fixed top-0 z-10 flex flex-row items-center justify-between px-8">
            <!-- Navbar -->
            <div class="h-full flex flex-row gap-5">
                <img
                    src="/menu.svg"
                    alt="logo"
                    class="cursor-pointer w-8"
                />
                <img
                    src="/logo.svg"
                    alt="logo"
                    id="navbar"
                    class="cursor-pointer w-30"
                />
            </div>
            <div class="w-10 h-10 rounded-full relative border-1 border-neutral-100">
                <img
                    src="https://osu.ppy.sh/assets/images/avatar-guest.8a2df920.png"
                    alt="avt"
                    id="toggle-signin"
                    class="w-full h-full rounded-full cursor-pointer"
                >
                ${
                    isAuth
                        ? `
                        <div id="signin-form" class="absolute top-full right-0 bg-neutral-700 w-40 h-26 flex flex-col gap-4 px-5 py-4 rounded-sm mt-3 hidden">
                            <div class="flex flex-col justify-end">
                                <h2 class="capitalize text-white text-lg font-semibold">Authenticated!</h2>
                                <button id="signout" class="w-30 px-4 py-3 text-white text-sm font-bold rounded-sm cursor-pointer">
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    `
                        : `
                        <div id="signin-form" class="absolute top-full right-0 bg-neutral-700 w-90 h-60 flex flex-col gap-4 px-5 py-4 rounded-sm mt-3 hidden">
                            <h2 class="capitalize text-white text-lg font-semibold">Sign in to proceed</h2>
                            <div class="flex flex-col">
                                <input id="username" placeholder="username/email" required class="w-full outline-none text-white text-xs bg-neutral-800 px-2 py-3 rounded-sm mb-1">
                                <input id="password" type="password" placeholder="password" required class="w-full outline-none text-white text-xs bg-neutral-800 px-2 py-3 rounded-sm mb-1">
                                <p id="failed" class="text-indigo-400 text-sm font-semibold hidden">Incorrect sign in.</p>
                            </div>
                            <div class="flex flex-row justify-end">
                                <button id="signin" class="w-30 px-4 py-3 flex justify-between bg-cyan-600 text-white text-xs font-bold rounded-sm cursor-pointer">
                                    Sign In
                                    <img
                                        src="./signin.svg"
                                        alt="icon"
                                        class="w-4 invert"
                                    >
                                </button>
                            </div>
                        </div>
                    `
                }
            </div>
        </div>
    `;
}
