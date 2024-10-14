let math = +prompt ("Enter the math score you scored")
let history = +prompt ("Enter the history score you scored")
let physics = +prompt ("Enter the physics score you scored")
let psychology = +prompt ("Enter the psychology score you scored")
let literature = +prompt ("Enter the literature score you scored")
let english = +prompt ("Enter the english language score you scored")
let russian = +prompt ("Enter the russian language score you scored")
alert(`
    Siz umumiy o'rtacha to'plagan ball: ${
        (math + history + physics + psychology + literature + english + russian) / 7
    }`)
    console.log(
`
    Siz umumiy o'rtacha to'plagan ball: ${
        (math + history + physics + psychology + literature + english + russian) / 7
    }`
    )