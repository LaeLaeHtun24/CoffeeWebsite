document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dealPopup").style.display = "block";
});

function closeDeal() {
    document.getElementById("dealPopup").style.display = "none";
}

function startOrder() {
    window.location.href = "coffeeselection.html"; 
}

function startSubscribe() {
    window.location.href = "shooping.html"; 
}