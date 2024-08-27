// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.classList.add('wrap','collapse','alpha','beta')
// document.body.appendChild(div)
// console.log(div)
// let div2 = div.cloneNode(true)
// console.log(div2)
// document.body.appendChild(div2)

//- Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let array = ['Main','Products','About us','Contacts']
// let ul = document.createElement('ul');
// ul.classList.add('menu');
// for (const element of array) {
//     let li = document.createElement('li');
//     li.innerText = element;
//     ul.appendChild(li)
// }
// document.body.appendChild(ul)

//- Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let array = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let element of array) {
//     let div = document.createElement('div');
//     div.innerText = element.title + ' - ' + element.monthDuration;
//     document.body.appendChild(div)
// }

//- Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item')
//     document.body.appendChild(div)
//
//     let h1 = document.createElement('h1');
//     h1.innerText = element.title;
//     h1.classList.add('item')
//     div.appendChild(h1)
//
//     let p = document.createElement('p');
//     p.innerText = element.monthDuration;
//     p.classList.add('description')
//     div.appendChild(p)
// }