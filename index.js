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

// Display the coun
if (document.getElementById("counter-value"))
{
    document.getElementById("counter-value").innerHTML = visitCount;
}



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
    for (let i = 0; i < 100; i++)
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
    document.getElementById('fizzbuzz_text').innerHTML += 'Buzz' + '<br>'; // Add a line break
    document.getElementById('fizzbuzz_text').innerHTML += `<a href="#theme_menu" style="color: blue;" onmouseover="this.style.color='blue';" onmouseout="this.style.color='#107be5';">go back to the top?</a>`; // Add a line break
    window.scrollTo(0, document.body.scrollHeight + 10);
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
}

// if (document.getElementById("vowel_counter_input"))
// {
//     document.getElementById("vowel_counter_input").addEventListener("keyup", function(event)
//     {
//         if (event.key === "Enter")
//             count_vowels();
//     });
// }

if (document.getElementById("vowel_counter_input"))
{
    document.addEventListener('DOMContentLoaded', function() 
    {
        let input = document.getElementById('vowel_counter_input');
        input.addEventListener('keyup', function(event) 
        {
            count_vowels()
        });
    });
}

if (document.getElementById("currency_input"))
    {
        document.addEventListener('DOMContentLoaded', function() 
        {
            let input = document.getElementById('currency_input');
            input.addEventListener('keyup', function(event) 
            {
                convert_currency();
            });
        });
    }


async function convert_currency()
{
    try
    {

        let first = document.getElementById("firstCurrencySelect").value; // value is pkr
        let second = document.getElementById("secondCurrencySelect").value; // value is aud
        let amount = document.getElementById("currency_input").value // value is 1
        let output = document.getElementById("currency_output")

        const cdn_res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${first}.json`);
        const flo_res = await fetch(`https://www.floatrates.com/daily/${first}.json`);
        const flo_res2 = await fetch(`https://www.floatrates.com/daily/${second}.json`);

        if (!cdn_res.ok && !flo_res.ok && !flo_res2.ok)
        {
            throw new Error("Could'nt fetch resource.");
        }
        let cdn_data = await cdn_res.json();
        let flo_data = await flo_res.json();
        let flo2_data = await flo_res2.json();

        let n = amount * cdn_data[first][second];
        let f_name = flo_data[second]["name"];
        let f_name2 = flo2_data[first]["name"];
        if (amount)
        {
            output.innerHTML = `${amount} ${f_name2} converted to ${f_name} is ${n.toLocaleString()}`;
        }
    }
    catch (error)
    {
        console.error('Error fetching currency data:', error);
    }
}

async function fetchFrom()
{
    try
    {
        const response = await fetch('https://www.floatrates.com/daily/aud.json');

        if (!response.ok)
        {
            throw new Error("Could'nt fetch resource.");
        }
        const data = await response.json();

        const selectElement = document.getElementById('firstCurrencySelect');
        for (const currencyCode in data)
        {
            const option = document.createElement('option');
            option.value = currencyCode;
            option.style.fontSize = `calc(6px + 0.390625vw)`;
            option.textContent = data[currencyCode].name;
            selectElement.appendChild(option);
        }
    }
    catch (error)
    {
        console.error('Error fetching currency data:', error);
    }
}

fetchFrom();

async function fetchTo() 
{
    try
    {
        const response = await fetch('https://www.floatrates.com/daily/usd.json');
        if (!response.ok)
        {
                throw new Error("Could'nt fetch resource.");
        }
        const data = await response.json();

        const selectElement = document.getElementById('secondCurrencySelect');
        for (const currencyCode in data)
        { 
            var option = document.createElement('option');
            option.value = currencyCode;
            option.style.fontSize = `calc(6px + 0.390625vw)`;
            option.textContent = data[currencyCode].name;
            selectElement.appendChild(option);
        }
    } 
    catch (error)
    {
        console.error('Error fetching currency data:', error);
    }
}

fetchTo();

