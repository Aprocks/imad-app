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
var submit = document.getElementById('submit-btn');
submit.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE) {
            //Take some action
            if(request.status == 200) {
              var names = request,responseText;
              names = JSON.parse(names);
              var list = '';
              for(var i=0; i< names.length; i++)
              {
                  list += '<li>' + names[i] + '</li>' ;
              }
            var ul = document.getElementById('namelist');
  
             ul.innerHTML = list;
            }
        }
};
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://aapatel1011.ap.imad.hasura-app.io/submit-name?name=' +name,true);
    request.send(null);
};

