function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    if (name === "" || email === "") {
      alert("Por favor, completa todos los campos");
      return false;

    }
   
    return true;

    
}