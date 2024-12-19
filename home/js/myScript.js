function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

function myFunction2() {
    const element = document.getElementsByTagName("div");
 
document.getElementById("demo").innerHTML = 'The text in first <div> tag (index 0) is: ' + element[0].innerHTML;
