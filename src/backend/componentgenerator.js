const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
console.log(process.env)

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is the code you wanna generate? ", async function (userInput) {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${userInput}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      
      console.log(response)
});