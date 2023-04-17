const yablockButton = document.querySelector(".ya-title");
const itblockButton = document.querySelector(".it-title");
const gbblockButton = document.querySelector(".gb-title");

const yaHideBlock = document.querySelector(".ya-learning");
const itHideBlock = document.querySelector(".it-learning");
const gbHideBlock = document.querySelector(".gb-learning");

const arrowRotate = document.querySelector(".arrow");
const yaArrowRotate = document.querySelector(".ya-arrow");
const itArrowRotate = document.querySelector(".it-arrow");
const gbArrowRotate = document.querySelector(".gb-arrow");

const hideBlock = function (nameBlock, nameTitle, nameArrow) {
   nameBlock.classList.add('close-open');
   nameTitle.setAttribute('title', 'Нажмите, чтобы развернуть');
   nameArrow.classList.add('arror-rotate');
}

const openBlock = function (nameBlock, nameTitle, nameArrow) {
   nameBlock.classList.remove('close-open');
   nameTitle.setAttribute('title', 'Нажмите, чтобы свернуть');
   nameArrow.classList.remove('arror-rotate');
}

yablockButton.addEventListener('click', (event) => {
   if (yaHideBlock.classList.contains('close-open')) {
      openBlock(yaHideBlock, yablockButton, yaArrowRotate);
   } else {
      hideBlock(yaHideBlock, yablockButton, yaArrowRotate);
   }
});

itblockButton.addEventListener('click', (event) => {
   if (itHideBlock.classList.contains('close-open')) {
      openBlock(itHideBlock, itblockButton, itArrowRotate);
   } else {
      hideBlock(itHideBlock, itblockButton, itArrowRotate);
   }
});

gbblockButton.addEventListener('click', (event) => {
   if (gbHideBlock.classList.contains('close-open')) {
      openBlock(gbHideBlock, gbblockButton, gbArrowRotate);
   } else {
      hideBlock(gbHideBlock, gbblockButton, gbArrowRotate);
   }
});