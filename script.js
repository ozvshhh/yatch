//기능구현이 덜 되었다
//빈칸을 누르면 0이 splice되는 버그가 있음
//그 버그를 잡기위해 수정필요script.js를 적었는데
//왜 인지 모르겠 지만 더 꼬여 버렸음
//내일 학교 갔다와서 다시 해봐야겠음

/*
#2022 09 02
기능 구현은 거의 마쳤으며
해커와 화가 책을 읽고 추상화에 대해 배운 이후
내 코드를 추상적(깔끔하게 보이도록)으로 쓰려고 노력했다.
.html 메소드를 이용해 html 파일을 제어했기에
따옴표가 많이 필요해 ${}를 이용해 추상화를 하지 못했지만
디스코드를 통한 질문으로 .attr이라는 메소드를 이용하면 깔끔하게 사용할 수 있음을 알게됨

.attr이라는 메소드를 적극 활용해 추상화를 거의 성공 시켰으며
지금은 처음 주사위를 클릭할 때 2번 클릭해야 작동한다는 작은 문제점이 있음
다음번에 코딩을 할 때 이 문제를 해결하길 바람.

알게된 점: `${}`으로 recall 할 때 string 형식으로 받아지는 듯
그래서 Number(${});을 사용하면 nuber로 사용할 수 있는 듯
*/

/*
2022 09 03
처음 주사위를 클릭 할 때 2번 클릭해야 하는 문제를 고침
주사위 클릭을 시행할 수록 로그가 2배씩 늘어서 나왔는데
.html을 사용해서 div안에 div를 계속 추가하던 치명적 문제를
.attr을 사용해 고쳤으나
아직 덜 고쳐진 일부 코드들이 일으키는 문제 때문에 나타난 현상였음
DiceTable 추상화는 끝났으니
PointTable 추상화 끝내고
점수 계산하는 프로그램 설계하면 끝날듯

09 03 오후
PointTable도 추상화 끝냄 중간에 띄어쓰기 하나땜에 오류나서 찾는다고 애먹음
이제 점수 계산하는 프로그램 12시까지 설계하면 될듯
근데 이게 좀 빡세서 머리 잘 써야할 듯

09 10 오전
족보 계산 하기위해서 표를 제작함
몇일 썼는데 오늘 기여코 완성했네
css 제대로 몰라서 귀찮고 어렵다고 생각했는데
드림코딩 css강의 한편 보고 나니깐 개념 정리되서 생각보다 쉬웠음
테이블 금방 완성함 이제 코드 완성하면 됨
주사위 테이블을 내가 존나 대충만들어서 그거 나중에 수정해야할듯.
css가 귀찮은게 아니라 내가 똑바로 안배워서 몰라서 어려웠던 것 간간히 강의 열심히 들어야겠음.

09 10 오후
테이블 만들었으니 스크립트 만들 차례
만들기전 구조를 글로 적어 주석으로 남김
이제 대충 만들면 될듯
객체지향적 사고를 갖고 만들어보자.

배열방식
제출 버튼을 클릭했을 때
PointTable에 있는 값들을 검사한다.
1~6까지의 주사위 값들이 몇개씩 있는지 조사하고
[0,1,2,3,4,5]의 배열에 집어넣는다.
만약 기본 족보를 눌렀다면
ex) aces를 눌렀다면 1 * 1의 갯수
이런 식으로 해주면 된다.
근데 여기서 핵심은 족보의 이름이 string 형식이라
단순한 for 반복이 아닌 진짜 class선언으로 진행해야함.
만약 복잡한 족보를 눌렀다면
ex)fullhouse를 눌렀다면
3값이 있는지 검색한다
2값이 있는지 검색한다
둘다 참이라면 fullhouse점수를 준다.
특이 족보들은 돌아가는 매커니즘이 달라서 따로 만들어주어야한다.
물론 그 안에서도 겹치는 부분들은 단순화를 해줄 예정이다.
자 그럼 코딩을 시작하기 전에 변수저장 방식도 생각해보자
변수 6개를 선언한다 주사위 값을 수를 세기위한 역할이다
변수 6개의 어쩌구 저쩌구 ... 그냥 배열이 더 편할 것 같구만
배열의 장점을 알았다. 변수이름을 고민 할 필요가 없음

`시발 while문은 도저히 못쓰겠다 자꾸 무한반복 걸리네 야발`
while 제대로 썻다 기모찌 숫자 세기 성공 이제 단순화 시키면 됨.
왜인지 모르겠지만 점수 검사 프로그램은 생각보다 복잡하다
내가 한번에 만들려고 해서 그런 것 일지도
일단 대충 흘겨쓰고 구체화 해야겠다

09 11
흘겨쓰기 성공했다.
이제 갯수 셀 수 있다 기모찌
(앞으로 해야할 것)
족보에 따라 점수를 세는 코드를 제작해야함.
class를 선언하고 버튼 이름을 입력받으면
코드를 실행시켜주는 방식으로 객체지향적 코드를 짜봐야겠음.

 */


let DiceTable = [1,1,1,1,1];
let PointTable = [0,0,0,0,0];
let CountTable = [0,0,0,0,0,0];
let Turn = false;



/**
 * 두 정수를 입력하면, 두 정수와 그 사이에 있는 정수 중 하나를 랜덤으로 출력하는 함수
 * @param {number} min 두 정수 중 최솟값
 * @param {number} max 두 정수 중 최댓값 
 **/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  };


let DICE = {
    /** 1~6 사이의 정수(n)를 입력하면, n번째 주사위를 클릭했을 때, DiceTable에 있는 n번째 주사위를 PointTable로 옮기는 함수
     * @param {string} dice_number_String 선택할 주사위의 번호 1~5 사이 값만 입력 */
    dicetable_click: function(dice_number_String) {

        $(`.dice${dice_number_String}`).click(function(){
            let dice_number_Number = Number(`${dice_number_String}`);

            if(DiceTable[dice_number_Number - 1] === 0){console.log(`dice is empty`)}
            else for(let i = 1; i <= 6; i++){
                if(DiceTable[dice_number_Number - 1] === i){$(`.dice${dice_number_String}${dice_number_String}_img`).attr("src", `img/dice${i}.png`);}}
        
            if(DiceTable[dice_number_Number - 1] === 0){console.log(`dice${dice_number_String}_empty`)}
            else{
            let swaper = [];
            swaper = DiceTable.splice(dice_number_Number - 1,1,0);
            PointTable.splice(dice_number_Number - 1,1,swaper[0]);}
            $(`.dice${dice_number_String}_img`).attr("src", `img/dice0.png`); console.log(`ok`);
            console.log(`dice${dice_number_String} Dice Table:`,DiceTable);
            console.log(`dice${dice_number_String} Point Table:`,PointTable);
        });

    },

    /** 1~6 사이의 정수(n)를 입력하면, PointTable에 있는 n번째 주사위를 DiceTable로 옮기는 함수
     * @param {string} dice_number_String 선택할 주사위의 번호 1~5 사이 값만 입력*/
    pointtable_click: function(dice_number_String) {

        $(`.dice${dice_number_String}${dice_number_String}`).click(function(){
            let dice_number_Number = Number(`${dice_number_String}`);

            if(PointTable[dice_number_Number - 1] === 0){console.log(`dice is empty`)}
            else for(let i = 1; i <= 6; i++){
                if(PointTable[dice_number_Number - 1] === i){$(`.dice${dice_number_String}_img`).attr("src", `img/dice${i}.png`);}}
                
        
            if(PointTable[dice_number_Number - 1] === 0){console.log(`dice${dice_number_String}${dice_number_String}_empty`)}
            else{
            let swaper = [];
            swaper = PointTable.splice(dice_number_Number - 1,1,0);
            DiceTable.splice(dice_number_Number - 1,1,swaper[0]);}
            $(`.dice${dice_number_String}${dice_number_String}_img`).attr("src", `img/dice0.png`); console.log(`ok`);
            console.log(`dice${dice_number_String}${dice_number_String} Dice Table:`,DiceTable);
            console.log(`dice${dice_number_String}${dice_number_String} Point Table:`,PointTable);
        });

    },
    /** place에 족보를 입력하고, place_number에 족보에 맞는 숫자를 입력하면 점수표의 족보를 클릭했을 때 그 값을 계산해 점수표에 표시해주는 함수 
     @param {string} place 족보이름 ex)p1aces 
     @param {number} place_number 족보에 해당하는 숫자 aces는 1을 주면 됨 ex)1
     */

    BasicNumberCalculator: function(place,place_number){
        $(`.${place}`).click(function(){
            if(Turn === false){
                let DIcePoint = CountTable[place_number-1] * place_number;
                console.log(DIcePoint);
                $(`.${place}`).text(`${DIcePoint}`);
            }
        })
        
    }
}



$(`.RollButton`).click(function(){
    for (let i=0; i <= 4; i++){
        if (DiceTable[i] !== 0){DiceTable.splice(i,1,getRandomIntInclusive(1,6));}
        else{console.log(i+1,"번째 주사위 값은",DiceTable[i],"입니다.")};};
    

    
    for(let j=0; j<=4; j++){
        if (DiceTable[j] === 0) {console.log(j+1,"번째 주사위는 없습니다")}
        else for(let k = 1; k <= 6; k++){
            if(DiceTable[j] === k) {$(`.dice${j+1}_img`).attr("src", `img/dice${k}.png`);}
        }   
    }
    console.log(`sexroll`);
});

DICE.dicetable_click(1);
DICE.dicetable_click(2);
DICE.dicetable_click(3);
DICE.dicetable_click(4);
DICE.dicetable_click(5);

DICE.pointtable_click(1);
DICE.pointtable_click(2);
DICE.pointtable_click(3);
DICE.pointtable_click(4);
DICE.pointtable_click(5);

/*

*/

$('.admit').click(function(){
    for(let i = 1; i <=6; i++){
        let k = 0;
        while(PointTable.indexOf(i) !== -1){
            console.log(PointTable.indexOf(i));
            PointTable.splice(PointTable.indexOf(i),1,0);
            k++;
        }
        CountTable.splice(i - 1,1,k);
        k = 0
    }
    Turn = false;
    console.log(CountTable);
});


DICE.BasicNumberCalculator(`p1aces`,1);
DICE.BasicNumberCalculator(`p2aces`,1);
DICE.BasicNumberCalculator(`p1deuces`,2);
DICE.BasicNumberCalculator(`p2deuces`,2);
DICE.BasicNumberCalculator(`p1threes`,3);
DICE.BasicNumberCalculator(`p2threes`,3);
DICE.BasicNumberCalculator(`p1fours`,4);
DICE.BasicNumberCalculator(`p2fours`,4);
DICE.BasicNumberCalculator(`p1fives`,5);
DICE.BasicNumberCalculator(`p2fives`,5);
DICE.BasicNumberCalculator(`p1sixes`,6);
DICE.BasicNumberCalculator(`p2sixes`,6);
