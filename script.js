document.addEventListener("DOMContentLoaded", function() {
   
    let inputTime = document.querySelector(".task-one");
    let inputName = document.querySelector(".task-two");
    let inputLogin = document.querySelector(".task-three");
    let inputPass = document.querySelector(".task-three-pass");
    let one = document.querySelector(".one");
    let two = document.querySelector(".two");
    let three = document.querySelector(".three");
    let btn = document.querySelector(".button")

    function whatTime() {
        if (inputTime.value > 17) {
            alert("Good evening!");
        } else {
            alert("Good afternoon!");
        }    
    }

    function whatName() {
        if (inputName.value === "John") {
            alert("Hello John!");
        } else {
            alert("I don`t know you");
        }    
    }

    function authorization() {
    if (inputLogin.value === "ivan" &&
        inputPass.value === "333sss"  ||
        inputPass.value === "666gibs"  ||
        inputPass.value === "0000") {
            alert("Welcome!");
        } else {
            alert("User is not found!");
        }    
    }

    function whatIsMore() {
        if (one.value > two.value && one.value > three.value) {
            alert(one.value + " is more!");
        } else if(two.value > one.value && two.value > three.value) {
            alert(two.value + " is more!");
        } else if(three.value > one.value && three.value > two.value) {
            alert(three.value + " is more!");
        }  else {
            alert("Have a few same max number!");
        }
    }

    inputTime.addEventListener("keydown", function(elem) {
        if (elem.code === "Enter" || elem.key === "Enter") {
            whatTime();
        }
    })

    inputName.addEventListener("keydown", function(elem) {
        if (elem.code === "Enter" || elem.key === "Enter") {
            whatName();
        }
    })

    inputLogin.addEventListener("keydown", function(elem) {
        if (elem.code === "Enter" || elem.key === "Enter") {
            authorization();
        }
    })

    inputPass.addEventListener("keydown", function(elem) {
        if (elem.code === "Enter" || elem.key === "Enter") {
            authorization();
        }
    })
    
    btn.addEventListener("click", function() {
        whatIsMore();
    })
    
})