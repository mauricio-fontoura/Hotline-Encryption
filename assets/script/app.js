'use strict'
let l = new Function('mensage', 'console.log(mensage)');
//-------------------------------------------------------------------

let $inputText = document.getElementById('input-text');
let $notFound = document.getElementById('page-not-found');
let $pageDecoder = document.getElementById('page-decoder');
let $writeDecoder = document.getElementById('write-encryption');
const $btnCopy = document.getElementById('button-copy');
const $btnEraseText = document.getElementById('erase-text-btn');
//-------------------------------------------------------------------
ShowButtonErase();
CharacterPattern();

function ShowDecoderPage() {  
        if ($inputText.value === '') {
            $pageDecoder.classList.remove('selection');
            $notFound.classList.add('selection');
        } else {
            $pageDecoder.classList.add('selection');
            $notFound.classList.remove('selection');
        }
}

function EnableEncryption() { 
    if ($inputText.value === "") {

    } else {
        ChangeLetters();
        ShowDecoderPage();
         $inputText.value = "";   
    }
}

function DisableEncryption() {

    if ( $inputText.value === "") {

    } else {
        StandardLetters();
        ShowDecoderPage();
        $inputText.value = ""; 
    }
}

function  ChangeLetters (letter) {
    letter = $inputText.value
    $writeDecoder.value = letter.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/ /g, "cq"); 

    return $writeDecoder.value
}

function StandardLetters (letter) {
    letter = $inputText.value;
    $writeDecoder.value = letter.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u").replace(/cq/g, " ");
}

function CopyText() {
    navigator.clipboard.writeText($writeDecoder.value);
    $btnCopy.innerHTML = "Texto copiado";
    setTimeout(() => {
        $btnCopy.innerHTML = "Copiar";
        $btnCopy.style.color = "black";
    }, 2000)
}

function ShowButtonErase() {
    addEventListener('input', ()=> {
        if ($inputText.value === "") {
            EraseInputText();
        } else {
            $btnEraseText.style.opacity = 1;
        }
    })
}

function EraseInputText() {

    $inputText.value = "";
    $btnEraseText.style.opacity = 0;
    
}

function CharacterPattern() {

    addEventListener('keypress', function(active) {
        if (RestrictChar(active)) {
            active.preventDefault();
        }
    })
}

function RestrictChar(charCode) {
    let $char = charCode.key;
    let $pattenChar = new RegExp('[^a-z ]+$');
    if ($pattenChar.test($char)){   
        return true;
    }
}
