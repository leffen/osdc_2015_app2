var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');
 
client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt');
});

 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(topic + ':' + message.toString());
  client.end();
});
