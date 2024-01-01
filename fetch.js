fetch("https://dummyjson.com/products").then(x => x.text()).then(y => showData(y));

function showData(y) {

    let data = JSON.parse(y)
    let products = data.products
    console.log(products[0])

    // let card = document.createElement('div')
    // let img = document.createElement('div')

    for (product of products) {

        let cardContainer = document.querySelector('#card-container')

        let card = `<div id="card">
        <div id="card-img">

            <img src=${product.images[0]} alt="product not found">
        </div>
        <div>
            <div id="card-title">${product.title}</div>
            <div><span id="brand">${product.brand}</span> <span id="category">${product.category}</span></div>
            <div id="description"><p>${product.description}</p></div>
            <div id="price">$ ${product.price}</div>
        </div>
    </div>`

        cardContainer.innerHTML+=card
    }

}