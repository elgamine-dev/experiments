console.log('%c web apis are fun', "font-size:200%; color:red; font-family:Cursive;")

document.title = "We don't know yet"

// visibility stuff
const visibilityStateNode = document.querySelector("#visibility-state")
if (typeof document.hidden === "undefined") {
    document.title = " visibility API not  supported"
    visibilityStateNode.innerHTML = "✖️"
} else {
    visibilityStateNode.innerHTML = "✔️"
}

document.addEventListener("visibilitychange", handleVisibilityChange)

function handleVisibilityChange() {
    document.title = document.hidden && "🙅🏽‍♀️" || "👁"
}