const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// 点击更新渲染
jokeBtn.addEventListener('click', generateJoke);

// 初次渲染
generateJoke();

// Using Async/Await
// 必须使用异步函数，因为fetch发送请求是异步的，不然渲染不出来就结束了
async function generateJoke() {

    //发送请求配置
    const config = {
        headers: {
            Accept: 'application/json',
        }
    }

    // fetch也是异步的，异步用then可以用await替代
    const res = await fetch('https://icanhazdadjoke.com', config);

    // json也是异步的
    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}