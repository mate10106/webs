document.getElementById("myButton").onclick = function(){
    if (String(document.getElementById("name").value).length < 1) {
        alert("Please write down your name.")
    }
    else if(String(document.getElementById("email").value).length < 1){
        alert("Please write down your email.")
    }
    else if(String(document.getElementById("phone").value).length < 1){
        alert("Please write down your phone number.")
    }
    else if(String(document.getElementById("message").value).length < 1){
        alert("Please write down how can we help you.")
    }
    else{
        alert("The message is send. We will contact you as soon as we know the answer your problem.")
    } 
}