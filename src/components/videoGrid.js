// Grid for box layout
export default function Video({ title, channel, view, time, channel_img, thumbnail, id }) {
    let videoThumbnail = thumbnail
        ? `
            <img
                src="${thumbnail}"
                alt="${title}"
                class="w-full h-full rounded-2xl"
            />
        `
        : '';
    return `
        <div class="w-90 flex flex-col gap-3 pb-8 cursor-pointer" data-navigo id="${id}">
            <div class="w-90 h-50 bg-black rounded-2xl relative">
                ${videoThumbnail}
                <p class="absolute right-3 bottom-3 bg-red backdrop-blur-sm px-1 rounded-md text-sm font-semibold text-white">17:27</p>
            </div>
            <div class="flex flex-row w-full">
                <div class="w-1/8 flex flex-start justify-center py-1">
                    <img
                        class="rounded-full w-10 h-10"
                        src="${channel_img}"
                        alt="${title}"
                    />
                </div>
                <div class="w-7/8 flex flex-col justify-between pl-2">
                    <h1 class="text-xl font-semibold py-1 break-words">${title}</h1>
                    <p>${channel}</p>
                    <p>${view} Views • ${time}</p>
                </div>
            </div>
        </div>
    `;
}

// Grid for list layout
export function VideoCol({ title, channel, view, thumbnail, id }) {
    return `
        <div id="${id}" class="w-full flex flex-row cursor-pointer gap-4" data-navigo>
            <div class="w-70">
                <img
                    src="${thumbnail}"
                    alt=""
                    class="rounded-xl"
                >
            </div>
            <div>
                <h1 class="text-2xl font-semibold">${title}</h1>
                <p class="text-sm py-1">${channel} • ${view} views</p>
            </div>
        </div>
    `;
}