import { routeMap } from "./routeMap";

export const routeByName = (name) => {
  return Object.keys(routeMap).find((key) => routeMap[key] === name);
};

export const generateRandomNumber = () => {
  const getRandomDigit = () => Math.floor(Math.random() * 10); // 0-9
  const part1 = Array.from({ length: 3 }, getRandomDigit).join("");
  const part2 = Array.from({ length: 3 }, getRandomDigit).join("");
  const part3 = Array.from({ length: 3 }, getRandomDigit).join("");
  const part4 = Array.from({ length: 3 }, getRandomDigit).join("");
  return `${part1}-${part2}-${part3}-${part4}`;
};

export const activeIntervals = {};

export function getRelevantProducts(title, menuItem, user){
  const category = menuItem.types.find((item) => item.name === title);

  const products = menuItem.menuItems.rows.filter(
    (item) => item.typeId === category.id
  );

  const cartItemsQuantityMap = user.userCart.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  const relevantProducts = products.map((item) => {
    const isInCart = user.userCart.some((cartItem) => cartItem.id === item.id);
    return {
      ...item,
      inCart: isInCart,
      quantity: cartItemsQuantityMap[item.id]
    };
  });

  return relevantProducts;
};
