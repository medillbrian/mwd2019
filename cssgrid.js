// Handling JSON locally
var txt = '[{"headline":"Story headline goes here", "img":"https://via.placeholder.com/150", "description":"This is a story description"},{"headline":"Story 2 headline goes here", "img":"https://via.placeholder.com/175", "description":"This is a story description"},{"headline":"Story 3 headline goes here", "img":"https://via.placeholder.com/200", "description":"This is a story description"}]';
var items = JSON.parse(txt);
document.getElementById("main").innerHTML = items[0].headline + ", " + items[0].description;

// Handling JSON via the server. You'll need MAMP or WAMP for this to work.
function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'sitelinks.json', true); // Replace 'sitelinks.json' with the path to your own file
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
    json = JSON.parse(results); // convert the text into json object

    console.log(json.topMenuLinks); // start to access individual objects - an array
    console.log(json.topMenuLinks[0].text); // see a single item in an array

    // you can also loop through results
    var topmenu = json.topMenuLinks;
    console.log(topmenu.length); // see the item count

    for(var i = 0; i < topmenu.length; i++) {

        var obj = topmenu[i];
        console.log(obj.text);
    }

});

// jQuery to introduce a new object and add content
$(document).ready(function(){
    $("#more").html($("<img>",{src:items[0].img}));
});