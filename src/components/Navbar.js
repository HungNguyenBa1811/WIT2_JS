export default function Navbar() {
    return `
        <div class="w-full bg-white h-16 fixed top-0 z-10 flex flex-row items-center gap-5 items-center px-8">
            <!-- Navbar -->
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
    `;
}