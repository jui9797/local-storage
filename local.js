const addProduct =() =>{
    const productField =document.getElementById('product')
    const quantityField =document.getElementById('quantity')
    const product =productField.value
    const quantity =quantityField.value
    productField.value=''
    quantityField.value =''
    console.log(product, quantity)
    displayProduct(product, quantity)
    saveProductLocalStorage(product, quantity);
    
}
const displayProduct =(product, quantity)=>{
 const ul =document.getElementById('product-container')
 const li =document.createElement('li')
 li.innerText =`${product}, ${quantity}`;
 ul.appendChild(li)
}
const getStoredShoppingCart =() =>{
    const storedCart =localStorage.getItem('cart')
    let cart ={}
    if(storedCart){
        cart =JSON.parse(storedCart)
    }
    return cart;
}
const saveProductLocalStorage =(product, quantity)=>{
const cart =getStoredShoppingCart()
cart[product] =quantity
console.log(cart)
const cartStringified =JSON.stringify(cart)
console.log(cartStringified)
localStorage.setItem('cart', cartStringified)
}

const displayProductFromLocalStorage =()=>{
    const saveCart =getStoredShoppingCart()
    console.log(saveCart);
    for(const product in saveCart){
        const quantity= saveCart[product]
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}
displayProductFromLocalStorage();

