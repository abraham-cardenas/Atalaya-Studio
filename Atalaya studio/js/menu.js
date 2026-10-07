const menuButton = document.getElementById('menuButton');
const navigation = document.getElementById('mainNavigation');

function toggleMenu() {
    const isOpen = navigation.classList.toggle('is-open');

    menuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

    menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Cerrar menú' : 'Abrir menú'
    );
}

menuButton.addEventListener('click', toggleMenu);

navigation.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

        navigation.classList.remove('is-open');

        menuButton.setAttribute(
            'aria-expanded',
            'false'
        );

        menuButton.setAttribute(
            'aria-label',
            'Abrir menú'
        );

    });

}); 