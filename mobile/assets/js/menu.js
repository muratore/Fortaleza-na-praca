
// criar um elemento de botão
const btn_menu = document.createElement('button')
// adicionar uma classe ao botão
btn_menu.classList.add('btn-menu')
// Selecionar o body para inserir o botão
const body = document.querySelector('body')
// Inserir o botão no body
body.appendChild(btn_menu)


// Criar um elemento de menu
const menu_box = document.createElement('div')
// Adicionar uma classe ao menu
menu_box.classList.add('menu-box')
// Inserir o menu no body
body.appendChild(menu_box)


// Pegar todos os tiulos dos contos
// Para esse código ser aproveitado para outras aplicações, basta alterar a classe .h2-conto para a classe dos tiulos da sua aplicação.
const title = document.querySelectorAll('.h2-conto')

Array.from(title).forEach(element => {
    const menu_item = document.createElement('div')
    menu_item.classList.add('menu-item')
    menu_item.innerText = element.outerText
    menu_box.appendChild(menu_item)
    // console.log(element.outerText)
    // Adicionar um evento de clique no menu
    menu_item.addEventListener('click', (event) => {
          btnMenu()  
        // scrollIntoView() para fazer o scroll automático
        element.scrollIntoView({
            behavior: 'smooth'
        })   
    })
});

function btnMenu() {
    // Adicionar a classe active ao botão
    btn_menu.classList.toggle('active');
    const isActive = menu_box.classList.toggle('active');
    // console.log(isActive)
    // Se o menu acabou de ser FECHADO (não tem mais a classe active)
    if (!isActive) {
        menu_box.scrollTop = 0;
    }
}
  btn_menu.addEventListener('click', btnMenu)


