document.addEventListener("DOMContentLoaded", () => {
    const passagerBtn = document.querySelector("#passager");
    const chauffeurBtn = document.querySelector("#chauffeur");
  
    passagerBtn.addEventListener("click", () => {
      window.location.href = "passager.html";
    });
  
    chauffeurBtn.addEventListener("click", () => {
      window.location.href = "chauffeur.html";
    });
  });
  