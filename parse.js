var tags = ['email', 'Name', 'Domain Name'], text, result;
var pars = /^([a-zA-Z]+)\.(?:[a-zA-Z]+)@([a-zA-Z]+)\.(?:[a-zA-Z]+)$/, prompt = require('prompt');
var schema = {
  properties: {
    'Your input here in email form': {
      pattern: /^(?:[a-zA-Z]+)\.(?:[a-zA-Z]+)@(?:[a-zA-Z]+)\.(?:[a-zA-Z]+)$/,
      message: 'Not written in proper email format.',
      required: true
    }
  }
}; 
function onErr(err) {
    console.log(err);
    return 1;
  }
// Start the prompt 
prompt.start();
// Get two properties from the user: email, password  
prompt.get(schema, function(err, result) {
  if(err){onErr(err);}
  // Log the results. 
  console.log('You put in: ' + result['Your input here in email form']);
  text = result['Your input here in email form'];
  result = pars.exec(text);
  if(result !== null){
    for(var i = 0; i < tags.length; i++){
        console.log(tags[i] + ': ' + result[i]);
    }
  }else{
    throw{name: 'SyntaxError', message: 'Failed to parse ' + text + ' because it does not work as an email.'};
  }
});