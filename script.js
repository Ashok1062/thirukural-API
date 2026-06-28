let kNum = document.getElementById("num"),
    fline = document.getElementById("l1"),
    sline = document.getElementById("l2"),
    meaning = document.getElementById("mean"),
    sInput = document.getElementById("input");

let scr1 = document.getElementById("scr1"),
    scr2 = document.getElementById("scr2"),
    str = document.getElementById("str"),
    hand = document.getElementById("hand");


function start(){
    setTimeout(()=>{
        scr1.style = "animation: scr1 3s forwards ease-in-out";
        scr2.style = "animation: scr2 3s forwards ease-in-out";
    },1000)
    str.style = " transform: scale(0);transition:  all 2s ;";
    hand.style = "transform: scale(0);transition:  transform 1s ;";
}   



function apiCall(){
    let ans = "";
    let gNum = Math.floor(Math.random()*1330+1);
    if(sInput.value != ""){
        ans = sInput.value;
    }else{
        ans = gNum;
    }
  let url =  fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${ans}?appid=byq39mpbfnlop&format=JSON`);
  let data = url.then((items)=> items.json());

    data.then((kural) => {
        fline.innerText = kural.line1;
        sline.innerText = kural.line2;
        meaning.innerText = kural.urai3;
        kNum.innerText = ans;
        sInput.value = "";
    })
    .catch((err) => {
        console.log(err);
    })
}
