

function fun(a) {
    this.greeting = ''
    console.log(`${this.greeting} ${a}`)
}

fun.greeting = 'Hello'


console.log(fun.greeting)