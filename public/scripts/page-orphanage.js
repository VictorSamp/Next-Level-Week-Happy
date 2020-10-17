const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html
const lat = document.querySelector('[data-lat]').dataset.lat
const lng = document.querySelector('[data-lng]').dataset.lng


//create map
const map = L.map('mapid', options).setView([lat, lng], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/img/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//creat and add marker
L.marker([lat, lng], {icon}).addTo(map)

/* Image Gallery */

function selectImage(event){
    const button = event.currentTarget
    //Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove("active")
    }
    //Selecionar Imagem Clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //Atualizar o Container de Imagem
    imageContainer.src = image.src

    //Adicionar a classe .active
    button.classList.add("active")
}

