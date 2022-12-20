const increase1 = document.querySelector(".incbutton1");
const decrease1 = document.querySelector(".decbutton1");
const QTY1 = document.querySelector(".QTY1");

const increase2 = document.querySelector(".incbutton2");
const decrease2 = document.querySelector(".decbutton2");
const QTY2 = document.querySelector(".QTY2");

const increase3 = document.querySelector(".incbutton3");
const decrease3 = document.querySelector(".decbutton3");
const QTY3 = document.querySelector(".QTY3");

const increase4 = document.querySelector(".incbutton4");
const decrease4 = document.querySelector(".decbutton4");
const QTY4 = document.querySelector(".QTY4");

const increase5 = document.querySelector(".incbutton5");
const decrease5 = document.querySelector(".decbutton5");
const QTY5 = document.querySelector(".QTY5");
const theform = document.getElementById("form");

//button 1............
let x1=0;
increase1.addEventListener("click",function(){
    x1++;
    QTY1.innerText = x1;
    Duration()
});
decrease1.addEventListener("click",function(){
    if(x1>0){
        x1--;
}
    QTY1.innerText = x1;
    Duration()
});


//button 4............
let x2 = 0;
increase2.addEventListener("click",function(){
    x2++;
    QTY2.innerText = x2;
    Duration()
});
decrease2.addEventListener("click",function(){
    if(x2>0){
        x2--;
}
    QTY2.innerText = x2;
    Duration()
});


//button 3............
let x3 = 0;
increase3.addEventListener("click",function(){
    x3++;
    QTY3.innerText = x3;
    Duration()
});
decrease3.addEventListener("click",function(){
    if(x3>0){
        x3--;
}
    QTY3.innerText = x3;
    Duration()
});


//button 4............
let x4 = 0;
increase4.addEventListener("click",function(){
    x4++;
    QTY4.innerText = x4;
    Duration()
});
decrease4.addEventListener("click",function(){
    if(x4>0){
        x4--;
}
    QTY4.innerText = x4;
    Duration()
});


//button 5............
let x5 = 0;
increase5.addEventListener("click",function(){
    x5++;
    QTY5.innerText = x5;
    Duration()
});
decrease5.addEventListener("click",function(){
    if(x5>0){
        x5--;
}
    QTY5.innerText = x5;
    Duration()
});

const price = document.getElementById("price");
    
    let cost1;
    let cost2;
    let cost3;
    let cost4;
    let cost5;
    let total;
    
function Duration(){
    const duration = document.getElementById("duration").value;
    if(duration == "3_hours"){
        cost1 = x1*1200;
        cost2 = x2*700;
        cost3 = x3*5500;
        cost4 = x4*2700;
        cost5 = x5*0;
    }
    else if(duration == "Half_day"){
        cost1 = (x1*1200) + (x1*350);
        cost2 = (x2*700) + (x2*350);
        cost3 = (x3*5500) + (x3*450);            
        cost4 = (x4*2700) + (x4*450);
        cost5 = x5*0;
    }
    else if(duration == "Full_day"){
        cost1 = (x1*1200) + (x1*600);
        cost2 = (x2*700) + (x2*600);
        cost3 = (x3*5500) + (x3*800);
        cost4 = (x4*2700) + (x4*800);
        cost5 = x5*0;
    }
total = cost1 + cost2 + cost3 + cost4 + cost5;
price.innerText =`${total}`;
}

let noOfTickets = [];

function tableData(){
    let html = "<table border='0|0'>";
    setTimeout(() => {
        html += "<thead>";
        html += "<tr>";
        html += "<th>No.</th>";
        html += "<th>Sri Lankan<br>Adult</th>";
        html += "<th>Sri Lankan<br>Child</th>";
        html += "<th>Foreign Adult</th>";
        html += "<th>Foreign Child</th>";
        html += "<th>Infant</th>";
        html += "<th>Duration</th>";
        html += "<th>Amount</th>";
        html += "<th></th>";
        html += "</tr>";
        html += "</thead>";

        for (let i = 0; i < noOfTickets.length; i++) {
            let no = i+1;
            html += "<tr>";
            html += "<td>" + "(" + no + ")" + "</td>";
            html += "<td>" + noOfTickets[i].SLAdult + "</td>";
            html += "<td>" + noOfTickets[i].SLChild + "</td>";
            html += "<td>" + noOfTickets[i].FAdult + "</td>";
            html += "<td>" + noOfTickets[i].FChild + "</td>";
            html += "<td>" + noOfTickets[i].Infant + "</td>";
            html += "<td>" + noOfTickets[i].duration + "</td>";
            html += "<td>" + noOfTickets[i].Amount + "</td>";
            html += "<td>"+`<span class="remove" onclick='remove(${i})'>Remove</span>` + "</td>";
            html += "</tr>";
        }
        html += "</table>";
        document.getElementById("table").innerHTML = html;
    }, 10);
   grandTotal();
};

function addToOrder(){
    if(theform.checkValidity()){
        event.preventDefault();
   const duration = document.getElementById("duration").value;
    if(x1>0||x2>0||x3>0||x4>0||x5>0){
    let SLAdult = x1;
    let SLChild = x2;
    let FAdult = x3;
    let FChild = x4;
    let Infant = x5;
    let Duration = duration;
    let Amount = total;

        noOfTickets.push({
            SLAdult: SLAdult,
            SLChild: SLChild,
            FAdult: FAdult,
            FChild: FChild,
            Infant: Infant,
            duration: Duration,
            Amount: total
        })
    }
}
        tableData();
        Duration();
        clearNoOfTickets();
        addToFavourite();
}

function clearNoOfTickets(){
    x1 = 0; x2 = 0; x3 = 0; x4 = 0; x5 = 0;
    QTY1.innerText = 0;
    QTY2.innerText = 0;
    QTY3.innerText = 0;        
    QTY4.innerText = 0;
    QTY5.innerText = 0;
    price.innerText = 0;
}

function grandTotal(){
    let sum = 0;
    for (let i = 0; i < noOfTickets.length; i++){
    sum += noOfTickets[i].Amount;
    const grandtotal = document.getElementById("grand-price");
    grandtotal.innerText =`${sum}`;
    }
    
}

function remove(i){
    noOfTickets.splice(i,1);
    tableData();
}

function Purchase(){
    if(theform.checkValidity()){
      // event.preventDefault();
        alert(`Thank you for your purchase`);
        window.location.reload();
    }
}

function addToFavourite(){
    const duration = document.getElementById("duration").value;
        let local = {SLAdult: x1 , SLChild: x2, FAdult: x3, FChild: x4, Infant: x5, duration: duration, Amount: total};
        let jsonlocal = JSON.stringify(local);
        localStorage.setItem("Favourite", jsonlocal);
}
function orderFavourite(){
    if(theform.checkValidity()){
    let newlocal = localStorage.getItem("newlocal");
    let getnewlocal = JSON.parse(newlocal);
    }
    addToOrder();
}

function Loyalty(){
    let tickets = 0;
    for (let i = 0; i < noOfTickets.length; i++){
    tickets +=  noOfTickets[i].SLAdult + noOfTickets[i].SLChild + noOfTickets[i].FAdult + noOfTickets[i].FChild + noOfTickets[i].Infant}
    if(tickets>3){
    let points = tickets*15;
    alert(`You have ${points} loyalty points`);

    let Lpoints = {Loyaltypoints:points};
    let Loyaltypoints = JSON.stringify(Lpoints);
    localStorage.setItem("Loyalty points", Loyaltypoints);   
}
else{
    alert(`You don't have loyalty points`);
    let Lpoints = {Loyaltypoints:0};
    let Loyaltypoints = JSON.stringify(Lpoints);
    localStorage.setItem("Loyalty points", Loyaltypoints);
}
}






