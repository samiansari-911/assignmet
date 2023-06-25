class Father{
    constructor(name,age,phone,email){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.email=email;
    }

}

class son extends Father{
    constructor(name,age,phone,email){
        super(name,age,phone,email)
    }
}

let parent= new Father('Ali','30','0312799900','Ali@email.com'+"<br>")
let child= new son('Imran','19','0326778099','Imran@email.com')

console.log(parent);
console.log(child);

// this is father
for(let p in parent){
    document.write(p+':'+parent[p]+'<br>')
}

// this is son
for(let c in child){
    document.write( c+':'+child[c]+'<br>')

}