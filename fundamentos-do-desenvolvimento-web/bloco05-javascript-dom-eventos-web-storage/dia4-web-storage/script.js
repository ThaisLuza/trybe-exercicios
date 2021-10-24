let botao = document.querySelector('.botao');

function addCorDeFundo(){
    let backgroundColor = document.getElementById('backgroundColor');
     botao.addEventListener('click', function() {
       document.body.style.backgroundColor = backgroundColor.value;
       localStorage.setItem('backgroundColor', backgroundColor.value);
    }
 )
}addCorDeFundo()

function addCorDoTexto(){
    let colorText = document.getElementById('colorText');
    botao.addEventListener('click', function(){
        document.body.style.color = colorText.value;
        localStorage.setItem('colorText', colorText.value);
    }
 )
}addCorDoTexto()

function tamanhoFonte(){
    let fontSize = document.getElementById('fontSize');
    botao.addEventListener('click', function(){
     document.body.style.fontSize = fontSize.value;
     localStorage.setItem('fontSize', fontSize.value);
    }
    )
} tamanhoFonte()

function espacamento(){
    let spacing = document.getElementById('spacing');
    botao.addEventListener('click', function(){
     document.body.style.lineHeight = spacing.value;
     localStorage.setItem('spacing', spacing.value);
    }
 )
} espacamento()

function fonte(){
    let fontFamily = document.getElementById('fontFamily');
    botao.addEventListener('click', function(){
        document.body.style.fontFamily = fontFamily.value;
        localStorage.setItem('fontFamily', fontFamily.value);
    }
 )
}fonte()

document.body.style.fontFamily = localStorage.getItem('fontFamily')
document.body.style.color = localStorage.getItem('colorText')
document.body.style.backgroundColor = localStorage.getItem('backgroundColor')
document.body.style.fontSize = localStorage.getItem('fontSize')
document.body.style.spacing = localStorage.getItem('spacing')
