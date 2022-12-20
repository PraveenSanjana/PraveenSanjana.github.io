const fullname = document.getElementById("fname");
const email = document.getElementById("email");
const address = document.getElementById("adr");
const cardName = document.getElementById("cname");
const cardNumber = document.getElementById("ccnum");
const expmonth = document.getElementById("expmonth");
const expyear = document.getElementById("expyear");
const cvv = document.getElementById("cvv");
const theform =document.getElementById("form")

function donate(){
    event.preventDefault(event);
    if(cardNumber.value == 0||expyear.value == 0|| cvv.value==0){
        alert(`Fill all your details`)
    }
    else if(cardNumber.value.length != 16 ){
        alert(`Enter a valid card number`)
    }
    else if(expmonth.value>12){
        alert(`Enter a valid month`)
    }
    else if(expyear.value<2022){
        alert(`Enter a valid year`)
    }
    else if(cvv.value.length != 3){
        alert(`Enter a valid cvv`)
    }
    else{
    if(theform.checkValidity()){
        // event.preventDefault();
          alert(`Thank you ${fullname.value} for your  donation`);
          window.location.reload();
    }
}
}