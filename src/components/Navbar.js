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
                    src="${!isAuth ? `https://osu.ppy.sh/assets/images/avatar-guest.8a2df920.png` : `./lta-avt.jpg`}"
                    alt="nav avt"
                    id="toggle-signin"
                    class="w-full h-full rounded-full cursor-pointer"
                >
                ${
                    isAuth
                        ? `
                        <div id="signin-form" class="absolute bg-white top-full right-0 w-60 flex flex-col rounded-sm hidden">
                            <div class="px-5 py-5 flex flex-row gap-3 border-b-1 border-neutral-200">
                                <img
                                    src="./lta-avt.jpg"
                                    alt="avt"
                                    id="toggle-signin"
                                    class="w-12 h-12 rounded-full cursor-pointer"
                                >
                                <div class="flex flex-col">
                                    <h2 class="text-lg">LTA Channel</h2>
                                    <h2 class="text-lg">@ltaltalta</h2>
                                    <p id="profile" class="text-blue-400 text-md cursor-pointer pt-2">View your channel</p>
                                </div>
                            </div>
                            <div class="flex flex-col w-full px-5 py-5">
                                <div id="signout" class="flex flex-row items-center gap-3">
                                    <img 
                                        src="./signout.svg"
                                        alt="icon-signout"
                                        class="w-5 h-5 cursor-pointer"
                                    >
                                    <button class="text-left w-full cursor-pointer">
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    `
                        : `
                        <div id="signin-form" class="absolute top-full right-0 bg-neutral-700 w-90 flex flex-col gap-4 rounded-sm mt-3 hidden">
                            <h2 class="capitalize text-white text-lg px-5 pt-4">Sign in to proceed</h2>
                            <div class="flex flex-col px-5">
                                <input id="username" type="text" placeholder="username/email" required class="w-full outline-none text-white text-xs bg-neutral-800 px-2 py-3 rounded-sm mb-1">
                                <input id="password" type="password" placeholder="password" required class="w-full outline-none text-white text-xs bg-neutral-800 px-2 py-3 rounded-sm mb-1">
                                <p id="failed" class="text-indigo-400 text-xs font-semibold hidden">Incorrect sign in.</p>
                                <p class="text-yellow-400 text-sm font-semibold cursor-pointer pt-3">I've forgotten my details</p>
                            </div>
                            <div class="flex flex-row justify-between px-5">
                                <button id="viewsignin" class="px-2 py-3 flex justify-between text-white text-xs font-bold rounded-sm cursor-pointer">
                                    View Full Page
                                </button>                                
                                <button id="signin" class="w-30 px-4 py-3 flex justify-between bg-cyan-600 text-white text-xs font-bold rounded-sm cursor-pointer">
                                    Sign In
                                    <img
                                        src="./signin.svg"
                                        alt="icon"
                                        class="w-4 invert"
                                    >
                                </button>
                            </div>
                            <div class="w-full bg-neutral-600 rounded-b-sm px-5 pt-4">
                                <h2 class="capitalize text-white text-lg pb-5">Don't have an account?</h2>
                                <p class="text-xs text-neutral-400 pb-4">Download <span class="line-through">osu!</span> to create your own account!</p>
                                <div class="flex flex-row justify-end pb-4">                             
                                    <button class="w-30 px-4 py-3 flex justify-between bg-cyan-600 text-white text-xs font-bold rounded-sm cursor-pointer" onclick="window.location.href = 'https://osu.ppy.sh/home/download'">
                                        Download
                                        <img
                                            src="./download.svg"
                                            alt="icon"
                                            class="w-4 invert"
                                        >
                                    </button>
                                </div>
                            </div>
                        </div>
                    `
                }
            </div>
        </div>
    `;
}
