var prompt = require("prompt")
prompt.start();
function askForInput(ques){
  prompt.get(['Input'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('You put in: ' + result
    return result
  });

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
// Call it with 'hi' to test
messageRecived(askForInput());
