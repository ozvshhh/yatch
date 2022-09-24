
let DiceTable = [1,1,1,1,1];
let PointTable = [0,0,0,0,0];
let ZeroFinder = [];


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  };




$(`.RollButton`).click(function(){
    for (let i=0; i<6; i++){
        if (DiceTable[i] !== 0){DiceTable.splice(i,1,getRandomIntInclusive(1,6));}
        else{console.log(i+1,"번째 주사위 값은",DiceTable[i],"입니다.")};};
    

    
    for(let j=0; j<=4; j++){
        if (DiceTable[j] === 0) {console.log(j+1,"번째 주사위는 없습니다")}
        else for(let k = 1; k <= 6; k++){
            if(DiceTable[j] === k) {$(`.dice${j+1}`).html(`<div class="dice${j+1}"><img width="100px" height="100px" src="img/dice${k}.png" alt=""></div>`);}
        }
    }
});



$(`.dice1`).click(function(){

    if(DiceTable[0] === 0){alert(`dice is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(DiceTable[0] === i){$(".dice11").html(`<div class="dice11"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};

    if(PointTable[0] === 0){}
    else{    
    let swaper = [];
    swaper = DiceTable.splice(0,1,0);
    PointTable.splice(0,1,swaper[0]);}
    $(`.dice1`).html(`<div class="dice1"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice1 Dice Table:`,DiceTable);
    console.log(`dice1 Point Table:`,PointTable);
});

$(`.dice2`).click(function(){

    if(DiceTable[1] === 0){alert(`dice is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(DiceTable[1] === i){$(".dice22").html(`<div class="dice22"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};
    
    if(PointTable[1] === 0){}
    else{    
    let swaper = [];
    swaper = DiceTable.splice(1,1,0);
    PointTable.splice(1,1,swaper[0]);}
    $(`.dice2`).html(`<div class="dice2"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice2 Dice Table:`,DiceTable);
    console.log(`dice2 Point Table:`,PointTable);
});

$(`.dice3`).click(function(){

    if(DiceTable[2] === 0){alert(`dice is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(DiceTable[2] === i){$(".dice33").html(`<div class="dice33"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};

    if(PointTable[2] === 0){}
    else{
    let swaper = [];
    swaper = DiceTable.splice(2,1,0);
    PointTable.splice(2,1,swaper[0]);}
    $(`.dice3`).html(`<div class="dice3"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice3 Dice Table:`,DiceTable);
    console.log(`dice3 Point Table:`,PointTable);
});

$(`.dice4`).click(function(){


    if(DiceTable[3] === 0){alert(`dice is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(DiceTable[3] === i){$(".dice44").html(`<div class="dice44"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};

    if(PointTable[3] === 0){}
    else{
    let swaper = [];
    swaper = DiceTable.splice(3,1,0);
    PointTable.splice(3,1,swaper[0]);}
    $(`.dice4`).html(`<div class="dice4"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice4 Dice Table:`,DiceTable);
    console.log(`dice4 Point Table:`,PointTable);
});

$(`.dice5`).click(function(){

    if(DiceTable[4] === 0){alert(`dice is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(DiceTable[4] === i){$(".dice55").html(`<div class="dice55"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};
    
    if(PointTable[4] === 0){}
    else{
    let swaper = [];
    swaper = DiceTable.splice(4,1,0);
    PointTable.splice(4,1,swaper);}
    $(`.dice5`).html(`<div class="dice5"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice5 Dice Table:`,DiceTable);
    console.log(`dice5 Point Table:`,PointTable);
});

$(`.dice11`).click(function(){

    if(PointTable[0] === 0){alert(`dice11 is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(PointTable[0] === i){$(".dice1").html(`<div class="dice1"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};
    
    if(PointTable[0] === 0){}
    else{
    let swaper =[];
    swaper = PointTable.splice(0,1,0);
    DiceTable.splice(0,1,swaper[0]);}
    $(`.dice11`).html(`<div class="dice11"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice11 Dice Table:`,DiceTable);
    console.log(`dice11 Point Table:`,PointTable);
});

$(`.dice22`).click(function(){

    if(PointTable[1] === 0){alert(`dice22 is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(PointTable[1] === i){$(".dice2").html(`<div class="dice2"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};

    if(PointTable[1] === 0){}
    else{
    let swaper =[];
    swaper = PointTable.splice(1,1,0);
    DiceTable.splice(1,1,swaper[0]);}
    $(`.dice22`).html(`<div class="dice22"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice22 Dice Table:`,DiceTable);
    console.log(`dice22 Point Table:`,PointTable);
});

$(`.dice33`).click(function(){

    if(PointTable[2] === 0){alert(`dice33 is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(PointTable[2] === i){$(".dice3").html(`<div class="dice3"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};

    if(PointTable[2] === 0){}
    else{
    let swaper =[];
    swaper = PointTable.splice(2,1,0);
    DiceTable.splice(2,1,swaper[0]);}
    $(`.dice33`).html(`<div class="dice33"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice33 Dice Table:`,DiceTable);
    console.log(`dice33 Point Table:`,PointTable);
});

$(`.dice44`).click(function(){

    if(PointTable[3] === 0){alert(`dice44 is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(PointTable[3] === i){$(".dice4").html(`<div class="dice4"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};

    if(PointTable[3] === 0){}
    else{
    let swaper =[];
    swaper = PointTable.splice(3,1,0);
    DiceTable.splice(3,1,swaper[0]);}
    $(`.dice44`).html(`<div class="dice44"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice44 Dice Table:`,DiceTable);
    console.log(`dice44 Point Table:`,PointTable);
});

$(`.dice55`).click(function(){

    if(PointTable[4] === 0){alert(`dice55 is empty`)}
    else for(let i = 1; i <= 6; i++){
        if(PointTable[4] === i){$(".dice5").html(`<div class="dice5"><img width="100px" height="100px" src="img/dice${i}.png" alt=""></div>`)}};

    if(PointTable[4] === 0){}
    else{
    let swaper =[];
    swaper = PointTable.splice(4,1,0);
    DiceTable.splice(4,1,swaper[0]);}
    $(`.dice55`).html(`<div class="dice55"><img width="100px" height="100px" src="img/dice0.png" alt=""></div>`);
    console.log(`dice55 Dice Table:`,DiceTable);
    console.log(`dice55 Point Table:`,PointTable);
});




