let car={

    Name:'Audi',
    Model:'2022',
    Color:'black',
    Prize:'95Lakh',
    Fuel:'Petrol/Diesel',
    Engine:'2500 cc - 2300cc'
}


function object() {
    console.log(car);

    for(let a in car){
        document.write(a+':'+car[a]+"<br>")
    }
}

object()
