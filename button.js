AFRAME.registerComponent("create-buttons", {
    init: function(){
        var button1 = document.createElement("button")
        button1.innerHTML = "rate us"
        button1.setAttribute("id", "rating-button")
        button1.setAttribute("class", "buttons-class")
        var button2 = document.createElement("button")
        button2.innerHTML = "order now"
        button2.setAttribute("id", "order-button")
        button2.setAttribute("class", "buttons-class")
        var buttondiv = document.getElementById("button-div")
        buttondiv.appendChild(button2)
        buttondiv.appendChild(button1)
    }
})