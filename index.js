function myFunction() {
    let copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied " + copyText.value;
}

function outFunc() {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy code";
}
