console.log("welcome to tic tac toe");
let turn= "x"
const changeTurn = () =>{
    return turn ==="x"? "0" :"x"
}

const checkWin =()=>{
    let spantext = document.getElementsByClassName('spantext');
    let wins
    [
        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]
    ]
    wins.forEach(e => 
        {
             if((spantext[e[0]].innerHTML === spantext[e[1]].innerHTML ) && (spantext[e[1].innerHTML] === spantext[e[2]].innerHTML === spantext[e[1]].innerHTML ) && (spantext [e[0]] !==" ")) { "won"}
        })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
    let spantext =Element.querySelector('spantext');
    Element.addEventListener('click',() =>{
        if(spantext.innerHTML ==='  '){
            spantext.innerHTML = turn ();
            turn = changeTurn();
            checkWin();
        }
    })
})