// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});


player.on('timeupdate', throttle(function (event) {
    const time = event.seconds;
    localStorage.setItem("videoplayer-current-time", time);
    console.log(time);
}, 1000));


player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

