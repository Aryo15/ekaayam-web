/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
  const header = document.getElementById('header')
  //When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  window.scrollY >=50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  //When the scroll is greater than 350 viewport height, add the show-scroll class to the scroll-up tag
  window.scrollY >= 350 ?  scrollUp.classList.add('show-scroll')
                                           : scrollUp.classList.remove('show-scroll')                      
}
window.addEventListener('scroll', scrollUp)
