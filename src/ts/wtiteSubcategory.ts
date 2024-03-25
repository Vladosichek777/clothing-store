import {catalogLink} from './show-catalog';
const mainCategory:NodeListOf<Element> = document.querySelectorAll('.header-catalog-window-list__item');
const subategoryBlock:HTMLElement | null = document.querySelector('.header-catalog-window-sublist');


interface Categories {
    [key:string]:string[]
}
const subCategories: Categories = {
    woman: ['Вишиті сукні', 'Жіночі вишиванки', 'Світшоти та светри','Футболки', 'Брюки та комбінезони', 'Пальта та куртки', 'Спідниці'],
    man:['Футболки', 'Шорти', 'Брюки', 'Светери'],
    child: ['шапочки', 'футболки', 'взуття', 'колготи'],
    house: ['столи', 'шафи', 'дзеркала', 'електрика','ковдри'],
    accessories: ['годинники', 'плакати'],
}

//function for search necessary key in object and then  create current subcategories list
function searchKeyInObject(obj:Categories, necessaryKey:string,subategoryBlock:HTMLElement) {
    for(let objectKey in obj) {
        if(necessaryKey === objectKey) {
          let arrSubcategories:string[] = obj[objectKey]
          subategoryBlock.innerHTML = '';
          for (let i = 0; i < arrSubcategories.length; i++) {
           const createdSubcategories = document.createElement('li');
           createdSubcategories.classList.add('header-catalog-window-sublist__item');
           createdSubcategories.textContent = arrSubcategories[i];
           subategoryBlock.appendChild(createdSubcategories)
          }
        }
    }
}

// already main function for create current subcategories list
function writeCategories() {
    mainCategory.forEach(categoryItem => {
       categoryItem.addEventListener('mouseenter', (e) => {
        if (e.target instanceof HTMLElement && e.target.dataset.category) {
            let currentDataCategory = e.target.dataset.category;
            if(subategoryBlock) {
                searchKeyInObject(subCategories, currentDataCategory,subategoryBlock)
            }
        }
       })
    });
}

writeCategories()
