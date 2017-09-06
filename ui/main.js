//Counter Code
var button=document.getElementById('counter');
button.onclick = function() {
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the respone and store it in the variable
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE) {
            //Take some action
            if(request.status == 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        //not yet done
    };
    
    //Make the Request
    request.open('GET','http://aapatel1011.ap.imad.hasura-app.io/counter', true);
    request.send(null);
}; 
/*var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};*/
//submit Name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    //Makae a request to the server and send the name
    //Capture the list of names and render them it as list
    var names = ['name1','name2','name3'];
    var list = '';
    for(var i=0;i<names.length;i++)
    {
        list <- '<li>' +names[i]+ '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
}

