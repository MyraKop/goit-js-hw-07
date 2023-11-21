const itemList = document.querySelectorAll('.item')
console.log("Number of categories", itemList.length)

itemList.forEach(element => {
    const itemNames = element.firstElementChild;
    console.log('Category:', itemNames.textContent)

    const elementsName = itemNames.nextElementSibling;

    const elementsQuantity = elementsName.children;
    
    console.log('Elements:', elementsQuantity.length)
})