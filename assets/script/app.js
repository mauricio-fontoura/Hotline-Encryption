'use strict'
let l = new Function ('mensage','console.log(mensage)');
//-------------------------------------------------------------------

Headers['Variables']

let $inputText =  document.getElementById('input-text');
let $notFound = document.getElementById('page-not-found'); 
let $pageDecoder = document.getElementById('page-decoder');
let $writeDecoder = document.getElementById('write-encryption');
let $wordCrypt = ['enter','imes','ai','ober','ufer'];
let $ramdon = parseInt(Math.random()*4);
//-------------------------------------------------------------------

function teste () {
    addEventListener('input', ()=> {
        
        if ($inputText.value === '') {
            $pageDecoder.classList.remove('selection');
            $notFound.classList.add('selection');
        } else {
            $pageDecoder.classList.add('selection');
            $notFound.classList.remove('selection');
        }
    })
}
teste();

function WriteDecoder () {
    addEventListener('input', ()=> {
        $writeDecoder.innerHTML = $inputText.value;
       
    })
}
WriteDecoder();


function MakeCryptografic() {
    
    let $cryptografic = $inputText.value;

    $writeDecoder.innerHTML = $cryptografic.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    
  l($cryptografic)

}

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"