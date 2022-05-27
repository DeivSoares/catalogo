function deslogado(){
    var desloga = document.getElementById("logado");
    desloga.classList.add("desativado");
}

function login(){
    var desaparece = document.getElementById("deslogado");
    desaparece.classList.add("desativado");

    var logado = document.getElementById("logado");
    logado.classList.remove("desativado");

    alert("Bem vindo TchannZera!")
}

function deslogar(){
    var sair = document.getElementById("logado");
    sair.classList.add("desativado")

    var login = document.getElementById("deslogado");
    login.classList.remove("desativado");

    confirm("Deseja realmente desconectar?")
    alert("Desconectando...")
}




window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    // Verificar se a seção passou da linha
    //Quais dados vou precisar?
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

    // Verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    // Limites da Seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove('active');
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    }

    // Informações dos dados e da lógica
    console.log(`A linha alvo é ${targetLine}`)
    console.log(`O topo da seção chegou ou passou da linha? ${sectionTopReachOrPassedTargetLine}`)
    console.log(`O fundo da seção passou da linha? ${sectionEndPassedTargetLine}`)
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    console.log(scrollY)
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card,
#about,
#about header,
#about .content`);