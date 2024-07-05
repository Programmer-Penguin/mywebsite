var visitCount = localStorage.getItem("page_view") || 1;

// Increment the count on each visit
visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);

// Display the count
document.getElementById("counter-value").innerHTML = visitCount;

// Reset the counter
function resetCounter()
{
    localStorage.removeItem("page_view");
    document.getElementById("counter-value").innerHTML = 1;
}
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


// FizzBuzz function
async function FizzBuzz() 
{
    document.getElementById("fizzbuzz_text").innerHTML = "";
    await sleep(1000);
    for (let i = 0; i <= 100; i++)
    {
        let output = "";
        if (i % 3 == 0) 
        {
            output += "Fizz";
        }
        if (i % 5 == 0) 
        {
            output += "Buzz";
        } else if (output === "") 
        {
            output = i;
        }
        // Append the output to an existing element (e.g., a <div> with id "fizzbuzz_text")
        document.getElementById("fizzbuzz_text").innerHTML += output + "<br>"; // Add a line break
        await sleep(5);
        window.scrollTo(0, document.body.scrollHeight + 10);
    }

}
function FB_reset()
{
    document.getElementById("fizzbuzz_text").innerHTML = "<br>";
}

document.querySelector('form').addEventListener('submit', function(event) 
{
    alert('hello, ' + document.querySelector('#name').value);
    event.preventDefault();
});
