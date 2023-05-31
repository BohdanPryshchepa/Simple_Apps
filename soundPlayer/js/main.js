const btns= document.querySelectorAll('.js-btn');

btns.forEach((item)=>{
    item.addEventListener('click', (e) =>{
        let btn = e.target;
        btn.classList.add('play')
        setTimeout(()=> btn.classList.remove('play'),300)


        let sound = document.getElementById(btn.dataset.sound)
        sound.play()
    })
})


const song = document.querySelector("#song");
const remix = document.querySelector("#remix");

function togglePlay() {
    return song.paused ? song.play() : song.pause();
}
function togglePlayRemix() {
    return remix.paused ? remix.play() : remix.pause();
}