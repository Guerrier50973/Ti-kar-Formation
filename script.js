document.addEventListener("DOMContentLoaded", () => {
    const passagerBtn = document.querySelector("#passager");
    const chauffeurBtn = document.querySelector("#chauffeur");
  
    passagerBtn.addEventListener("click", () => {
      alert("Bienvenue passager ! 🚗");
    });
  
    chauffeurBtn.addEventListener("click", () => {
      alert("Bienvenue chauffeur ! 🛣️");
    });
  });
  