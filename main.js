function strikeThrough(){
    const firstElement = document.querySelector('ul li');
    firstElement.style.textDecoration = "line-through"
    }
    
    function makeImage(id,url){
    
        const image = document.querySelector(id);
        image.src  = url
    
    }
    function removeLast(){
        const Elements = document.querySelectorAll('ul li');
        Elements[Elements.length - 1].remove()
    }
    
    function changeSize(id, size){
        const text = document.querySelector(id);
        text.style.fontSize = size
    }
    
    function appendElementToUl(newElement){
    
        const list = document.querySelector('ul');
        list.append(newElement)
    
    }
    function AdjustImageSize(Element){
        Element.style.height = '30px'
    }
    
    function MakeElementInvisible(Element){
        Element.className = 'invisible'
    }
    
    
    function newListElement(text){
       const list =  document.createElement('li')
       list.innerHTML = text 
       return list
    }
    
    function newHeader(Hsize,text){
        const list =  document.createElement('h'+Hsize)
        list.innerHTML = text 
        return list
     }
    
    strikeThrough()
    removeLast()
    removeLast()
    
    
    makeImage('#image-1','https://wl-brightside.cf.tsp.li/resize/728x/jpg/039/146/7b6ef45df6b94b8fd8a6b8db51.jpg')
    makeImage('#image-2','https://res.cloudinary.com/highereducation/image/upload/f_auto,fl_lossy,q_auto/v1/BestColleges.com/rankings/featured/Soft_Best_Financial_Aid_Programs.jpg')
    makeImage('#image-3','https://www.usnews.com/dims4/USNEWS/84c73a4/2147483647/crop/2000x1313%2B0%2B2/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F70%2F57%2F3a609cb5418091563d9175591d72%2Fartificialintelligenceface.jpg')
    
    changeSize("#thing-2","50px")
    
    appendElementToUl(document.createElement('img'));
    
    const image = document.querySelector('#image-1');
    AdjustImageSize(image);
    
    
    const image1 = document.querySelector('#image-1');
    MakeElementInvisible(image1);
    
    appendElementToUl(newListElement("Hi i am new"));
    
    appendElementToUl(newHeader(2,"I am new 3 header"));
      