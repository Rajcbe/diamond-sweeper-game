import css from './style.scss';
import png from './images/question.png';


(function(){
    'use strict';
     const container = document.getElementsByClassName('box-wrapper')[0];

     const bgImage={
             'background-image':  'url(' + png + ')',
             'background-position': 'center',
             'background-repeat': 'no-repeat',
             'background-size': 'contain'
     };
     function startApp(){
         console.log('load grid..');
         for (let item of container.children){
             item.style.backgroundImage = `${bgImage['background-image']}`;
             item.style.backgroundPosition = `${bgImage['background-position']}`;
             item.style.backgroundSize = `${bgImage['background-size']}`;
             item.style.backgroundRepeat = `${bgImage['background-repeat']}`;
         }
     }
     startApp();
})();