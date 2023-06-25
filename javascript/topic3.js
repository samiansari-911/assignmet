let car={

    Name:'Honda Civic',
    Model:'2022',
    Color:'black',
    Prize:'15Lakh',
    Fuel:'Petrol/Diesel',
    Engine:'1597 cc - 1799 cc'
}


function object() {
    console.log(car);

    for(let a in car){
        document.write(a+':'+car[a]+"<br>")
    }
}

object()
