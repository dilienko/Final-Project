/*
Used Google Blogger API to fill "My Blog" section
*/


const blogContainer = document.querySelector('.blogs-container')

loadBlogs('https://www.googleapis.com/blogger/v3/blogs/242601308140291417/posts?key=AIzaSyB305rN0qwkRYVjhWqBPJLJDcU3dNLEFeU&maxResults=20')

const blogButton = document.querySelector('#blogs-botton')
blogButton.addEventListener('click', changeBlogAmount)


async function loadBlogs(url){
    let response = await fetch(url)
    let blogs = await response.json();
    
    let blogsArray = blogs.items.reverse()
    let blogsElements = []

    for(let blog of blogsArray){
        let blogElem = createBlogElem(blog)
        blogsElements.push(blogElem)
    }
    
    const blogContainer = document.querySelector('.blogs-container')
    blogContainer.append(...blogsElements)
}

function createBlogElem(blog){
    
    let blogcontent = blog.content

    let startText = 3
    let endText = blogcontent.indexOf('</p><p>') 
    let startDate = endText + 7
    let endDate = blogcontent.indexOf('</p>', startDate)
    let startImgLink = blogcontent.indexOf('href="', endDate) + 6
    let endImgLink = blogcontent.indexOf('"', startImgLink) 

    let mainText = blogcontent.slice(startText, endText)
    let date = blogcontent.slice(startDate, endDate)
    let imageLink = blogcontent.slice(startImgLink, endImgLink)

    let postLink = blog.url
    let header = blog.title
    let tags = blog.labels.join(', ')

    let blogDiv = document.createElement('div')
    blogDiv.className = 'blog'
    blogDiv.insertAdjacentHTML('afterbegin', `
        <div class="blog__image">
            <img src="${imageLink}" alt="Blog Image">
        </div>
        <div class="blog_text">
            <div class="blog__header-part">
                <div class="blog__header">${header}</div>
                <div class="blog__information">${date} // ADMIN // ${tags}</div>
                <hr class="blog__separator">
                <div class="blog__response">${getRandomNumber(0, 50)} RESPONSE</div>
            </div> 
            <div class="blog__main-text">${mainText} <a href="${postLink}" target="_blank">(MORE…)</a></div>
        </div>
    `)

    return blogDiv
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function changeBlogAmount(){
    event.stopPropagation();
    if(blogButton.innerHTML == 'SHOW ALL POSTS'){
        blogContainer.classList.remove('block-container__hidden-blocks')
        blogButton.innerHTML = 'HIDE'
    } else {
        blogContainer.classList.toggle('block-container__hidden-blocks')
        blogButton.innerHTML = 'SHOW ALL POSTS'
    }
}
