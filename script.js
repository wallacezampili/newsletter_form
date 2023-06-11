document.addEventListener("DOMContentLoaded", () => {
    
    var form = document.querySelector(".form");
    var input = document.getElementById("email");
   
    form.addEventListener("submit", (event) => {

        var email = input.value

        event.preventDefault()

        if(email.includes("@"))
        {
            var container = document.querySelector(".container");
            container.classList.add("invisible")
            document.querySelector(".email-span").innerText = email

            document.querySelector(".success-container").classList.remove("invisible")
        }
        else
        {
            input.classList.add("form-error")
            document.querySelector(".error-alert").classList.add("visible")
        }
    });

    document.querySelector(".dismiss").addEventListener("click", () => {
        var container = document.querySelector(".container");
        container.classList.remove("invisible")
        document.querySelector(".success-container").classList.add("invisible")
        input.classList.remove("form-error")
        document.querySelector(".error-alert").classList.remove("visible")
        input.value = ""
    })


});
