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


    let randomPositions = [];

    function startApp(){
         console.log('load grid..');

        const totalGrid    = 64;
        const totalDiamonds  = 8;

        for (let i = 0; i < totalDiamonds; i++ ) {
            let position = Math.floor(Math.random() * 64) + 1;
            randomPositions.push(`box-${position}`);
             }
        console.log(randomPositions);
         //display image in grid
         for (let item of container.children){

             item.addEventListener('click', changeImage);
             let box = item.getAttribute('id');
             item.style.backgroundImage = `${bgImage['background-diamond-image']},${bgImage['background-que-image']}`;
             item.style.backgroundPosition = `${bgImage['background-que-position']},${bgImage['background-diamond-position']}`;
             item.style.backgroundSize = `${bgImage['background-size']}`;
             item.style.backgroundRepeat = `${bgImage['background-repeat']}`;



         }
     }
    function changeImage(event) {
        console.log(event.target.id);
        let id = event.target.id;
        let chElement = document.getElementById(id);
        //change position of images on click.
        chElement.style.backgroundPosition = `${bgImage['background-diamond-position']},${bgImage['background-que-position']}`;
        console.log('changed img');
        chElement.removeEventListener('click', changeImage);
    }
     startApp();
})();