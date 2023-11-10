//дз2 здание 1
var month = prompt('введите месяц').toLowerCase()
switch (month){
    case'декабрь':
        console.log('зима')
        break
    case'январь':
        console.log('зима')
        break
    case'февраль':
        console.log('зима')
        break
    case'март':
        console.log('весна')
        break
    case'апрель':
        console.log('весна')
        break
    case'май':
        console.log('весна')
        break
    case'июнь':
        console.log('лето')
        break
    case'июль':
        console.log('лето')
        break
    case'август':
        console.log('лето')
        break
    case'сентябрь':
        console.log('осень')
        break
    case'октябрь':
        console.log('осень')
        break
    case'ноябрь':
        console.log('осень')
        break
    default:
        console.log('введите коретные данные')

}

//дз2 задание 2
var array = [[[[[[[2]]]]]]]
console.log(array[0][0][0][0][0][0][0])

//дз 2 задание 3
var num1 = Number(prompt('num1'))
var num2 = Number(prompt('num2'))
var action = prompt('enter the action')
switch (action){
    case'+':
        console.log(alert(num1 + num2))
        break
    case'-':
        console.log(alert(num1 - num2))
        break
    case'*':
        console.log(alert(num1 * num2))
        break
    case'/':
        console.log(alert(num1 / num2))
        break
    default:
        console.log(alert('введите чиcловое значение'))

}