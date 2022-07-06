const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "";
let response = "";

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  name += `${answer}`;

  rl.question("What's an activity you like doing? ", (answer) => {
    response += `${name} enjoys doing ${answer} in their free time. `;

    rl.question("What do you listen to while doing that? ", (answer) => {
      response += `${name} likes listening to ${answer}.`;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        response += ` ${name}'s favourite meal is ${answer}.`;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          response += `${name}'s favourite thing to eat is ${answer}.`;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            response += ` ${name}'s favourite sport is ${answer}.`;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              response += ` ${name}'s superpower is ${answer}!`;

              rl.close();
              console.log(response);
            });

          });

        });

      });

    });

  });

});