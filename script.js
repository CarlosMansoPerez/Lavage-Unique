document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalSpan = document.getElementById("total");
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function() {
        let totalPrice = 0;
        checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
            totalPrice += parseInt(checkbox.getAttribute("data-price"));
          }
        });
        totalSpan.textContent = totalPrice;
      });
    });
  });
  