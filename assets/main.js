const text = document.getElementById("sec-text");
const texts = ["Web developer", "Graphics Designer", "Video Editor"];
let index = 0;

const textLoad = () => {
    text.textContent = texts[index];
    index = (index + 1) % texts.length; // Wrap around to the beginning of the array
    setTimeout(textLoad, 6000); // Adjust the interval (in milliseconds) between text changes
}

textLoad(); // Call the function to start text rotation

function openService (evt, serviceName) {
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("tabcontents");

    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none"; 
    } 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active"; 
}

document.getElementById("default").click();