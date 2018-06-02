import css from './style.scss';
import queImg from './images/question.png';
import diamondImg from './images/diamond.png';


(function(){
    'use strict';
     const container = document.getElementsByClassName('box-wrapper')[0];

     const bgImage={
             'background-que-image':  'url(' + queImg + ')',
             'background-diamond-image': 'url(' + diamondImg + ')',
             'background-que-position': '600px',
             'background-diamond-position': '5px',
             'background-repeat': 'no-repeat',
             'background-size': 'contain'
     };
     function startApp(){
         console.log('load grid..');
         for (let item of container.children){
             item.style.backgroundImage = `${bgImage['background-que-image']},{bgImage['background-diamond-image']}`;
             item.style.backgroundPosition = `${bgImage['background-que-position']},{bgImage['background-diamond-position']}`;
             item.style.backgroundSize = `${bgImage['background-size']}`;
             item.style.backgroundRepeat = `${bgImage['background-repeat']}`;

             item.addEventListener('click', changeImage);

         }
     }
    function changeImage(event) {
        console.log(event.target.getAttribute('class'));
        console.log('image clicked');
    }
     startApp();
})();