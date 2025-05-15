const calculateTotalPrice = (quantity = 2, price = 15000000) => {
    const total = quantity * price;
    const formattedTotal = total.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    });
    
    alert(`Стоимость покупки: ${formattedTotal}`);
    
    const resultContainer = document.querySelector('.result-container');
    resultContainer.textContent = `Итоговая стоимость: ${formattedTotal}`;
}