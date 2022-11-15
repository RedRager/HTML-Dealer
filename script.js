const redCards =   ["🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃍","🃎",
                    "🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂽","🂾",];

const blackCards = ["🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃝","🃞",
                    "🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂭","🂮",];

var cardsByIds = [];
cardsByIds = cardsByIds.concat(redCards, blackCards);

var ul = document.getElementById("listOfCards");

function newCards(){
    let listOfCards = [];
    let randomNumberArray = [];
    var y = 0;
    
    document.getElementById('listOfCards').innerHTML = '';
    
    for(var i = 0; i < 13; i++){
        randomNumber = Math.floor(Math.random()*52);
        if (!randomNumberArray.includes(randomNumber)){
            randomNumberArray.push(randomNumber);
        } else {
            i--;
        };
    };
    
    randomNumberArray.sort((a,b) => a-b);
    
    for (number of randomNumberArray) {
        listOfCards.push(cardsByIds[number]);
    };

    for (card of listOfCards) {
        let li = document.createElement('li');
        li.innerText = listOfCards[y];
        if (blackCards.includes(card)) {
            li.classList = 'black';
        } else if (redCards.includes(card)) {
            li.classList = 'red';
        } else {
            li.classList = 'error';
        };
        ul.appendChild(li);
        y++
    };
}