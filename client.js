const net = require("net");
const connect = function () {
    const conn = net.createConnection({
      host:'localhost', // IP address here,
      port: 50541 // PORT number here,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
   conn.on("connect", () => {
      console.log("Connected to the server!");
      // Perform actions after successful connection
  
      // Code to handle incoming data when the connection is first established
      conn.on("data", (data) => {
        console.log("Server says: ", data);
        // Perform actions with the received data
      });
    });
  
    conn.on("close", () => {
      console.log("Connection closed!");
      // Perform actions when the connection is closed
    });
  
    return conn;
  };

  module.exports = connect;