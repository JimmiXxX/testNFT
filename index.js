const modalWindow = document.querySelector( '.modalWindow' )
const fullContent = document.querySelector( '.fullContent' )
const burgerCheckBox = document.querySelector( '.burgerCheckBox' )

const closedMenu = () => {
    (modalWindow.style.display === 'flex') ? modalWindow.style.display = 'none' : modalWindow.style.display = 'none'
    fullContent.className = 'notBlur'
}

const openMenu = () => {
    (modalWindow.style.display === 'none') ? modalWindow.style.display = 'flex' : modalWindow.style.display = 'flex'
    fullContent.className = 'blur'
}

const blur = () => {
    (burgerCheckBox.checked) ? fullContent.classList.add( 'blurBurger' ) : fullContent.classList.remove( 'blurBurger' )
}

burgerCheckBox.addEventListener( 'change', blur )

