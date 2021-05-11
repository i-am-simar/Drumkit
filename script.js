const url = 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/';
const sounds = {
  boom: `${url}/boom.wav`,
  clap: `${url}/clap.wav`,
  hihat: `${url}/hihat.wav`,
  kick: `${url}/kick.wav`,
  openhat: `${url}/openhat.wav`,
  ride: `${url}/ride.wav`,
  snare: `${url}/snare.wav`,
  tink: `${url}/tink.wav`,
  tom: `${url}/tom.wav` };


const createAudioElem = sound => {
  let audio = document.createElement('audio');
  audio.src = sounds[sound];
  return audio;
};

class Drumkit {
  constructor(className) {
    this.drums = document.getElementsByClassName(className)[0].children;
    for (let sound in sounds) this[sound] = createAudioElem(sound);
    for (let i = 0; i < this.drums.length; i++) {
      let elem = this.drums[i];
      let { drum, key } = elem.dataset;

      document.addEventListener('keypress', e => {
        if (e.key === key) this.playSound(drum, elem);
      });

      this.drums[i].addEventListener('click', e => {
        this.playSound(drum, elem);
      });

    }
  }

  playSound(sound, elem) {
    this[sound].currentTime = 0;
    this[sound].play();

    elem.classList.add('drum-kit__drum--active');
    setTimeout(() => elem.classList.remove('drum-kit__drum--active'), 50);
  }}


const drumkit = new Drumkit('drum-kit');