// updating view counter
const counter = document.querySelector(".couter-number");  
async function updateCounter(){
    let response = await  fetch("https://qios5trvjqmfolyxy4aymupjg40ljqsw.lambda-url.eu-west-2.on.aws/"); // calling the lambda function
    let data = await response.json(); // getting the respone with views number
    counter.innerHTML = ` Views: ${data}`
}

updateCounter();
