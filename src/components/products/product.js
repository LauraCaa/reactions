import React, { useState } from 'react';
import ProductAmount from "./product-amount"
export default function Product(){
    // se crea un array con todos los objetos que necesitamos
    const [products, setProducts] = useState([
        {name:"papas", price: 1500, stock: 5},
        {name:"chitos", price: 2500, stock: 3},
        {name:"chocorramo", price: 2000, stock: 4},
        {name:"helado", price: 3000, stock: 6},
        {name:"gaseosa", price: 5000, stock: 8},
    ]);

    function updatePrice(index, newPrice) {
        const updatedProducts = [...products];
        updatedProducts[index].price = newPrice;
        setProducts(updatedProducts);
      }
    return (
        <>
            {/* iterar listas para imprimirlas en el html */}
            {products.map((product, index) => (
                // necesita una llave para ser identificado mas facil
                <tr key={product.name}>
                {/* contenido especifico de la tabla */}
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <ProductAmount
                            price={product.price}
                            updatePrice={(newPrice) => updatePrice(index, newPrice)}
                        />
                    </td>
                </tr>
            ))} 
        </>
    )
}