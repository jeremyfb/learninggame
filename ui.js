var prompt = require("prompt");
prompt.start();
// send message thing
function sendMessage(message) {
  console.log("Message to send: " + message);
}
// Function that asks the user for input based on the question that you give it.
function askToSend(ques){
  var que = ques || "Input Here"
  prompt.get([que], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('You put in: ' + result[que]);
    sendMessage(result[que]);
    return result[que];
  });
}

  function onErr(err) {
    console.log(err);
    return 1;
  }

  
// Make a function to print the output of a message
function messageRecived(string) {
//    log it to the console and return it
   console.log(string);
   return string;
}
askToSend("What should you say?")
// console.log(prompt)
