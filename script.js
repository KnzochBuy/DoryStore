function toggleList(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function closeBox(id) {
    var element = document.getElementById(id);
    element.style.display = "none";
}