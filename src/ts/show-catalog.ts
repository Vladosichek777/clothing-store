export const catalogLink:HTMLElement | null = document.querySelector('[data-catalog]');
const catalogBlock:HTMLElement | null = document.querySelector('.header-catalog');

catalogLink?.addEventListener('mouseover', () => {
    catalogBlock?.classList.add('header-catalog--active');
    catalogLink?.classList.add('navigation__links--active');

    catalogBlock?.addEventListener('mouseleave', () => {
        catalogBlock?.classList.remove('header-catalog--active');
        catalogLink?.classList.remove('navigation__links--active');
    })
})