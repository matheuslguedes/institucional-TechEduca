const _elementsHome = {
    navbar: document.querySelector('.navbar'),
    menuHamburguer: document.querySelector('.fa-bars'),

}
_elementsHome.menuHamburguer.addEventListener('click', () =>{
   _elementsHome.navbar.classList.toggle('shownavbar')
   if(_elementsHome.menuHamburguer.classList.contains('fa-bars')){
     _elementsHome.menuHamburguer.classList.replace('fa-bars', 'fa-times')
     document.querySelector('.fa-times').style.color = 'white'
   } else {
    _elementsHome.menuHamburguer.classList.replace('fa-times', 'fa-bars')
  _elementsHome.menuHamburguer.style.color = 'rgb(21, 21, 100)'
   }
})