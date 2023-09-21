document.getElementById("myButton").onclick = function(){
    var Knev = document.getElementById("fname").value
    let Vnev = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message")


    let lenght = Knev.lenght;
    if (lenght < 1) {
        alert("Write your name!!")
    }
}