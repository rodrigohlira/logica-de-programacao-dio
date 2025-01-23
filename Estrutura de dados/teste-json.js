/*

## Sem Json

let name = "Rodrigo"
let age = 27;
let products = ["Monitor", "Mouse", "Teclado"];
let productsValues = [899.99, 129.99, 149.99];

function generateInvoice(name, age, products, productsValues){
    console.log(`O comprador é ${name}`);
    console.log(`A idade é ${age}`);
    console.log("-----------------------------------")
    console.log(`O produto é ${products[0]}`);
    console.log(`O valor é ${productsValues[0]}`);

}

generateInvoice(name, age, products, productsValues);]

*/

let invoice = {
    name: "Rodrigo",
    age: 27,
    products: {
        0: ["Monitor", 899.99],
        1: ["Mouse", 129.99],
        2: ["Teclado", 149.99]
    }
}

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);
    console.log("-----------------------------------")
    
    for (let index in invoice.products) {
        let [productName, productPrice] = invoice.products[index];
        console.log(`- ${productName}: R$ ${productPrice}`);
    }

}

generateInvoice(invoice);