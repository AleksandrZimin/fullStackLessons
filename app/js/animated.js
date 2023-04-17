const yablockButton = document.querySelector(".ya-title");
const itblockButton = document.querySelector(".it-title");
const gbblockButton = document.querySelector(".gb-title");

const yaHideBlock = document.querySelector(".ya-learning");
const itHideBlock = document.querySelector(".it-learning");
const gbHideBlock = document.querySelector(".gb-learning");

const hideBlock = function (nameBlock, nameTitle) {
   nameBlock.classList.add('close-open');
   nameTitle.setAttribute('title', 'Нажмите, чтобы развернуть');
}

const openBlock = function (nameBlock, nameTitle) {
   nameBlock.classList.remove('close-open');
   nameTitle.setAttribute('title', 'Нажмите, чтобы свернуть');
}

yablockButton.addEventListener('click', (event) => {
   if (yaHideBlock.classList.contains('close-open')) {
      openBlock(yaHideBlock, yablockButton);
   } else {
      hideBlock(yaHideBlock, yablockButton);
   }
});

itblockButton.addEventListener('click', (event) => {
   if (itHideBlock.classList.contains('close-open')) {
      openBlock(itHideBlock, itblockButton);
   } else {
      hideBlock(itHideBlock, itblockButton);
   }
});

gbblockButton.addEventListener('click', (event) => {
   if (gbHideBlock.classList.contains('close-open')) {
      openBlock(gbHideBlock, gbblockButton);
   } else {
      hideBlock(gbHideBlock, gbblockButton);
   }
});
