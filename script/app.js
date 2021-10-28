let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
});

let state = false;

const switchState = function () {
  let newState = !state;
  if (newState) {
    document.querySelector('.c-play-icon--pause').classList.add('c-play-icon--display');
    document.querySelector('.c-play-icon--play').classList.remove('c-play-icon--display');
    tl.pause();
  } else {
    document.querySelector('.c-play-icon--play').classList.add('c-play-icon--display');
    document.querySelector('.c-play-icon--pause').classList.remove('c-play-icon--display');
    tl.resume();
  }
  state = newState;
};

document.addEventListener('DOMContentLoaded', function () {
  let btnFast = document.querySelector('.js-fast');
  btnFast.onclick = () => tl.timeScale(2);

  let btnSlow = document.querySelector('.js-slow');
  btnSlow.onclick = () => tl.timeScale(0.5);

  let btnNormal = document.querySelector('.js-normal');
  btnNormal.onclick = () => tl.timeScale(1);

  let btnPauze = document.querySelector('.js-pause');
  btnPauze.onclick = () => switchState();

  tl.set('#Shadow', {
    transformOrigin: '50% 100%',
  })
    .fromTo(
      '#Robot',
      {
        y: 2.5,
      },
      {
        y: -2.5,
      }
    )
    .to(
      '#Shadow',
      {
        scale: 0.75,
      },

      '<'
    );
});
