function checkfunction(ids){
    if(ids.checked == false){
        console.log('no');
        document.getElementById(ids.value).style.cssText = 'border:0px solid';
        document.getElementById(ids.placeholder).style.cssText = 'background-color:#177ac1';
    }else{
        console.log('yes');
        console.log( typeof container_id);
        document.getElementById(ids.value).style.cssText = 'border:4px solid #13be9e';
        document.getElementById(ids.placeholder).style.cssText = 'background-color:#13be9e';
    }
}

var header = document.getElementById("bar_nav");
var sticky = header.offsetTop;
window.onscroll = function() {myFunction()};
function myFunction() {
if (window.pageYOffset > sticky) {
   header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
  }
}
