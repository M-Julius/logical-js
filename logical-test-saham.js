function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}

console.log(maxProfit([5, 6, 15, 3, 10, 22, 15]));
console.log(maxProfit([10, 15, 8, 7, 14]));
