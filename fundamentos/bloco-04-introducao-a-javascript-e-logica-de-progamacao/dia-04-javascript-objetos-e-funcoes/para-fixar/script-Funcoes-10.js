function salesProft(productCost,saleValue,sales) {
  let productTax = productCost / 100 * 20;
  let totalCostAmont;
  let profit;

  if (productCost < 0 || saleValue < 0 || sales < 0) {
    console.log('Invalid value')
  } else {
    totalCostAmont = productCost + productTax;
    profit = saleValue - totalCostAmont;
    profit *= sales;
    console.log('Your proft is -> ' + profit);
  }
}

salesProft(223,691,999)