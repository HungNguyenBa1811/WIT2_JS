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
            fetch('api/auth/login', {
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
                    alert('Logged in!');
                    router.navigate('/');
                    window.location.reload();
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
            router.navigate('/');
            window.location.reload();
        });
    }
}