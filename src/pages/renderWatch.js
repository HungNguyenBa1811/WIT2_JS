import { router } from '../main';
import { videoList } from './renderHome';
import Navbar from '../components/Navbar';

function renderWatch(params) {
    if (document.querySelector('#main')) {
        let videoID = params.data.id;
        let currentVideo = videoList.filter((vid) => vid.id === videoID);
        if (currentVideo.length) {
            videoID = '(Bạn đang xem video có ID là ' + videoID + ')';
            let {
                title: videoTitle,
                thumbnail: videoThumb,
                channel_img: channelImg,
                channel: channelName,
            } = currentVideo[0];
            document.querySelector('#main').innerHTML = `
                ${Navbar()}
                <!-- Content -->
                <div class="w-full h-screen pt-16 ">
                    <div class="px-8 py-8 flex flex-col">
                        <div class="w-256 h-144 bg-black rounded-3xl">
                            <img
                                src="${videoThumb}"
                                alt="${videoID}"
                                class="rounded-3xl"
                            >
                        </div>
                        <h1 class="text-2xl font-bold pt-3">${videoTitle}</h1>
                        <p class="text-lg">${videoID}</p>
                        <div class="flex flex-row gap-3 pt-3 cursor-pointer">
                            <div class="flex flex-start justify-center">
                                <img
                                    class="rounded-full w-10 h-10"
                                    src=${channelImg}
                                    alt=""
                                />
                            </div>
                            <div class="flex flex-col justify-between">
                                <h1 class="text-xl font-bold">${channelName}</h1>
                                <p>72.7K subscriber</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            document.querySelector('#main').innerHTML = `
                ${Navbar()}
                <!-- Content -->
                <div class="w-full h-screen pt-16 flex justify-center items-center">
                    <p class="text-4xl">404 Error - Video Not Found (Video ID: #${videoID})</p>
                </div>
            `;
        }
        document.querySelector('#navbar').addEventListener('click', () => {
            router.navigate('/');
        });
    }
}

//export function
export default renderWatch;
