
    const highlightWrapper = document.querySelector('.highlight-wrapper');
    const step = 200; // Define o valor de rolagem

    document.querySelector('.back').addEventListener('click', function (e) {
        e.preventDefault();
        highlightWrapper.scrollBy({
            left: -step,
            behavior: 'smooth' // Adiciona uma animação suave
        });
    });

    document.querySelector('.next').addEventListener('click', function (e) {
        e.preventDefault();
        highlightWrapper.scrollBy({
            left: step,
            behavior: 'smooth' // Adiciona uma animação suave
        });
    });

    const filterWrapper = document.querySelector('.filter-wrapper');
    const stepFilter = 100; // Define o valor de rolagem para os filtros

    document.querySelector('.back-menus').addEventListener('click', function (e) {
        e.preventDefault();
        filterWrapper.scrollBy({
            left: -stepFilter,
            behavior: 'smooth' // Adiciona uma animação suave
        });
    });

    document.querySelector('.next-menus').addEventListener('click', function (e) {
        e.preventDefault();
        filterWrapper.scrollBy({
            left: stepFilter,
            behavior: 'smooth' // Adiciona uma animação suave
        });
    });
    const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-open');
});



