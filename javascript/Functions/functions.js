
    

{


    //write function to check if a number is prime or not
    function isPrime(num) {
        if (num <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    isPrime(7); // true
    console.log(isPrime(10)); // false


    //write fucntion to check if a number is even or odd by uservalue
    function isEvenOrOdd(num) {
        if (num % 2 === 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }

    console.log(isEvenOrOdd(5)); // "Odd"
    console.log(isEvenOrOdd(8)); // "Even"


    // assign value to both functions and call them accepting user input
    //important to use parseInt to convert the string input to a number
    
    // let userNumber = parseInt(prompt("Enter a number: "));
    // console.log(isPrime(userNumber));
    // console.log(isEvenOrOdd(userNumber));

    
}
//ReferenceError: prompt is not defined?
