{
    let name:string= "Shubham"; //name variable of type string
    let age:number= 24;//age variable of type number
    let isStudent:boolean= true;// isStudent variable of type boolean
    let hobbies:string[] = ["Reading", "Traveling", "Gaming"];// hobbies variable of type array of strings
    let address:{ street: string; city: string; } = { street: "123 Main St", city: "New York" };// address variable of type object with street and city properties
    let tupleExample:[string, number] = ["Shubham", 24];// tupleExample variable of type tuple with string and number elements
    let unionExample:string | number = "Hello";// unionExample variable of type union with string or number
    unionExample = 42;// reassigning unionExample to a number
    let state ;// state variable of type any (implicitly any)
    let nullValue:null = null;// nullValue variable of type null used for?   //used to represent the absence of a value or a null reference. 

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Is Student: " + isStudent);
    console.log("Hobbies: " + hobbies.join(", "));
    console.log("Address: " + address.street + ", " + address.city);
    console.log("Tuple Example: " + tupleExample[0] + ", " + tupleExample[1]);
    console.log("Union Example: " + unionExample);
    console.log("State: " + state);
    console.log("Null Value: " + nullValue);
}