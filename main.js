const passData = require("./user");
let header;
function logData(data) {
    header = data;
}

passData(logData);

header == "home" && console.log("Home");
header == "task" && console.log("Task");
header == "profile" && console.log("Profile");