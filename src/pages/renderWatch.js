import { router } from '../main';
import { videoList } from '../data/list';
import Navbar from '../components/Navbar';
import CheckAuth from '../services/auth.js';

function renderWatch({ isAuth, params }) {
    if (document.querySelector('#main')) {
        let videoID = params.data.id;
        let currentVideo = videoList.filter((vid) => vid.id === videoID);
        //// Find video in storage \\\\
        if (currentVideo.length) {
            let {
                title: videoTitle,
                thumbnail: videoThumb,
                channel_img: channelImg,
                channel: channelName,
            } = currentVideo[0];
            //// Render \\\\
            document.querySelector('#main').innerHTML = `
                ${Navbar({ isAuth })}
                <!-- Content -->
                <div class="w-full h-screen pt-16">
                    <div class="px-10 py-4 flex flex-col">
                        <div class="w-256 h-144 bg-black rounded-3xl">
                            <img
                                src="${videoThumb}"
                                alt="${videoID}"
                                class="rounded-3xl"
                            >
                        </div>
                        <div class="w-256">
                            <h1 class="text-2xl font-bold pt-3">${videoTitle}</h1>
                            <p class="text-lg pt-2">(Bạn đang xem video có ID là: <span>${videoID}</span>) <span class="copy shadow-md border-1 border-gray-200 rounded-lg px-3 py-1 ml-3 cursor-pointer">Copy</span></p>
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
                            <div class="text-justify mt-5 bg-gray-200 px-3 py-3 rounded-lg text-gray-500">
                                <h1 class="text-md italic">Example Description</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores eligendi deserunt minima earum distinctio sapiente velit ab iusto? Enim facilis ex atque voluptatem neque ipsa. Sunt, odio delectus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fixed right-5 bottom-5 w-15 h-15">
                    <button class="btn-to-top w-full h-full border-4 rounded-xl">▲</button>
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
            //// Utility \\\\
            // Copy button \\
            document.querySelector('.copy').addEventListener('click', (e) => {
                let wholeText = e.target.parentElement;
                let copyText = wholeText.children[0].innerText;
                navigator.clipboard
                    .writeText(copyText)
                    .then(() => {
                        e.target.innerText = 'Copied!';
                        setTimeout(() => {
                            e.target.innerText = 'Copy';
                        }, 727);
                    })
                    .catch((err) => console.log('Failed: ', err));
            });
            // Scroll-to-top button \\
            let btnToTop = document.querySelector('.btn-to-top');
            window.onscroll = () => {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
                    btnToTop.style.display = 'block';
                else
                    btnToTop.style.display = 'none';
            };
            btnToTop.addEventListener('click', () => {
                window.scrollTo({ 
                    top: 0, 
                    behavior: 'smooth' 
                });
            });
        } else {
            // Not found \\
            document.querySelector('#main').innerHTML = `
                ${Navbar({ isAuth })}
                <!-- Content -->
                <div class="w-full h-screen pt-16 flex justify-center items-center">
                    <p class="text-4xl">404 Error - Video Not Found (Video ID: #${videoID})</p>
                </div>
            `;
        }
        //// Navigator \\\\
        // Navbar \\
        document.querySelector('#navbar').addEventListener('click', () => {
            router.navigate('/');
        });
    }
}

export default renderWatch;