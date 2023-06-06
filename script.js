function abrirmenu(){
    let abrirmenu = document.querySelector('.menu-mobile-itens')
    if(abrirmenu.classList.contains('aberto')){
        abrirmenu.classList.remove('aberto');
        document.querySelector('.menu-mobile-icon').src = './svgs/menu-burguer.svg'
    }else{
        abrirmenu.classList.add('aberto');
        document.querySelector('.menu-mobile-icon').src = './svgs/menu-mobile-aberto.svg'
    }
}