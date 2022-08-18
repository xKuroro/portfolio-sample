
const arr = ["abde", "Acd", "aBcd"];
const res = arr.sort((a,b) => 
    a.localeCompare(b)
);
console.log(res)

class weUseNew<T>{
    name: T;
    constructor(name: T){
       this.name = name;
    }
    
    getName(): string{
        return `Hi ${this.name}`;
    }
}

const cl = new weUseNew<string>("Dendi");
const ar = new Object();
console.log(cl.getName())

async function sampleOfPromise() {
    
}