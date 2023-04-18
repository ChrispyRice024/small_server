const numbers = [1, 2, 3, 4, 5]
const htmlList = document.getElementById('list')

for (i=0; i< numbers.length; i++) {
    const list = document.createElement('li')
    list.innerHTML = numbers[i]
    htmlList.append(list)
}
console.log('hello world')