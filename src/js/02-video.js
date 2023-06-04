import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe');

const player = new Player(video);

console.log(player)

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
};


