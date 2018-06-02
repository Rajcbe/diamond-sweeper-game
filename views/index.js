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
             'background-diamond-position': '0px',
             'background-repeat': 'no-repeat',
             'background-size': 'contain'
     };

    let imgChangCount=0;
    let randomPositions = [];
    let maxScore;

    function randomNumberCalc() {
        const totalDiamonds  = 8;
        randomPositions.length=0;
        //Generate Random numbers

        for (let index = 0; index < totalDiamonds; index++ ) {
            let position = Math.ceil(Math.random() * 61);
            let tempPosition;
            if (randomPositions.includes(`grid-${position}`)) {
                console.log('prevent repeating numbers');
                continue;
            }
            randomPositions.push(`grid-${position}`);
        }
        if (randomPositions.length !== 8) {
            let length = 8 - randomPositions.length;
            for (let index = 1; index <= length; index++) {
                randomPositions.push(`grid-${61 + index}`);
            }
        }
    }
    function startApp(){
         console.log('load grid..');
         imgChangCount=0;
         maxScore=56;
       randomNumberCalc();
         //display image in grid
         for (let item of container.children){

             item.addEventListener('click', changeImage);
             let grid = item.getAttribute('id');

             if (randomPositions.includes(grid)) {

                 item.style.backgroundImage = `${bgImage['background-diamond-image']},${bgImage['background-que-image']}`;
                 item.style.backgroundPosition = `${bgImage['background-que-position']},${bgImage['background-diamond-position']}`;
                 item.style.backgroundSize = `${bgImage['background-size']}`;
                 item.style.backgroundRepeat = `${bgImage['background-repeat']}`;

             }
             else {
                    item.style.backgroundImage      = `${bgImage['background-que-image']}`;
                    item.style.backgroundPosition   = `center`;
                    item.style.backgroundSize       = `${bgImage['background-size']}`;
                    item.style.backgroundRepeat     = `${bgImage['background-repeat']}`;
                  }

         }
     }

    function changeImage(event) {

        let id = event.target.id;

        let chElement = document.getElementById(id);

        //change position of images on click.
        if (randomPositions.includes(id)) {
            imgChangCount++;
            if (imgChangCount !== 8) {
                chElement.style.backgroundPosition = `${bgImage['background-diamond-position']},${bgImage['background-que-position']}`;
                console.log('changed img');
            }
            else {
                chElement.style.backgroundPosition = `
                    ${bgImage['background-diamond-position']},
                    ${bgImage['background-que-position']}
                `;
                chElement.removeEventListener('click', changeImage);
                calculateScore(maxScore);
                startApp();
                return;
            }
        }
        else {
            maxScore--;
           chElement.style.background='none';
        }
        chElement.removeEventListener('click', changeImage);
    }
    function calculateScore(total) {

        let template = document.getElementById('score-container');
        let score = document.getElementById('current-score');

        template.style.display = 'block';
        score.innerHTML = `Your Score is ${total}`;
    }

    startApp();

})();