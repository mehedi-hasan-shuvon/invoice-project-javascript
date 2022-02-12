document.getElementById('detail-submit-btn').addEventListener('click', function () {

    const buyerDetails = document.getElementById('buyer-details-input');
    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = buyerDetails.value;
    buyerDetails.value = '';
});

document.getElementById('add-details-btn').addEventListener('click', function () {

    const itemName = document.getElementById("item-name-input");
    const itemPrice = document.getElementById("item-price-input");
    const itemQuantity = document.getElementById("item-quantity-input");

    console.log(itemName.value, itemPrice.value, itemQuantity.value);
    /*
        <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
    */

    if (isNaN(parseFloat(itemPrice.value)) || isNaN(parseFloat(itemQuantity.value))) {
        alert("please enter a valid input");
    } else if (itemPrice.value < 0 || itemQuantity.value < 0) {
        alert("cann't deposit negetive value");
    }
    else {


        const totalPrice = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value);
        const infoTable = document.getElementById('info-table');
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        th.innerText = itemName.value;
        td1.innerText = itemPrice.value;
        td2.innerText = itemQuantity.value;
        td3.innerText = totalPrice;
        console.log(totalPrice);
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        infoTable.appendChild(tr);

        td3.classList.add('item-total');

        const subtotal = calculateSubTotal();
        document.getElementById('sub-total').innerText = subtotal;

        const tax = taxCalculation();
        document.getElementById('tax').innerText = tax.toFixed(2);
        const total = totalCalculation();
        document.getElementById('grand-total').innerText = total;
        document.getElementById('grand-total-2').innerText = total;

    }
})

function totalCalculation() {
    const subtotal = calculateSubTotal();
    const tax = taxCalculation();
    const total = subtotal + tax;
    return total;


}


function calculateSubTotal() {
    let subtotal = 0;
    const costs = document.getElementsByClassName('item-total');

    for (const cost of costs) {
        subtotal = subtotal + parseFloat(cost.innerText);
    }
    return subtotal;

}

function taxCalculation() {

    const subtotal = calculateSubTotal();
    const tax = subtotal * 0.2;
    return tax;

}