var customWindow = window.open('', '_self', '');

//remove preloader
const preloaderBlock = document.querySelector('.animation-preloader')
setTimeout(() =>{
    preloaderBlock.style.display = 'none'
    document.body.style.overflow = ''
}, 5000)

//set page theme and change it onclick
const lightTheme = './styles/ligth-theme.css'
const darkTheme = './styles/dark-theme.css'
let currentTheme = 'lightTheme'
let switcher = document.querySelector('#switcher')
let link = document.querySelector('#theme')

function setTheme(){
    if(new Date().getHours() >= 21 || new Date().getHours() < 6){
        link.href = darkTheme
        currentTheme = 'darkTheme'
        switcher.checked = 'true'
    }
}

document.addEventListener('DOMContentLoaded', setTheme)

switcher.addEventListener('click', changeTheme)

function changeTheme(){
    if(currentTheme == 'lightTheme'){
        link.href = darkTheme
        currentTheme = 'darkTheme'
    } else  {
        link.href = lightTheme
        currentTheme = 'lightTheme'
    }
}


//scroll (update progress bar and star animation blog section)
window.addEventListener('scroll',  _.throttle(useCurrentPosition, 40))
const progress = document.querySelector('.progresbar__value')
const blogsection = document.querySelector('#myblog')
const blogs = document.querySelector('#blog-container')

function useCurrentPosition(){
    updateProgress()
    animateBlock()
}

function updateProgress(){
    let currentPosition = window.scrollY
    let pageHeight = document.documentElement.offsetHeight - window.innerHeight
    const percent =  (currentPosition / pageHeight) * 100
    
    progress.style.width = `${percent}%`
}

function animateBlock(){
    let position = blogsection.getBoundingClientRect()
    if(position.top < window.innerHeight && position.bottom >=1){
        if(!(blogs.classList.contains('block-container_animated'))){
            blogs.classList.toggle('block-container_animated')
        }
    }else{
        blogs.classList.remove('block-container_animated')
    }
}



//Check user activity
const WAIT_TIME = 60000
const modalActivity = document.querySelector('#activity-modal')
const activityButton = document.querySelector('#modal-activity-button')

function checkUserActivity(){
    let waitingTime = setTimeout(isUserHere, WAIT_TIME)
    document.onmousemove = document.onmousedown = 
    document.onkeydown = document.onselectstart = function(){
        clearTimeout(waitingTime)
        waitingTime = setTimeout(isUserHere, WAIT_TIME)
    }
}

function isUserHere(){
    modalActivity.style.display = 'block'
    document.body.overflow = 'none'
    let closeWindow = setTimeout(() => customWindow.close(), WAIT_TIME / 4)
    activityButton.addEventListener('click', function(){
        clearTimeout(closeWindow)
        modalActivity.style.display = ''
        document.body.style.overflow = ''
    })
}
checkUserActivity()



//Image slider
const previousImgButton = document.querySelector('#previous-slider-button')
const nextImgButton = document.querySelector('#next-slider-button')
const sliderImage = document.querySelector('.slider__current-image')
const imageDescription = document.querySelector('.slider__text')

const changeImgButtons = document.querySelectorAll('.slider__image-switcher')

let currentImage = 1;
const totalImage = 5;
let cameras = ['KODAK CAMERA', 'CANON CAMERA', 'PENTAX CAMERA', 'NIKON CAMERA', 'LEICA CAMERA']

for(let button of changeImgButtons){
    button.addEventListener('click', changeImage)
}

function changeImage(){
    event.stopPropagation()
    if(this == nextImgButton){
        if(currentImage < totalImage){
            currentImage++
            sliderImage.setAttribute('src', `./images/retro/slider${currentImage}.jpg`)
            imageDescription.innerHTML = cameras[currentImage-1]   
        }
    }else{
        if(currentImage > 1){
            currentImage--
            sliderImage.setAttribute('src', `./images/retro/slider${currentImage}.jpg`)
            imageDescription.innerHTML = cameras[currentImage-1]   
        }  
    }
    //set cursor style
    if(currentImage == 1){
        previousImgButton.setAttribute('style', 'cursor: not-allowed;')
        previousImgButton.firstElementChild.setAttribute('style', 'color: rgba(0, 0, 0, 0.6);')
    } else if(currentImage == totalImage){
        nextImgButton.setAttribute('style', 'cursor: not-allowed;')
        nextImgButton.firstElementChild.setAttribute('style', 'color: rgba(0, 0, 0, 0.6);')
    }else {
        previousImgButton.setAttribute('style', 'cursor:pointer;')
        previousImgButton.firstElementChild.setAttribute('style', 'color: rgba(0, 0, 0, 1);')
        nextImgButton.setAttribute('style', 'cursor:pointer;')
        nextImgButton.firstElementChild.setAttribute('style', 'color: rgba(0, 0, 0, 1);')
    }
}






//Form validation
const submitButton = document.querySelector('#submit')
const nameField = document.querySelector('#name')
const emailField = document.querySelector('#email')
const subjectField = document.querySelector('#subject')
const messageField = document.querySelector('#message')

const modalError = document.querySelector('#modal-error')
const errorButton = document.querySelector('#modal-error-button')
const errorList = document.querySelector('#error-list')

errorButton.addEventListener('click', hideErrorModal)
emailField.addEventListener('focus', removeBorder)
subjectField.addEventListener('focus', removeBorder)
nameField.addEventListener('focus', removeBorder)

const modalSuccess = document.querySelector('#modal-success')
const successAnim = document.querySelector('.form-antimation-container')
const orderFeedback = document.querySelector('#order-information')
const successButton = document.querySelector('#modal-success-button')

let startAnimation = false;

let error = []
let countUser = 1;

successButton.addEventListener('click', removeSuccessModal)
submitButton.addEventListener('click', saveUserData)

function saveUserData(){
    event.preventDefault()
    event.stopPropagation()
    if(!nameField.value || !emailField.value || !subjectField.value || !messageField.value){
        error.push('Fill in all fields of the form')
        showErorr()
        return
    }
    let userData = {name: null, email:null, subject:null, message: null}
    userData.name = validateName()
    userData.email = validateEmail()
    userData.subject = validateSubject()
    userData.message = messageField.value
   
    if(error.length > 0){
        showErorr()
    }else{
        showMessage()
        let userDataJSON = JSON.stringify(userData)
        localStorage.setItem(`user${countUser}`, userDataJSON)
        
        countUser++
        nameField.value = ''
        emailField.value = ''
        messageField.value = ''
        subjectField.value = ''
    }


    
}

function validateName(){
    let userEnteredName = nameField.value;
    let nameArr = userEnteredName.split('')
    let withountFirstLetter = userEnteredName.slice(1)

    
    if( nameArr[0].toLowerCase() == nameArr[0]){
        error.push('Name must start with a capital letter')
        nameField.style.border = '2px solid orange'
    }
    if(withountFirstLetter != withountFirstLetter.toLowerCase()){
        error.push('Only first letter in name must be capital')
        nameField.style.border = '2px solid orange'
    }
    for(let symbol of nameArr){
        if(!(/[a-zA-z]/.test(symbol))){
            error.push('Name can only contain latin letters')
            nameField.style.border = '2px solid orange'
            
            return null
        }
    }
    if(error.length == 0){
        return userEnteredName
    } else{
        return null
    }
}

function validateEmail(){
    let email = emailField.value
    let emailArr = email.split('')
    let hasRequieredSymbols = emailArr.includes('.') && emailArr.includes('@')
    let onlyOneRequiredSymbols = (emailArr.filter(elem => elem == '@' || elem == ".").length == 2)
    let dontFinishOnDot = emailArr.indexOf('.') != emailArr.length - 1
    if(hasRequieredSymbols && onlyOneRequiredSymbols && dontFinishOnDot){
        return email
    }else{
        error.push('Email is incorrect')
        emailField.style.border = '2px solid orange'
        return null
    }
}

function validateSubject(){
    let subject = subjectField.value
    let subjArr = subject.split('')
    for(let symbol of subjArr){
        if(/[0-9]/.test(symbol)){
            error.push('Subject can only contain letters')
            subjectField.style.border = '2px solid orange'
            return null
        }
    }
    let lowCaseSubj = subject.toLowerCase()
    let allWords = lowCaseSubj.split(' ')
    if(allWords.includes('зробити')){
        if(allWords[allWords.indexOf('зробити') + 1] == 'замовлення') startAnimation = true
    }
    
    return subject
}

function showErorr(){
    errorNodes = error.map(elem => {
       return `<li>${elem}</li>`
    }).join('')
    errorList.insertAdjacentHTML('afterbegin', errorNodes)
    modalError.style.display = 'block'
    document.body.style.overflow = 'hidden'
    error = []
}


function hideErrorModal(){
    event.stopPropagation();
    modalError.style.display = 'none'
    errorList.innerHTML = ''
    document.body.style.overflow = ''
}

function removeBorder(){
    this.style.border = ''
}

function showMessage(){
    modalSuccess.style.display = 'block'
    document.body.style.overflow = 'hidden'
    if(startAnimation){
        orderFeedback.style.display = 'block'
        successAnim.style.display = 'block'
    }
    startAnimation = false
}

function removeSuccessModal(){
    event.stopPropagation();
    modalSuccess.style.display = 'none'
    document.body.style.overflow = ''
    orderFeedback.style.display = 'none'
    successAnim.style.display = 'none'
}