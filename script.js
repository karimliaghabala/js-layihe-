
const button1 = document.querySelector(".button1");
const input = document.querySelector(".textAdd input");
const textAdd = document.querySelector(".textAdd");
const ul = document.createElement('ul');
textAdd.append(ul);

/*TEXT ADDED START */
button1.addEventListener('click',(e)=>{  
        const li = document.createElement('li');
        const span = document.createElement('span');
        const img = document.createElement('img');
        img.src = "./image/Group 77.png"
        img.alt = "photo"
        ul.append(li)
        li.append(span)
        li.append(img)
        span.innerText = input.value
        ul.className = "added";
        img.addEventListener('click', (e) =>{
            e.target.parentElement;
            li.remove();
            if(ul.firstChild == null){
                ul.style.border = "none"
            }
        })
    })
/*TEXT ADDED end */

/*SORTED START */
const iconSort = document.querySelector('.icon');
let sorted = true;
iconSort.addEventListener('click', ()=>{
    let array = [];
    const list = document.querySelectorAll('.added>li');
    list.forEach(item=> {
        array.push(item.textContent);
    })
    if(sorted){
        array.sort();
        sorted = false;
        list.forEach((item, index) =>{
            item.textContent = array[index];
        })
    }else if(!sorted){
        array.reverse();
        list.forEach((item, index) =>{
            item.textContent = array[index];
        })
    }

    console.log(array);
})
/*SORTED END */

/*INPUT value DELETE START */
const inputImg = document.querySelector('.textAdd>img')
inputImg.addEventListener('click',(e)=>{
    input.value = ""
})
/*INPUT value DELETE END */

/*ENTER FUNCTION START */
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        const li = document.createElement('li');
        const span = document.createElement('span');
        const img = document.createElement('img');
        img.src = "./image/Group 77.png"
        img.alt = "photo"
        ul.append(li)
        li.append(span)
        li.append(img)
        span.innerText = input.value
        ul.className = "added";
        img.addEventListener('click', (e) =>{
            e.target.parentElement;
            li.remove();
            if(ul.firstChild == null){
                ul.style.border = "none"
            }
        })
    }
});
/*ENTER FUNCTION END */






