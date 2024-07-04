const { sleep } = require('util')
var visitCount = localStorage.getItem("page_view") || 1

// Increment the count on each visit
visitCount = Number(visitCount) + 1
localStorage.setItem("page_view", visitCount)

// Display the count
document.getElementById("counter-value").innerHTML = visitCount

// Reset the counter
function resetCounter()
{
    localStorage.removeItem("page_view");
    document.getElementById("counter-value").innerHTML = 1;
}


// FizzBuzz function
function FizzBuzz()
{
    for (let i = 0; i <= 100; i++)
    {
        let output = "";
        if (i % 3 == 0) {output += "Fizz";}
        if (i % 5 == 0) {output += "Buzz";}
        else {output = i}
        // document.getElementById("fizzbuzz_text").innerHTML = output
        console.log(output)
        sleep(1000)
    }
}