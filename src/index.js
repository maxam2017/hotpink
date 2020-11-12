import wait from './utils/wait';

/**
 * bind animation method on dom element
 */
Element.prototype.bindAnimation = async function (animation, time = 1000) {
  this.style.animation = `${animation} ${time}ms`;
  await wait(time);
  this.style.animation = '';
};

const curtainEl = document.querySelector('#curtain');
const titleEl = document.querySelector('#title');
const ecgEl = document.querySelector('#ecg');

(async () => {
  await curtainEl.bindAnimation('slideInRight');
  curtainEl.style.transform = 'translate3d(0, 0, 0)';

  await ecgEl.bindAnimation('ecg', 1500);

  await curtainEl.bindAnimation('shrink');
  curtainEl.style.transform += ' scaleX(.2)';

  await titleEl.bindAnimation('fadeInBottom');
  titleEl.style.opacity = 1;
})();
