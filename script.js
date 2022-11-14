const screen = document.getElementById('screen')
const equal = document.getElementById('equal')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiple = document.getElementById('multiple')
const divide = document.getElementById('divide')

const keys = document.querySelectorAll(".key")

keys.forEach(key =>{
    key.addEventListener('click',()=>{
        console.log(key.innerText);
        screen.innerHTML = key.innerText
    })

    // button.addEventListener('click',()=>{
    //     console.log(key)
    // })
})

