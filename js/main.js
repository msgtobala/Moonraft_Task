function postfunction(e){
    alert("hai");
    var name = document.getElementById('ass_name').value;
    var pass = document.getElementById('pass_num').value;
    var start = document.getElementById('date_start').value;
    var end = document.getElementById('date_end').value;
    var candidates = document.getElementById('no_candidates').value;
    var text = {
        "ass_name":name,
        "pass_num":pass,
        "start_date":start,
        "end_date":end,
        "no_candidates":candidates
     };
    console.log(text);
    var todoJSON = JSON.stringify(text);
    console.log(todoJSON);
    var xhr =new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log('php');
        }
    }
   
    
    var Url = "/php/store.php?data="+encodeURI(todoJSON);
    xhr.open('GET',Url);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    
}