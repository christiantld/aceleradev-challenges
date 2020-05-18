const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function getShoppingCart(ids, productsList) {

	const products = getProductNameAndCategorie(filterProduct, ids, productsList)
	const promotion = getPromotion(products)
	const totalPrice = getTotalPrice(product, promotion)
	const discountValue  =`${ (getRegularPrice(products) - totalPrice).toFixed(2)}`
	const discount = `${((totalPrice / getRegularPrice(products)) * 100).toFixed(2)}%`,


	function filterProduct(ids, productsList){
		return productsList.filter((product) => ids.includes(product.id));
	}
	
	function getProductNameAndCategorie(products) {
		const products = filterProduct(ids, productsList)
		return products.map(product => {return {name: product.name, category: product.category}})
	}
	
	function getPromotion(products) {
		const categories = [...new Set(products.map(product => product.category))]
		return promotions[categories.length  - 1]
	}
	
	function getPromotionPrice(product, promotion) {
		let promotion = product.promotions.filter((promotion) =>
			promotion.looks.includes(promotion)
		);
		if (promotion.length === 0) {
			return product.regularPrice;
		}
		return promotion[0].price;
	}
	
	function getTotalPrice(products, promotion){
		return products.reduce((acc, product) => acc + getPromotionPrice(product, promotion),0)
	}
	
	function getRegularPrice(products){
	return products.reduce((acc, product) => acc + product.regularPrice, 0);
	}

  const result = {
    products,
    promotion,
    totalPrice,
    discountValue,
    discount,
  };

  return result
}

module.exports = { getShoppingCart};