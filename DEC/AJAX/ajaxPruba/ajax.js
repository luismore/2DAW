window.onload = () =>{

    document.getElementById("btn").addEventListener("click", peticionAjax)


}

function peticionAjax(){
    var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("titulo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:3000/DEC/AJAX/ajaxPruba/ajax.txt", true);
  xhttp.send();
}