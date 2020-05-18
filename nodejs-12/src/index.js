const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function getShoppingCart(ids, productsList) {
  const filterProducts = productsList.filter((product) =>
    ids.includes(product.id)
  );

  const categories = filterProducts.map((product) => {
    return product.category;
  });

  const countCategories = categories.filter(
    (value, index, arr) => arr.indexOf(value) == index
  ).length;
  const getPromotion = promotions[countCategories - 1];

  const getTotalRegularPrice = filterProducts
    .reduce((sum, product) => sum + product.regularPrice, 0)
    .toFixed(2);

  const getTotalPrice = filterProducts
    .reduce((sum, product) => {
      let valuePromotion = product.promotions.find((valuePromotion) => {
        return valuePromotion.looks.includes(getPromotion);
      });

      if (!valuePromotion) {
        valuePromotion = { price: product.regularPrice };
      }

      return sum + valuePromotion.price;
    }, 0)
    .toFixed(2);

  const getDiscountValue = (getTotalRegularPrice - getTotalPrice).toFixed(2);

  const getDiscountPercentage =
    ((getDiscountValue / getTotalRegularPrice) * 100).toFixed(2) + "%";

  const getProducts = filterProducts.map((product) => {
    return {
      category: product.category,
      name: product.name,
    };
  });

  const result = {
    products: getProducts,
    promotion: getPromotion,
    totalPrice: getTotalPrice,
    discountValue: getDiscountValue,
    discount: getDiscountPercentage,
  };

  return result;
}

module.exports = { getShoppingCart };
