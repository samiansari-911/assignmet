class Father{
    constructor(name,age,phone,email,address){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.email=email;
        this.address=address
    }

}

class son extends Father{
    constructor(name,age,phone,email,address){
        super(name,age,phone,email,address)
    }
}

let parent= new Father('Sami','19','0312645300','sami@email.com','karachi'+"<br>")
let child= new son('Ahmed','20','0326763459','Ahmed@email.com','lahore')

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