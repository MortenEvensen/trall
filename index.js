document.getElementById("start").addEventListener("click", function() {
    const tall = document.getElementById("tall");
    let supertall = 0;

    setInterval(function() {
        supertall += 1;
        tall.innerHTML = supertall;
        sjekkTid(supertall)
    }, 1000)
})

function sjekkTid (supertall) {
    if (supertall === 5) {
        document.body.style.backgroundColor = "red";
    }
}