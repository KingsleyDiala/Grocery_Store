

const productContainers = document.querySelectorAll('.bottom__container');
const nextButton = document.getElementsByClassName('.arrow__right');
const prevButton = document.getElementsByClassName('.arrow__left');


productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextButton[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  prevButton[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
  
});