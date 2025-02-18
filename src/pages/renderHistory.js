import { router } from '../main.js';
import { historyList } from '../data/list.js';
import Sidebar, { sidebarList } from '../components/Sidebar.js';
import { VideoCol } from '../components/videoGrid.js';
import Navbar from '../components/Navbar.js';

function renderHistory() {
    if (document.querySelector('#main')) {
        document.querySelector('#main').innerHTML = `
            ${Navbar()}
            <div id="sidebar" class="pt-16 fixed top-0 left-0 w-1/6 flex flex-col h-full px-4">
                <!-- Sidebar -->
                ${Sidebar({ itemActive: 'history' })}
            </div>
            <div id="app" class="pt-16 ml-[16.67%] w-5/6 flex flex-col">
                <!-- Content -->
                <div class="w-full flex items-center text-4xl font-bold px-20 py-10">
                    <h1>Watch History</h1>
                </div>
                <div class="w-2/3 flex flex-col flex-nowrap px-20 py-10 gap-5">
                    ${historyList.map((item) => VideoCol(item)).join('')}
                </div>
            </div>
        `;
        historyList.forEach(({ id }) => {
            let idSelector = '#' + id;
            document.querySelector(idSelector).addEventListener('click', () => {
                router.navigate('/watch/' + id);
            });
        });
        document.querySelector('#navbar').addEventListener('click', () => {
            router.navigate('/');
        });
        sidebarList.forEach(({ path, id }) => {
            let idSelector = '#' + id;
            document.querySelector(idSelector).addEventListener('click', () => {
                router.navigate(path);
            });
        });
    }
}

//export function
export default renderHistory;
