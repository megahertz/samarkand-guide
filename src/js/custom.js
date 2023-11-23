'use strict';

/* eslint-env browser */

document.addEventListener('DOMContentLoaded', () =>
  setTimeout(initialize, 100),
);

function initialize() {
  const $navBar = document.querySelector('.navbar--fixed-top');

  const $btnNext = document.getElementById('next-img');
  const $btnPrev = document.getElementById('prev-img');
  const $btnScaleMinus = document.getElementById('scale-minus');
  const $btnScalePlus = document.getElementById('scale-plus');
  const $btnWhiteMinus = document.getElementById('white-minus');
  const $btnWhitePlus = document.getElementById('white-plus');

  const $navBarItems = document.querySelector('.navbar__items');
  const $metrics = document.createElement('div');
  $metrics.style.fontSize = '65%';
  $navBarItems.append($metrics);

  let imageIndex = 0;
  const images = [
    { url: '/img/index-pattern.png', scale: 270, white: 0 },
    { url: '/img/index-pattern2.png', scale: 100, white: 0 },
  ];

  $btnPrev.addEventListener('click', () => changeImage(-1));
  $btnNext.addEventListener('click', () => changeImage(1));
  $btnScaleMinus.addEventListener('click', () => changeScale(-1));
  $btnScalePlus.addEventListener('click', () => changeScale(1));
  $btnWhiteMinus.addEventListener('click', () => changeWhite(-1));
  $btnWhitePlus.addEventListener('click', () => changeWhite(1));

  function changeImage(diff = 1) {
    let newIndex = imageIndex + diff;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex > images.length - 1) {
      newIndex = 0;
    }

    imageIndex = newIndex;
    render();
  }

  function changeScale(diff = 1) {
    const currentScale = images[imageIndex].scale;
    images[imageIndex].scale += diff * currentScale * 0.05;
    render();
  }

  function changeWhite(diff = 1) {
    let newWhite = images[imageIndex].white + diff;
    if (newWhite < 0) {
      newWhite = 15;
    } else if (newWhite > 15) {
      newWhite = 0;
    }

    images[imageIndex].white = newWhite;
    render();
  }

  function render() {
    const image = images[imageIndex];

    $navBar.style.background = `url(${image.url})`;
    $navBar.style.backgroundSize = `auto ${image.scale}%`;
    $navBar.style.boxShadow = `inset 0 0 0 1000px rgba(255,255,255,${
      image.white / 15
    })`;

    const imgName = image.url.split('/').pop();
    $metrics.textContent = `${imgName}, ${image.scale}%, ${image.white}`;
  }
}
