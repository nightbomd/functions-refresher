// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet() {
  // TODO: Write your code here
  const name = prompt("what is your name?");

  if (!name || name.trim() === "") {
    render("<p class = text-muted >Hello there </p>")
  }
  render(`<p> Hello, ${name} !`);
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers() {
  // TODO: Write your code here\
  const nums = prompt("Enter a list of numbers separated by commas");

  if (!nums) {
    render("<p class = text-muted >No numbers provided.</p>");
  }
  const numArray = nums.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));


  const list = numArray.map(n => `<li class = "list-group-item">${n}</li>`).join(", ")
  render(`<div>
    <p> <strong>The average of the numbers is ${Math.floor(numArray.reduce((acc, curr) => acc + curr, 0) / numArray.length || 0)}</strong></p>
    <ul>${list}</ul>
    </div>`);
}


/* 
  Function 3 — timeOfDay()`
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay() {
  const date = new Date();
  const hour = date.getHours();

  let msg = "";
  if (hour > 6 && hour < 12) {
    msg = "Good morning!";
  } else if (hour >= 12 && hour < 15) {
    msg = "Good afternoon!";
  } else if (hour >= 15 && hour < 18) {
    msg = "Good evening!";
  }
  else {
    msg = "Good night!";
  }

  render(`<p>${msg}</p>`);
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween() {
  // TODO: Write your code here
  const min = parseFloat(prompt("Enter a min number"))
  const max = parseFloat(prompt("Enter a max number"))

  if ((isNaN(min) || isNaN(max)) || min >= max) {
    render("<p class = text-muted> Invalid Input</p>");
  }
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  render(`<p> the random number is betwween ${min} and ${max}, and is ${randomNum}</p>`);

}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput() {
  render("<p class = text-muted> </p>")
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

const changeColor = () => {
  const colors = ["red", "green", "blue", "orange", "purple"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.getElementById('out').style.color = colors[randomIndex];
}
const changeColorDiv = () => {
  const colors = ["blue", "green", "yellow", "orange", "black", "purple", "red", "pink", "brown", "gray"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.getElementById('outputCard').style.backgroundColor = colors[randomIndex];
}
const bodyColorChange = () => {
  const colors = ["blue", "green", "yellow", "orange", "black", "purple", "red", "pink", "brown", "gray"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}
const epilepsy = () => {
    const p = prompt("Are you sure you want to do this? This may cause seizures for some people. Type 'yes' to continue.");
    if (p.trim().toLowerCase() !== "yes") {
        return;
    }
    setInterval(bodyColorChange, -10);
  
}
const squareNum = () => {
  const num = parseFloat(prompt("Enter a number u wanna square"));
  return render(`<p>The square of ${num} is ${Math.floor(num * num)}</p>`);
}
const changeTitle = () => {
  const newTitle = prompt("Enter a new title for the page:");

  newTitle ? document.getElementById('title').textContent = newTitle : alert("No title entered.");
}
/* 

  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/
