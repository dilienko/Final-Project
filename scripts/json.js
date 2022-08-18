/*Create JSON from JS Object and process it */

let jsObj = [
    {
        type: 'design',
        date: new Date().setFullYear(2022, 6, 23),
        name: 'Photomate',
        icon: '<ion-icon name="desktop-outline"></ion-icon>',
        picture: './images/profile/design1.jpeg',
        technology: ['Figma', 'Adobe Photoshop'],
        price: 100
    },

    {
        type: 'design',
        date: new Date().setFullYear(2021, 5, 18),
        name: 'Book Store',
        icon: '<ion-icon name="desktop-outline"></ion-icon>',
        picture: './images/profile/design2.jpeg',
        technology: ['Figma', 'Adobe Photoshop'],
        price: 120
    },

    {
        type: 'design',
        date: new Date().setFullYear(2021, 12, 23),
        name: 'EasyShop',
        icon: '<ion-icon name="desktop-outline"></ion-icon>',
        picture: './images/profile/design3.jpeg',
        technology: ['Figma', 'Adobe Photoshop'],
        price: 90
    },

    {
        type: 'logo',
        date: new Date().setFullYear(2021, 5, 16),
        name: 'Fishline',
        icon: '<ion-icon name="pricetag-outline"></ion-icon>',
        picture: './images/profile/logo1.jpeg',
        technology: ['Adobe Illustrator', 'Canva'],
        price: 70
    },
    {
        type: 'logo',
        date: new Date().setFullYear(2022, 3, 3),
        name: 'Wine Kingdom',
        icon: '<ion-icon name="pricetag-outline"></ion-icon>',
        picture: './images/profile/logo2.jpeg',
        technology: ['Adobe Illustrator', 'Canva'],
        price: 85
    },
    {
        type: 'logo',
        date: new Date().setFullYear(2020, 9, 24),
        name: 'Mountain Studio',
        icon: '<ion-icon name="pricetag-outline"></ion-icon>',
        picture: './images/profile/logo3.jpeg',
        technology: ['Adobe Illustrator', 'Canva'],
        price: 65
    },

    {
        type: 'photography',
        date: new Date().setFullYear(2021, 8, 9),
        name: 'Cat photoshoot',
        icon: '<ion-icon name="camera-outline"></ion-icon>',
        picture: './images/profile/photography1.jpeg',
        technology: ['SONY Alpha A7', 'Adobe Photoshop'],
        price: 35
    },
    {
        type: 'photography',
        date: new Date().setFullYear(2020, 4, 28),
        name: 'Dog photoshoot',
        icon: '<ion-icon name="camera-outline"></ion-icon>',
        picture: './images/profile/photography2.jpeg',
        technology: ['SONY Alpha A7', 'Adobe Photoshop'],
        price: 30
    },
    {
        type: 'photography',
        date: new Date().setFullYear(2022, 1, 27),
        name: 'Portrait photoshoot',
        icon: '<ion-icon name="camera-outline"></ion-icon>',
        picture: './images/profile/photography3.jpeg',
        technology: ['SONY Alpha A7', 'Adobe Photoshop'],
        price: 40
    },

    {
        type: 'poster',
        date: new Date().setFullYear(2021, 10, 19),
        name: 'Food&Wine Fest',
        icon: '<ion-icon name="images-outline"></ion-icon>',
        picture: './images/profile/poster1.jpeg',
        technology: ['Sketch', 'Adobe Photoshop'],
        price: 250
    },
    {
        type: 'poster',
        date: new Date().setFullYear(2022, 5, 10),
        name: 'Concert Poster',
        icon: '<ion-icon name="images-outline"></ion-icon>',
        picture: './images/profile/poster2.jpeg',
        technology: ['Sketch', 'Adobe Photoshop'],
        price: 170
    },
    {
        type: 'poster',
        date: new Date().setFullYear(2020, 11, 25),
        name: 'JULIAN restaurant',
        icon: '<ion-icon name="images-outline"></ion-icon>',
        picture: './images/profile/poster3.jpeg',
        technology: ['Sketch', 'Adobe Photoshop'],
        price: 130
    },

    {
        type: 'promotion',
        date: new Date().setFullYear(2021, 7, 3),
        name: 'Social Ads',
        icon: '<ion-icon name="storefront-outline"></ion-icon>',
        picture: './images/profile/promotion1.jpeg',
        technology: ['Adobe Photoshop'],
        price: 0
    },
    {
        type: 'promotion',
        date: new Date().setFullYear(2021, 2, 13),
        name: 'Juice Ads',
        icon: '<ion-icon name="storefront-outline"></ion-icon>',
        picture: './images/profile/promotion2.jpeg',
        technology: ['Adobe Photoshop'],
        price: 235
    },
    {
        type: 'promotion',
        date: new Date().setFullYear(2020, 5, 3),
        name: 'Olympus Ads',
        icon: '<ion-icon name="storefront-outline"></ion-icon>',
        picture: './images/profile/promotion3.jpeg',
        technology: ['SONY Alpha A7', 'Adobe Photoshop'],
        price: 270
    },

    {
        type: 'retro',
        date: new Date().setFullYear(2021, 11, 19),
        name: 'Retro Photoshoot',
        icon: '<ion-icon name="image-outline"></ion-icon>',
        picture: './images/profile/retro1.jpeg',
        technology: ['SONY Alpha A7', 'Adobe Photoshop'],
        price: 140
    },
    {
        type: 'retro',
        date: new Date().setFullYear(2021, 7, 2),
        name: 'Retro Style',
        icon: '<ion-icon name="image-outline"></ion-icon>',
        picture: './images/profile/retro2.jpeg',
        technology: ['SONY Alpha A7', 'Adobe Photoshop'],
        price: 60
    },
    {
        type: 'retro',
        date: new Date().setFullYear(2020, 11, 4),
        name: 'Retro Portrait',
        icon: '<ion-icon name="image-outline"></ion-icon>',
        picture: './images/profile/retro3.jpeg',
        technology: ['SONY Alpha A7', 'Adobe Photoshop'],
        price: 60
    },

    {
        type: 't-shirts',
        date: new Date().setFullYear(2021, 2, 9),
        name: 'Petshome T-shirt',
        icon: '<ion-icon name="shirt-outline"></ion-icon>',
        picture: './images/profile/t-shirts1.jpeg',
        technology: ['Adobe Illustrator', 'Canva'],
        price: 120
    },
    {
        type: 't-shirts',
        date: new Date().setFullYear(2020, 5, 25),
        name: 'SnapHero T-shirt',
        icon: '<ion-icon name="shirt-outline"></ion-icon>',
        picture: './images/profile/t-shirts2.jpeg',
        technology: ['Adobe Illustrator', 'Canva'],
        price: 110
    },
    {
        type: 't-shirts',
        date: new Date().setFullYear(2021, 8, 1),
        name: 'MisFit T-shirt',
        icon: '<ion-icon name="shirt-outline"></ion-icon>',
        picture: './images/profile/t-shirts3.jpeg',
        technology: ['Adobe Illustrator', 'Canva'],
        price: 135
    },

    {
        type: 'videos',
        date: new Date().setFullYear(2021, 10, 11),
        name: 'Short Cartoon',
        icon: '<ion-icon name="videocam-outline"></ion-icon>',
        picture: './images/profile/videos1.jpeg',
        technology: ['Adobe After Effects'],
        price: 575
    },
    {
        type: 'videos',
        date: new Date().setFullYear(2020, 5, 23),
        name: 'Wedding Video',
        icon: '<ion-icon name="videocam-outline"></ion-icon>',
        picture: './images/profile/videos2.jpeg',
        technology: ['Adobe Premiere Pro'],
        price: 230
    }



]

let json = JSON.stringify(jsObj)



const portfolioWorks = JSON.parse(json);
let recentWorks = portfolioWorks.sort((a, b) =>  b.date - a.date).slice(0, 6);
const portfolioContainer = document.querySelector('.profile-works');
let worksOnScreen = [];
let activeFilters = 0;

let recentWorksNodes = [];
for(let work of recentWorks){
    recentWorksNodes.push(createElement(work))
}
portfolioContainer.append(...recentWorksNodes)

let allWorks ={
    design: portfolioWorks.filter(element => element.type == 'design').map(element => createElement(element)),
    logo: portfolioWorks.filter(element => element.type == 'logo').map(element => createElement(element)),
    photography: portfolioWorks.filter(element => element.type == 'photography').map(element => createElement(element)),
    poster: portfolioWorks.filter(element => element.type == 'poster').map(element => createElement(element)),
    promotion: portfolioWorks.filter(element => element.type == 'promotion').map(element => createElement(element)),
    retro: portfolioWorks.filter(element => element.type == 'retro').map(element => createElement(element)),
    ['t-shirts']: portfolioWorks.filter(element => element.type == 't-shirts').map(element => createElement(element)), 
    videos: portfolioWorks.filter(element => element.type == 'videos').map(element => createElement(element))
}


const filters = document.querySelectorAll('.filters__element')
for(let filter of filters) filter.addEventListener('click', updateElements)


function updateElements(){
    event.stopPropagation();
    if (activeFilters == 0) {
        portfolioContainer.innerHTML = '';
    }
    
    if(this.getAttribute('style') == null || this.getAttribute('style') == ''){
        activeFilters++;
        this.setAttribute('style', 'background:#7ababa; color: white')
        worksOnScreen.push(...(allWorks[this.id]))
        worksOnScreen = worksOnScreen.sort((a, b) =>  b.date - a.date)
        
        let classes = portfolioContainer.className.split(' ')
        let lastClass = classes[classes.length - 1]
        if(worksOnScreen.length > 8 && lastClass != 'scroll'){
            portfolioContainer.classList.toggle('scroll')
        }
        portfolioContainer.append(...worksOnScreen)
        
    }else{
        activeFilters--
        this.setAttribute('style', '')
        
        if (activeFilters == 0) {
            portfolioContainer.innerHTML = '';
            portfolioContainer.append(...recentWorksNodes)
            worksOnScreen = []
            return
        }
        
        for(let item of allWorks[this.id]){
            portfolioContainer.removeChild(item)  
        }
        worksOnScreen = worksOnScreen.filter(element => !(allWorks[this.id].includes(element)))

        if(portfolioContainer.childElementCount <= 8){
                portfolioContainer.classList.remove('scroll')
        }
    }
}


function createElement(object){
    let portfolioElement = document.createElement('div');
    portfolioElement.className = 'profile-works__element';

    let portfolioElementImage = document.createElement('div');
    portfolioElementImage.className = 'profile-works__element-image';
    let image = document.createElement('img');
    image.src = object.picture;
    image.alt = object.name;
    portfolioElementImage.append(image)
    let maskElement = document.createElement('div');
    maskElement.className = 'profile-works__element-mask'
    let date = new Date(object.date)
    maskElement.insertAdjacentHTML('afterbegin', `<p>Name: ${object.name}</p>
    <p>Date: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}</p>
    <p>Technology: ${object.technology.join(', ')}</p><p>Price: ${object.price}$</p>`)
    portfolioElementImage.append(maskElement)

    let elementDescription = document.createElement('div')
    elementDescription.className = 'profile-works__element-descripton'
    let elementIcon= document.createElement('div')
    elementIcon.className = 'profile-works__element-icon'
    elementIcon.innerHTML = `${object.icon}`
    elementDescription.append(elementIcon)
    let elementText = document.createElement('div')
    elementText.className = 'profile-works__element-text'
    elementText.innerHTML = `${object.name}`
    elementDescription.append(elementText)

    portfolioElement.append(portfolioElementImage, elementDescription)
    return portfolioElement
}


const portfolioButton = document.querySelector('#portfolio-button')
portfolioButton.addEventListener('click', changeBlocksAmount)

function changeBlocksAmount(){
    event.stopPropagation();
    if(this.innerHTML == 'BROWSE ALL'){
        this.innerHTML = "HIDE ALL"
        portfolioContainer.innerHTML = ''
        worksOnScreen = []
        for(let key in allWorks){
            portfolioContainer.append(...allWorks[key])
            worksOnScreen.push(...allWorks[key])
        }
        
        let classes = portfolioContainer.className.split(' ')
        let lastClass = classes[classes.length - 1]
        if(worksOnScreen.length > 8 && lastClass != 'scroll'){
            portfolioContainer.classList.toggle('scroll')
        }
        activeFilters = filters.length
        for(let filter of filters){
            filter.setAttribute('style', 'background:#7ababa; color: white')
        }
        
    }else{
        this.innerHTML = "BROWSE ALL"
        portfolioContainer.innerHTML = ''
        portfolioContainer.append(...recentWorksNodes)
        worksOnScreen = []
        activeFilters = 0
        for(let filter of filters){
            filter.setAttribute('style', '')
        }
        portfolioContainer.classList.remove('scroll')
    }
}
