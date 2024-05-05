
// Leap Year Cheker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Ticket Pricing
function TicketPricing(age) {
    // Change age to an integer
    age = parseInt(age);

    // Determine ticket price based on age
    let ticketPrice;

    if (age <= 12) {
        ticketPrice = 10;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15;
    } else {
        ticketPrice = 20;
    }

    // Return the ticket price
    return ticketPrice;
}

//Check
console.log("The movie ticket price is $" + TicketPricing(14));

//RECURSSION

//Fibonacci sequence
function fibonacci(n) {
    // Base case:
    if (n <= 1) {
        return n; 
    } else {
        // Recursive case: 
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

//Power Function
function power(base, exponent) {
    // Base case:
    if (exponent === 0) {
        return 1;
    }
    // Base case:
    else if (exponent === 1) {
        return base;
    }
    // Recursive case:
    else {
        return base * power(base, exponent - 1);
    }
}


