
    const four = document.getElementById("four")
    const five = document.getElementById("five")
    const six = document.getElementById("six")
    const custom = document.getElementById("custom")
    const customRounds = document.getElementById("customRounds")
    const guessed = document.getElementById("guess")
    const hints = document.getElementById("hints")
    const box = document.getElementById("rounds")
    const button = document.getElementById("start")
    const number = Math.floor(Math.random() * 100) + 1
    console.log(number);
    function showCustom() {
        if (custom.checked) {
            customRounds.style.display = "inline-block"
        } else {
            customRounds.style.display = "none"
        }
    }
    let i = 0
    function game() {
        let rounds
        let guess = guessed.value
        if (four.checked) {
            rounds = 4
        } else if (five.checked) {
            rounds = 5
        } else if (six.checked) {
            rounds = 6
        } else {
            rounds = customRounds.value
        }
        if (i >= rounds - 1) {
            i++
            button.disabled = true
            box.style.color = "red"
            button.style.color = "red"
            hints.style.color = "red"
        } else {
            i++
        }
        box.innerHTML = `<h2>${i}/${rounds}</h2>`
        if (guess == number) {
            button.disabled = true
            button.style.color = "#0d8a0d"
            hints.style.color = "#0a570a"
            box.style.color = "#0d8a0d"
            hints.innerHTML += `<h3>Congratulatios! You won after ${i} rounds. <a href="index.html">Play again!</a></h3>`
        } else if (i >= rounds) {
            hints.innerHTML += `<h3>Sorry, you lost. Your number was ${number}. <a href="index.html">Play again!</a></h3>`
        } else if (guess > number) {
            hints.innerHTML += `<h3>${i}. You need to guess lower than ${guess}.</h3>`
        } else {
            hints.innerHTML += `<h3>${i}. You need to guess higher than ${guess}.</h3>`
        }
    }
    
    