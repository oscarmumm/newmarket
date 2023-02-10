export const loaderProducts = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return { data };
}

export const loaderSmartphones = async () => {
  const res = await fetch('https://dummyjson.com/products/category/smartphones');
  const dataSmartphones = await res.json();

  return { dataSmartphones };
}