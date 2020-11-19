
export async function getAllSearchProduct() {
    const response = await fetch('/product');
    return await response.json();
}


export async function searchProduct(product) {
    const response = await fetch(`/product/search`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({productName: product})
    })
    return await response.json();
}

export async function deleteSearch(keySearch) {
    const response = await fetch(`/api/todo/${keySearch}`, {method: 'DELETE'})
    return await response.json();
}

// export async function editTask(data) {
//     const response = await fetch(`/api/todo`, {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({task: data})
//     })
//     return await response.json();
// }