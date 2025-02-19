import { sidebarList } from "../data/list";

export default function Sidebar({ itemActive }) {
    // Reset state
    sidebarList.forEach(obj => obj.isActive = false)

    // Find current active item in sidebar
    let itemFound = sidebarList.filter((obj) => obj.name.toLowerCase() === itemActive.toLowerCase());
    let listClass = 'hover:bg-gray-200 cursor-pointer px-5 py-3 rounded-xl flex flex-row items-center gap-5';
    itemFound[0].isActive = true;
    return `
        <ul class="flex flex-col text-lg pt-4">
            ${sidebarList
                .map((obj) => {
                    let list = obj.isActive ? listClass.split(':').pop() : listClass;
                    return `
                        <li id="${obj.id}" class="${list}">
                            <img src="${obj.isActive ? obj.icon_active : obj.icon}" alt="${obj.name}" class="w-7" />
                            <h1>${obj.name}</h1>
                        </li>
                    `;
                })
                .join('')}
        </ul>
    `;
}