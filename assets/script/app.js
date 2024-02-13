'use strict'
let l = new Function ('mensage','console.log(mensage)');
//-------------------------------------------------------------------

Headers['Variables']

let $inputText =  document.getElementById('input-text');
let $notFound = document.getElementById('page-not-found'); 
let $pageDecoder = document.getElementById('page-decoder');
let $writeDecoder = document.getElementById('write-encryption');
let $btnCopy = document.getElementById('button-copy');

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


function EnableEncryption() {
   
    let $cryptografic = $inputText.value;

    $writeDecoder.innerHTML = $cryptografic.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat").replace(/ /g,"");
    
  l($cryptografic)

}

function DisableEncryption() {

    let $cryptografic = $inputText.value;

    $writeDecoder.innerHTML = $cryptografic.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    
}

function CopyText() {
    $writeDecoder.select()
    $writeDecoder.setSelectionRange(0, 99999);
    navigator.clipboard.writeText($writeDecoder.value);
    $btnCopy.innerHTML = "Texto copiado"
    $btnCopy.style.color="crimson";
    setTimeout(()=> {
    $btnCopy.innerHTML = "Copiar";
    $btnCopy.style.color="black";
    },2000)
}


// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

