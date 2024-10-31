function updateTotal() {
    let total = 0;
  
    for (let i = 1; i <= 8; i++) {
      const checkbox = document.getElementById(`product${i}`);
      const quantityInput = document.getElementById(`quantity${i}`);
      if (checkbox.checked) {
        const price = parseFloat(checkbox.value);
        const quantity = parseInt(quantityInput.value);
        total += price * quantity;
      }
    }
  
    const deliveryOption = document.querySelector('input[name="delivery"]:checked').value;
    if (deliveryOption === "domicilio") {
      total += 5.00;
    }
  
    document.getElementById("totalPrice").innerText = `Total: Q${total.toFixed(2)}`;
  }
  
  function togglePurchaseButton() {
    const confirmCheck = document.getElementById("confirm");
    const purchaseButton = document.getElementById("purchaseButton");
    purchaseButton.disabled = !confirmCheck.checked;
  }
  
  function makePurchase() {
    let selectedProducts = [];
    let total = parseFloat(document.getElementById("totalPrice").innerText.replace("Total: Q", ""));
  
    for (let i = 1; i <= 8; i++) {
      const checkbox = document.getElementById(`product${i}`);
      const quantityInput = document.getElementById(`quantity${i}`);
      if (checkbox.checked) {
        const productName = checkbox.nextElementSibling.innerText;
        const quantity = parseInt(quantityInput.value);
        selectedProducts.push(`${productName} - ${quantity} unidades`);
      }
    }
  
    if (selectedProducts.length === 0) {
      alert("Por favor, selecciona al menos un producto.");
      return;
    }
  
    alert(`Compra realizada:\n${selectedProducts.join("\n")}\nTotal: Q${total.toFixed(2)}`);
  }
  