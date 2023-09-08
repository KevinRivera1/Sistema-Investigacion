// Selección de elementos del DOM
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
const switchMode = document.querySelector('#switch-mode');

// Función para marcar un elemento como activo y desactivar otros
function setActiveItem(item) {
    allSideMenu.forEach(i => {
        i.parentElement.classList.remove('active');
    });
    item.classList.add('active');
}

// Evento para cambiar la visibilidad de la barra lateral
menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// Evento para mostrar/ocultar el formulario de búsqueda en pantallas pequeñas
searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

// Manejo de estilos oscuros
if (switchMode) {
    switchMode.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark');
            console.log('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
}

// Función para manejar cambios en el ancho de la ventana
function handleWindowResize() {
    if (window.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
}

// Manejar el estado inicial de la barra lateral según el ancho de la ventana
if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}

// Evento para escuchar cambios en el tamaño de la ventana
window.addEventListener('resize', handleWindowResize);
