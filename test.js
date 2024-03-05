function showMessage(hideOrShow) {
  if(hideOrShow){
    document.getElementById("demo").innerHTML = "Hello, JavaScript!";
  }else{
    document.getElementById("demo").innerHTML = "";
  }
}