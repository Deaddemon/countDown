// Learn:
// • querySelector()
// • addEventListener()
// • onclick
// • classList.contains()
// • classList.add()
// • For loops
// • Arrow functions
document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
      name: 'apple',
      img: 'images/apple.jpg'
    },
    {
      name: 'avocado',
      img: 'images/avocado.jpg'
    },
    {
      name: 'basket',
      img: 'images/basket.png'
    },
    
    {
      name: 'orange',
      img: 'images/orange.png'
    },
    {
      name: 'pear',
      img: 'images/pear.png'
    },
    {
      name: 'pineapple',
      img: 'images/pineappple.png'
    },
    {
        name: 'apple',
        img: 'images/apple.jpg'
      },
      {
        name: 'avocado',
        img: 'images/avocado.jpg'
      },
      {
        name: 'basket',
        img: 'images/basket.png'
      },
      
      {
        name: 'orange',
        img: 'images/orange.png'
      },
      {
        name: 'pear',
        img: 'images/pear.png'
      },
      {
        name: 'pineapple',
        img: 'images/pineappple.png'
      }
     
  ]
 
console.log('hey');
  const grid = document.querySelector('.grid')
  

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/black.jpg')
      card.setAttribute('data-id', i)
       
      grid.appendChild(card)
    } }
}