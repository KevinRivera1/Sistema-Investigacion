// Obtener todos los elementos con la clase "redireccionar"
var elementosRedireccionar = document.querySelectorAll('.alerta');
var elementosEditar = document.querySelectorAll('.editar');
var elementosEliminar = document.querySelectorAll('.eliminar');
var elementosAprobar = document.querySelectorAll('.aprobar');
var elementosPublicar = document.querySelectorAll('.enviarPublicacion');

//* PUBLICACIONES
// Iterar sobre cada elemento y agregar el evento de redireccionamiento
elementosRedireccionar.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se redireccionará al Formulario de Publicaciones',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, redireccionar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './formPublicaciones.html';
            }
        });
    });
});


elementosEditar.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se redireccionará al Formulario de Publicaciones para editar los datos',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Editar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './formPublicaciones.html';
            }
        });
    });
});

elementosEliminar.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se eliminara la Publicación',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './cardPublicaciones.html';
            }
        });
    });
});

elementosAprobar.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Esta Seguro de aprobar esta publicación?',
            text: 'Se Aprobara la publicación',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Aprobar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './cardPublicaciones.html';
            }
        });
    });
});
elementosPublicar.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Esta Seguro de enviar esta publicación?',
            text: 'Se enviara la publicación',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Enviar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './cardPublicaciones.html';
            }
        });
    });
});


//* LINEAS DE INVESTIGACION

var elementosEditarLinea = document.querySelectorAll('.editarLinea');
var elementosEliminarLinea = document.querySelectorAll('.eliminarLinea');
var elementosRedireccionarLinea = document.querySelectorAll('.alertaLinea');
var elementosAgregarLinea = document.querySelectorAll('.alertaAgregarLinea');


elementosRedireccionarLinea.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se redireccionará al Formulario de Publicaciones',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, redireccionar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './formPublicaciones.html';
            }
        });
    });
});


elementosEditarLinea.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se redireccionará al Formulario de Linias de investigación para editar los datos',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Editar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './formLinea.html';
            }
        });
    });
});

elementosEliminarLinea.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se eliminara la linea de investigacion',
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './visualizacionLinea.html';
            }
        });
    });
});

elementosAgregarLinea.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        Swal.fire({
            title: '¿Esta Seguro de agregar esta linea de investigación?',
            text: 'Se enviara la linea de investigación',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Enviar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redireccionar a otra página
                window.location.href = './visualizacionLinea.html';
            }
        });
    });
});