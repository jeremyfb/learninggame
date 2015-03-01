var HOST = '127.0.0.1';
var PORT = 31337;
var net = require('net'), client = net.connect({port: PORT, host: HOST}), prompt = require('prompt');
function onErr(err) {
    console.log(err);
    return 1;
  }
client.on('data', function(data){
  console.log('Server says: ' + data.toString());
  prompt.get("What would you like to reply with?", function (err, result) {
      if (err) {onErr(err);}
      //console.log(result)
      console.log('Command-line input received:');
      console.log('You put in: ' + result['What would you like to reply with?']);
      client.write(result["What would you like to reply with?"])
    });
});
client.on('close',function(){
  console.log('Server closed')
});