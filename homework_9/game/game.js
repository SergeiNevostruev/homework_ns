const app = document.querySelector(".app");
let playCarg1 = null;
let playCarg2 = null;
let count = 0;

let arrPlay = [1,2,4,6,8,8,2,3,6,5,4,7,1,3,7,5].sort(function(){ return 0.5-Math.random() });

// let arrPlay = [1,2,4,6,8,8,2,3,6,5,4,7,1,3,7,5];

const field = document.createElement('div');
field.classList.add('field');
app.append(field);

const card = document.createElement('div');
card.classList.add('card');

for (let i=0; i<16; i++) {
    field.append(card.cloneNode());
}

const cards = document.querySelectorAll(".card");

for (let i=0; i<16; i++) {
    cards[i].outerHTML = `<div class="card" data-id="${i}" onclick="comparison()"><span>${arrPlay[i]}</span></div>`;
}


function comparison() {

    if (playCarg2=== null) {
        event.target.classList.add('vision');

    if (playCarg1 === null) {
        count++;
        playCarg1 = event.target.getAttribute('data-id');
            console.log(playCarg1);

    } else {

        playCarg2 = event.target.getAttribute('data-id');
        console.log(playCarg2);

        if (arrPlay[playCarg1] === arrPlay[playCarg2] && playCarg1 !== playCarg2) {
            setTimeout(function(){
            field.querySelector(`[data-id="${playCarg1}"]`).remove();
            field.querySelector(`[data-id="${playCarg2}"]`).remove();
            
            if (!field.hasChildNodes()) {
                let winText = document.createElement('h1');
                winText.classList.add('winText');
                winText.textContent = `Игра завершена за ${count} ходов`;
                field.append(winText);
                field.classList.add('ds-blk');
            }
            
        }, 2000)

        } else {
            setTimeout(function(){
            field.querySelector(`[data-id="${playCarg1}"]`).classList.remove('vision');
            field.querySelector(`[data-id="${playCarg2}"]`).classList.remove('vision');                
            }, 2000)
  
        }
        setTimeout(function(){
        playCarg1 = null;
        playCarg2 = null;
    }, 3000)
    }
}

}


