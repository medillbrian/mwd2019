// Handling JSON locally
var txt = '{"name":"John", "age":30, "city":"New York"}';
var items = JSON.parse(txt);
document.getElementById("main").innerHTML = items.name + ", " + items.age;

// Handling JSON via the server. You'll need MAMP or WAMP for this to work.
function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'sitelinks.json', true); // Replace 'appDataServices' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

loadJSON(function(results) {
    console.log(results); // this will list the response out as text
    json = JSON.parse(results); // conver the text into json object

    console.log(json.topMenuLinks); // start to access individual objects
    console.log(json.topMenuLinks[0].text); // see the item count

    // you can also loop through results

    var topmenu = json.topMenuLinks;
    console.log(topmenu.length);

    for(var i = 0; i < topmenu.length; i++) {

        var obj = topmenu[i];
        console.log(obj.text);
    }

});