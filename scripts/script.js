'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
let globalActiveHabbitID;

/*Page */
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar:document.querySelector('.progress__cover_bar')
    },
    content:{
        daysContainer: document.getElementById('days'),
        nextDay: document.querySelector('.habbit__day'),
    },
    popup: {
        index: document.getElementById("add_popup"),
        iconField: document.querySelector('.popup_form input[name="icon"]'),
    }
}
/*Utils*/

function loadData(){
    const habbitString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitString);
    if (Array.isArray(habbitArray)){
        habbits = habbitArray;
    }
}

function saveData(){
    localStorage.setItem(HABBIT_KEY,JSON.stringify(habbits));
}

function coverPopup(){
    if(page.popup.index.classList.contains('cover_hidden')){
        page.popup.index.classList.remove('cover_hidden');
    }else{
        page.popup.index.classList.add('cover_hidden')
    }
}

function resetForm(form,fields){
    for(const field of fields){
        form[field].value = '';
    }
}

function validateAndGetFormData(form,fields){
    const formData = new FormData(form);
    const res = {};
    for(const field of fields){
        const fieldValue = formData.get(field);
        form[field].classList.remove('error');
        if(!fieldValue){
            form[field].classList.add('error'); 
        }
        res[field]= fieldValue;
    }
    let isValid = true;
    for(const field of fields){
        if(!res[field]){
            isValid = false;
        }
    } 
    if(!isValid){
        return undefined;
    }
    return res;
}

/*Render */
function rerenderMenu(activeHabbit) {
    if (!activeHabbit) {
        return;
    }
    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habbit.id))
            element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}">`;
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add('menu__item_active')
        } else {
            existed.classList.remove('menu__item_active')
        }
    }
}

function rerenderHead(activeHabbit){
    if (!activeHabbit) {
        return;
    }
    page.header.h1.innerText = activeHabbit.name;
    const progress = activeHabbit.days.length / activeHabbit.target > 1 
        ? 100
        : activeHabbit.days.length / activeHabbit.target * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + '%';
    page.header.progressCoverBar.setAttribute('style',`width:${progress}%`)
}

function rerenderBody(activeHabbit){
    page.content.daysContainer.innerHTML = '';
    for (const index in activeHabbit.days ){
        const el = document.createElement('div');
        el.classList.add('habbit'); 
        el.innerHTML = `<div class="habbit__day">День ${Number(index) + 1}</div>
        <div class="habbit__comment">${activeHabbit.days[index].comment}</div>
        <button class="habbit__delete" onclick="removeDay(${index})">
            <img src="/images/delete.svg" alt="Удалить день ${Number(index) + 1}" />
        </button>`
        page.content.daysContainer.appendChild(el);
    }
    page.content.nextDay.innerHTML = `День ${activeHabbit.days.length+1}`;
}

function rerender(activeHabbitID){
    globalActiveHabbitID = activeHabbitID;
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitID);
    if (!activeHabbit) {
        return;
    }
    rerenderMenu(activeHabbit);
    rerenderHead(activeHabbit);
    rerenderBody(activeHabbit);
}

/*work with days */

function addDays(event){
    event.preventDefault();
    const data = validateAndGetFormData(event.target,['comment']);
    if (!data){
        return;
    }
    habbits = habbits.map(habbit => {
        if(habbit.id === globalActiveHabbitID){
            return{
                ...habbit,
                days: habbit.days.concat([{comment: data.comment}])
            }
        }
        return habbit;
    });
    resetForm(event.target,['comment']);
    rerender(globalActiveHabbitID);
    saveData();
}

function removeDay(index){
    habbits = habbits.map(habbit => {
        if(habbit.id === globalActiveHabbitID){
            habbit.days.splice(index,1);
            return{
                ...habbit,
                days: habbit.days
            }
        }
        return habbit;
    });
    rerender(globalActiveHabbitID);
    saveData();
}

/*works with habbits */

function setIcon(constext,icon){
    page.popup.iconField.value = icon;
    const activeIcon = document.querySelector('.icon.icon_active');
    activeIcon.classList.remove('icon_active');
    constext.classList.add('icon_active');
}

function addHabbit(event){
    event.preventDefault();
    const data = validateAndGetFormData(event.target,['name', 'icon', 'target']);
    if (!data){
        return;
    }
    const maxId = habbits.reduce((acc,habbit)=>acc>habbit.id ? acc:habbit.id, 0);
    habbits.push({
        id:maxId+1,
        name:data.name,
        target: data.target,
        icon: data.icon,
        days: []
    });
    resetForm(event.target, ['name', 'target']);
    coverPopup();
    saveData();
    rerender(maxId+1);
}

/*init */
(()=>{
    loadData();
    rerender(habbits[0].id)
})();

