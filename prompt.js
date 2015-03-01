 var prompt = require('prompt');
 var schema = {
    properties: {
      username: {
        pattern: /^[a-z\-\d_]+$/,
        message: 'Username must be only lowercase letters, numbers, underscores or dashes',
        required: true
      },
      email: {
        pattern: /^(?:[a-zA-Z]+)\.(?:[a-zA-Z]+)@(?:[a-zA-Z]+)\.(?:[a-zA-Z]+)$/,
        message: 'Not written in proper email format.',
        required: false
        },
      password: {
        hidden: true
      }
    }
  };
 
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: email, password 
  // 
  prompt.get(schema, function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  name: ' + result.username);
    console.log('  email: ' + result.email)
    console.log('  password: ' + result.password);
  });