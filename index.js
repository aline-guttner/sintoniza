let fotosShows = [
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

let localArr = []

function carregarImagensShows() {
    fotosShows.forEach(foto => {
        if (localArr.includes(foto.local)) {
            return
        } else {
            localArr.push(foto.local)
            let fotosMesmoDia = fotosShows.filter(fotoShow => fotoShow.local === foto.local)
            console.log(fotosMesmoDia)

            let local = document.createElement('p')
            local.innerHTML = foto.local

            let imgContainer = document.createElement('div')
            imgContainer.classList.add('img-container')

            fotosMesmoDia.forEach(photo => {
                let imagem = document.createElement('img')
                imagem.setAttribute('src', photo.src)
                imgContainer.appendChild(imagem)
            })

            let itemCarousel = document.createElement('div')
            itemCarousel.classList.add('item-carrosel')

            itemCarousel.append(imgContainer, local)

            let carouselItem = document.createElement('div')
            carouselItem.classList.add('carousel-item')
            carouselItem.setAttribute('data-bs-interval', "999999999")

            carouselItem.appendChild(itemCarousel)

            $('#carouselInnerShows').append(carouselItem)
            $('#carouselInnerShows div:first').addClass('active')
        }
    })
}

carregarImagensShows()

function carregarImagensShows2() {

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

        $('#carouselInnerShows2').append(carouselItem)
        $('#carouselInnerShows2 div:first').addClass('active')
    })
}
carregarImagensShows2()