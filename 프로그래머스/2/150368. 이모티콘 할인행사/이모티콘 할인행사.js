function solution(users, emoticons) {
  const discountRates = [10, 20, 30, 40];
  let maxSubscribers = 0;
  let maxRevenue = 0;

  const calculateRevenue = (discountConfig) => {
    let subscribers = 0;
    let revenue = 0;

    users.forEach(([minRate, minPrice]) => {
      let userTotal = 0;

      emoticons.forEach((price, idx) => {
        const discountPrice = price * (1 - discountConfig[idx] / 100);
        if (discountConfig[idx] >= minRate) {
          userTotal += discountPrice;
        }
      });

      if (userTotal >= minPrice) {
        subscribers += 1;
      } else {
        revenue += userTotal;
      }
    });

    if (
      subscribers > maxSubscribers ||
      (subscribers === maxSubscribers && revenue > maxRevenue)
    ) {
      maxSubscribers = subscribers;
      maxRevenue = revenue;
    }
  };

  const generateDiscountConfigs = (config = []) => {
    if (config.length === emoticons.length) {
      calculateRevenue(config);
      return;
    }

    for (const rate of discountRates) {
      generateDiscountConfigs([...config, rate]);
    }
  };

  generateDiscountConfigs();

  return [maxSubscribers, maxRevenue];
}