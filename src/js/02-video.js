import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function onTimePlayer(data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).catch(function(error) {
    console.log(error.message);
});

player.on('timeupdate', throttle(onTimePlayer, 1000));