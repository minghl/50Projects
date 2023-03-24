const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    // 创建DOM节点，并绑定事件
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        // HTMLMediaElement.play() 开始播放媒体，会返回一个promise对象
        document.getElementById(sound).play();
    })

    // js生成的DOM节点插入原生节点
    document.getElementById('buttons').appendChild(btn);
})

// 停止所有音频，不会单点停止某一个
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        // HTMLMediaElement.pause() 暂停音频播放
        song.pause();
        // HTMLMediaElement.currentTime 停止播放后归0
        song.currentTime = 0;
    })
}