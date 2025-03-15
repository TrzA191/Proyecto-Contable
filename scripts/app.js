// JSON con las opciones para la categoría
const menudJson = {
    "menu": {
        "menu": [
            { "name": "Dinero en caja" },
            { "name": "Cuentas bancarias" },
            { "name": "Mercancías" },
            { "name": "Paquetes de llantas" }
        ],
        "ActivoNoCirculante": [
            { "name": "Terrenos" },
            { "name": "Edificios" },
            { "name": "Vehículos" },
            { "name": "Patentes" },
            { "name": "Marcas registradas" }
        ]
    }
};

const menuJsfon = {
    "menu": [
        { "name": "Manzana" },
        { "name": "Naranja" },
        { "name": "Plátano" },
        { "name": "Uva" },
        { "name": "Pera" }
    ]
};

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el elemento <select> donde se agregarán las opciones
    const selectElement = document.getElementById('category');

    // Limpia las opciones existentes si es necesario
    selectElement.innerHTML = '';

    // Agrega una opción predeterminada
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Seleccione una categoría';
    defaultOption.value = '';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    selectElement.appendChild(defaultOption);

    // Itera sobre el JSON y añade cada elemento como una opción
    menuJson.menu.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name; // Usa el nombre como valor
        option.textContent = item.name; // El texto visible será el nombre
        selectElement.appendChild(option);
    });
});
