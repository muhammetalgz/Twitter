function active() {
    document.getElementById('close').setAttribute("class", "navbar");
}
function remove() {
    document.getElementById('close').setAttribute("class", "remove");
}
function openmenu() {
    var element = document.getElementById("message");
    element.classList.toggle("open");
}