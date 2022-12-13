const fotosShows = [
    {
        "src": "imagens/halloween1.jpg",
        "local": "A TOCA - 22/10/2022 - ITATIBA - SP"
    },
    {
        "src": "imagens/halloween2.jpg",
        "local": "A TOCA - 22/10/2022 - ITATIBA - SP"
    },
    {
        "src": "imagens/jangada1.jpg",
        "local": "JANGADA FEST - 11/06/2022 - ITATIBA - SP"
    },
    {
        "src": "imagens/jangada2.jpeg",
        "local": "JANGADA FEST - 11/06/2022 - ITATIBA - SP"
    }
]

function carregarImagensShows() {

    fotosShows.forEach(foto => {
        let imagem = document.createElement('img')
        imagem.setAttribute('src', foto.src)

        let local = document.createElement('p')
        local.innerHTML = foto.local

        let itemCarousel = document.createElement('div')
        itemCarousel.classList.add('item-carrosel')

        itemCarousel.append(imagem, local)

        let carouselItem = document.createElement('div')
        carouselItem.classList.add('carousel-item')
        carouselItem.setAttribute('data-bs-interval', "999999999")

        carouselItem.appendChild(itemCarousel)

        $('#carouselInnerShows').append(carouselItem)
        $('#carouselInnerShows div:first').addClass('active')
    })
}
carregarImagensShows()