let cities = ['Москва', 'Тула', 'Анадырь']
let temp = []

for (let i = 0; i < 3; i ++){
let result = prompt(`Введите температуру для города ${cities[i]}`)
temp.push(Number(result))
}
console.log(temp)


for (let n = 0; n<3; n++){
    let ul = document.getElementById('ul1')
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`В городе ${cities[n]} температура равна ${temp[n]} C`))
    ul.appendChild(li)
}
2
let min1 = Math.min(...temp);
let max2 = Math.max(...temp)


let para = document.getElementById('paragraf')
para.textContent = `Минимальная температура равна ${min1} C`


let para2 = document.getElementById('paragraf2')
para2.textContent = `Максимальная температура равна ${max2} C`
