

///mens section
fetch("https://dummyjson.com/products/category/groceries").then((e) => {
    return e.json()
}).then((jsondata) => {
    let contain = document.querySelector('.container')
    jsondata.products.forEach((e) => {

        let jdata = document.createElement('div')
        jdata.innerHTML = `
      <h2>${e.category}</h2>
      <h3>${e.title}</h3>
      <p>${e.description.slice(0,100)}</p>
      <img src="${e.images}"/>
      <h1>${e.price}</h1>
      <p>${e.rating}</p>
    `
        contain.appendChild(jdata)
    })

}

)

