let i = 0;
let value = true;

function name() {
    let progressBar = document.getElementById("progress");
    progressBar.setAttribute("value", i);
    
    i = (i + 5) % 100;
    
    if (value) {
        setTimeout(name, 200); // Run name function again after 1 second
    }
}

document.addEventListener("keydown", function() {
    value = false; // Stop the loop when a key is pressed
    const x = document.getElementById("x");

    x.style.animation = "CloseCart 2s ease forwards";
    x.style.animationIterationCount = "1";
});

name(); 

