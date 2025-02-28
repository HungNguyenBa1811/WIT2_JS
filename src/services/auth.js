import { router } from "../main";

export default function CheckAuth({ isAuth }) {
    if (!isAuth) {
        document.getElementById('signin').addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const auth = {
                email,
                password,
            };
            fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(auth),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data); // return message & token
                    if (data.message !== 'Login successful') throw new Error('Invalid sign in');
                    window.localStorage.setItem('isLogin', true);
                    window.localStorage.setItem('loginToken', data.token);
                    document.getElementById('main').onclick = () =>
                        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

                    const newWindow = window.open('', '_blank');
                    newWindow.document.write(`
                        <!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8" />
                                <link rel="icon" type="image/jpg" href="/midori.jpg" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
                                <title>WIT2025 YTClone</title>
                            </head>
                            <body>
                                <div class="w-screen h-screen text-green-600 text-4xl font-semibold flex flex-col justify-center items-center">
                                    <div>${data.message}, please close this window to continue.</div>
                                    <div>Will auto close in <span id="countdown">3</span>s ...</div>
                                </div>
                                <script>
                                    let cnt = 3;
                                    const countdown = document.getElementById('countdown');
                                    const timer = setInterval(() => {
                                        cnt--;
                                        countdown.innerText = cnt;
                                        if(cnt <= 0) {
                                            clearInterval(timer);
                                            window.close()
                                        }
                                    }, 1000);
                                </script>
                            </body>
                        </html>
                    `);
                    newWindow.document.close();
                    setTimeout(() => {
                        router.navigate('/')
                        window.location.reload();
                    }, 2727);
                })
                .catch((err) => {
                    console.log(err);
                    if (document.getElementById('failed').classList.contains('hidden'))
                        document.getElementById('failed').classList.remove('hidden');
                });
        });
    } else {
        document.getElementById('signout').addEventListener('click', () => {
            alert('Logged out!');
            window.localStorage.clear();
            window.location.reload();
        });
    }
}