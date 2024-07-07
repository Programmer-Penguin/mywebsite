var elements = [];

elements.push(document.querySelector('body'));
elements.push(document.querySelector('h1'));
elements.push(document.querySelectorAll("button"));
elements.push(document.querySelectorAll("a"));


var radio_buttons = [];
radio_buttons.push(document.getElementById("light_radio"));
radio_buttons.push(document.getElementById("dark_radio"));

var radio_result = document.getElementById("radio_result");

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
    await sleep(200);
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
        document.getElementById('fizzbuzz_text').innerHTML += output + '<br>'; // Add a line break
        await sleep(5);
        window.scrollTo(0, document.body.scrollHeight + 10);
    }

}
function FB_reset()
{
    document.getElementById("fizzbuzz_text").innerHTML = "<br>";
}

function change_theme()
{
    // if light mode:
    if (radio_buttons[0].checked)
    {
        elements[0].style.backgroundColor = 'white';
        elements[1].style.color = 'black';

        elements[2].forEach(function(button)
        {
            button.style.color = 'black';
            button.style.backgroundColor = 'white';
        });


        elements[3].forEach(function(link)
        {
            link.style.color = "#2a4b8d";
        });
        document.getElementsByClassName("theme_submit_button")[0].style.color = 'grey';
        document.getElementById("welcome_sign").innerHTML = "goodbye";
        document.getElementsByClassName("penguin_pfp")[0].style.border = "5px solid black";
    }
    // elif dark mode:
    else if (radio_buttons[1].checked)
    {
        elements[0].style.backgroundColor = 'black';
        elements[1].style.color = 'blue';

        // for each button, change color to blue and bg to black
        elements[2].forEach(function(button) 
        {
            button.style.color = 'blue';
            button.style.backgroundColor = 'black';
        });
 
        elements[3].forEach(function(link)
        {
            link.style.color = "red";
        });
        document.getElementById("change_theme_button").style.color = "grey";
        document.getElementsByClassName("penguin_pfp").style.border = "5px solid blue";
    }
    // else idk:
    else
    {
        console.log("idk man");
    }
}

async function count_vowels()
{
    let input_box = document.getElementById("vowel_counter_input")
    let result = document.getElementById("V_counter_result")
    let vowels = "aeiou";

    let count = 0;
    for (let c of input_box.value)
    {
        if (vowels.includes(c.toLowerCase()))
        {
            count++;
        }
    }
    if (count > 1)
    {
        result.innerHTML = `There are ${count} vowels`;
    }
    else if (count == 1)
    {
        result.innerHTML = `There is ${count} vowel.`;
    }
    else
    {
        result.innerHTML = `There are no vowels.`;
    }
    await sleep(2000);
    result.innerHTML = "";
    input_box.value = "";
}

document.getElementById("vowel_counter_input").addEventListener("keyup", function(event)
{
    if (event.key === "Enter")
    {
        count_vowels();
    }
});
