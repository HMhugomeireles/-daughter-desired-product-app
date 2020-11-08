
function calculateCreditsBaseOnProductPrice(productPrice) {
    return Math.floor(productPrice * 2.45 * 10)
}



module.exports = {
    calculateCreditsBaseOnProductPrice
}