const list = document.querySelector('.nav-list')
const listItems = document.querySelectorAll('.nav-list__link')
const imageList = document.querySelector('.section-image__container')
const images = document.querySelectorAll('.section-customize__item')

list.addEventListener('click', ({target}) => {
  const isNavLink = target.closest('.nav-list__link')
  if (isNavLink) {
    listItems.forEach(el => el.classList.remove('active'))
    target.classList.add('active')
  }
})

imageList.addEventListener('click', ({target}) => {
  const isImage = target.closest('.section-customize__item')
  if (isImage) {
    images.forEach(el => el.classList.remove('active-image'))
    target.classList.add('active-image')
  }
})