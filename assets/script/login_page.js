var attempt = 5

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Admin123" && password == 654321) {
        alert("You successfully logged your account")
        window.location = "./index.html" ; 
        // You  must enter right html location for redirecting
        return false
    }
    else {
        attempt--;
        alert("You have left "+attempt+"attempt;");
        if (attempt == 0) {
            document.getElementById("username").disabled = true
            document.getElementById("password").disabled = true
            document.getElementById("submit").disabled = true
            return false
        }
    }
}