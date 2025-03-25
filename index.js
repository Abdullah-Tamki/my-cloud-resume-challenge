// updating view counter
const counter = document.querySelector(".couter-number");  
async function updateCounter(){
    let response = await  fetch("https://dzbqgi4c6ev2mzuiz5bxsv4mvy0oglby.lambda-url.eu-west-2.on.aws/"); // calling the lambda function
    let data = await response.json(); // getting the respone with views number
    counter.innerHTML = ` Views: ${data.views}`
}

updateCounter();
