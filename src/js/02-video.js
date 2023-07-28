import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_KEY = "videoplayer-current-time";
player.on('timeupdate', throttle((data) => { localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds)) }, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)));