users = ["saamia", "alisha", "amina", "areeba", "halima"]

//functions

//non parametric functions
function pizza() {
    console.log("I am ordering a pizza")
}

pizza()

function sum(){

   let num1 = Number(prompt("enter a number"))
   let num2 = Number(prompt("enter a number"))
   let result = num1 + num2
    console.log(result)
}
sum()


//parametric functions
function emailLogin(email) {
    console.log(email)

}
emailLogin('samiyaawais8@gmal.com')


//take a number from user than multiply it by 2
function multiplication(value) {
   let results = value * 2
    // console.log (results)
    return results
}

console.log(multiplication(5))


// make a function that takes a number and squares it
function square(num) {
    let value = num * num
    return value
}
console.log(square(4))

function orderPizza(flavour, size){
    flavour = prompt('enter flavour')
    size = prompt('enter size')
    console.log(flavour  +  size  +  'pizza')
}
orderPizza()

function login (email, password){

    email = prompt ('enter email')
    if (email != 'zeeshan@gmail.com') {
        email = prompt ('enter correct email')
    }
    
    password = prompt ('enter password')
    if (password != 'test123') {
        password = prompt ('enter correct password')
    }

}

login()