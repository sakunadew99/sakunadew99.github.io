let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');
themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
        document.querySelector('html').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
        document.querySelector('html').classList.remove('active');
    }
}

var typed = new Typed('.typing-text',{
    strings : ['frontend developer','web designer','backend developer','web developer','fullstack developer'],
    loop : true,
    typeSpeed : 180
});

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max : 30
});





