var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
    request.open("GET", `https://raw.githubusercontent.com/jigjp/intern_exam/master/fukui_event.json`);
    request.addEventListener("load", (event) => {
        console.log(request.responseText); // => "{...}"
    });
    request.send();
