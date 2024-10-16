let subtotal = 0;
let gstAmount = 0;

function calculateFabricCost() {
    const fabricCost = parseFloat(document.getElementById('fabricCost').value) || 0;
    const fabricUsed = parseFloat(document.getElementById('fabricUsed').value) || 0;
    const costPerMeter = parseFloat(document.getElementById('costPerMeter').value) || 0;
    const fabricCostResult = fabricUsed * costPerMeter;
    document.getElementById('fabricCostResult').innerText = `Fabric Cost: $${fabricCostResult.toFixed(2)}`;
}

function calculateAsterCost() {
    const asterCost = parseFloat(document.getElementById('asterCost').value) || 0;
    const asterUsed = parseFloat(document.getElementById('asterUsed').value) || 0;
    const asterCostPerMeter = parseFloat(document.getElementById('asterCostPerMeter').value) || 0;
    const asterCostResult = asterUsed * asterCostPerMeter;
    document.getElementById('asterCostResult').innerText = `Aster Cost: $${asterCostResult.toFixed(2)}`;
}

function calculateSubtotal() {
    const fabricCost = parseFloat(document.getElementById('fabricCostResult').innerText.split('$')[1]) || 0;
    const asterCost = parseFloat(document.getElementById('asterCostResult').innerText.split('$')[1]) || 0;
    const accessoriesCost = parseFloat(document.getElementById('accessoriesCost').value) || 0;
    const labourCost = parseFloat(document.getElementById('labourCost').value) || 0;
    const shippingCost = parseFloat(document.getElementById('shippingCost').value) || 0;
    
    subtotal = fabricCost + asterCost + accessoriesCost + labourCost + shippingCost;
    document.getElementById('subtotalResult').innerText = `Subtotal: $${subtotal.toFixed(2)}`;
}

function calculateGST() {
    const gstRate = parseFloat(document.getElementById('gstRate').value) || 0;
    gstAmount = subtotal * (gstRate / 100);
    document.getElementById('gstResult').innerText = `GST Amount: $${gstAmount.toFixed(2)}`;
}

function calculateTotalPrice() {
    const totalPrice = subtotal + gstAmount;
    document.getElementById('totalPriceResult').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
}

function calculateMRP() {
    const profitPercentage = parseFloat(document.getElementById('profitPercentage').value) || 0;
    const totalPrice = parseFloat(document.getElementById('totalPriceResult').innerText.split('$')[1]) || 0;
    const mrp = totalPrice + (totalPrice * (profitPercentage / 100));
    document.getElementById('mrpResult').innerText = `MRP: $${mrp.toFixed(2)}`;
}
