# 🛒 E-commerce Product UI

A frontend e-commerce project that fetches and displays products category-wise using the DummyJSON API. Built using pure HTML, CSS, and JavaScript.

---

## 🚀 Project Overview

This project dynamically loads products from multiple categories and renders them on the UI using the Fetch API and DOM manipulation.

### Categories Included
- Beauty
- Electronics
- Men's Fashion
- Women's Fashion
- Groceries
- Jewellery

---

## 🧠 Features

- Category-wise product fetching
- Dynamic product cards
- API-based data rendering
- Responsive layout
- No frameworks used

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript (ES6)  
- DummyJSON API  

---

## 🔗 API Endpoint

https://dummyjson.com/products/category/{category-name}

Example:  
https://dummyjson.com/products/category/beauty

---

## 📄 JavaScript Code Example

```js
fetch("https://dummyjson.com/products/category/beauty")
  .then(res => res.json())
  .then(jsondata => {
    let container = document.querySelector('.container');

    jsondata.products.forEach(e => {
      let div = document.createElement('div');
      div.innerHTML = `
        <h2>${e.category}</h2>
        <h3>${e.title}</h3>
        <p>${e.description.slice(0, 100)}</p>
        <img src="${e.images[0]}" />
        <h1>₹${e.price}</h1>
        <p>⭐ ${e.rating}</p>
      `;
      container.appendChild(div);
    });
  });
