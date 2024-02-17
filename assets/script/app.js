'use strict'
let l = new Function('mensage', 'console.log(mensage)');
//-------------------------------------------------------------------

Headers['Variables']

let $inputText = document.getElementById('input-text');
let $notFound = document.getElementById('page-not-found');
let $pageDecoder = document.getElementById('page-decoder');
let $writeDecoder = document.getElementById('write-encryption');
let $btnCopy = document.getElementById('button-copy');
let $btnEraseText = document.getElementById('erase-text-btn');
//-------------------------------------------------------------------
ShowButtonErase();

function ShowDecoderPage() {
   
        if ($inputText.value === '') {
            $pageDecoder.classList.remove('selection');
            $notFound.classList.add('selection');
        } else {
            $pageDecoder.classList.add('selection');
            $notFound.classList.remove('selection');
        }
}

function WriteDecoder() {
        $writeDecoder.value = $inputText.value;
}

function EnableEncryption() {
        if ($inputText.value === ""){
            $inputText.attributes.item("disabled");
        } else {
            ShowDecoderPage();
            WriteDecoder();
            let $cryptografic = $inputText.value;
            $writeDecoder.value = $cryptografic.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/ /g, "ç");
        }
}

function DisableEncryption() {

    let $cryptografic = $inputText.value;
    $writeDecoder.value = $cryptografic.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u").replace(/ç/g, " ");

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
// function DeleteCapitalLetter() {
//     let $patten = /[A-Z,0-9]/g ;

//     if ($patten.test($inputText.value)) {
      

//     } else {
//         l("não funcionou");
//     }
// }

