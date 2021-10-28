import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

function onTimePlayer(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).catch(function (error) {
  console.log(error);
});        

player.on('timeupdate', throttle(onTimePlayer, 1000));