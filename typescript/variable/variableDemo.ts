{let userName:String = "SHubham"; 

console.log("userName : "+userName);

 userName ="Koli";
 console.log("Reassigned - userName : "+userName);


 var EmpName:String = "NIranjan";
  console.log("EmpName : "+EmpName);
 var EmpName:String ="Mane";
 console.log("Reassigned - EmpName : "+EmpName);
type Person = {
  name: string;
  age: number;
};

let person: Person = { 
name: "Shubham",
age: 24
};

 console.log(users());
 console.log(greet(person));



function greet(Person: Person): string {
    return "Hello, " + person.name + ", you are " + person.age + " years old.";
}
 

}



function users():String{
    if(true){
        let Emp1:String ="Shubham KOli";
        return Emp1;
    }

}