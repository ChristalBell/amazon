export async function getProducts() {
  try {
    const products = await fetch("https://fakestoreapi.com/products");
    return products.json();
  } catch (error) {
    return "cannot find products";
  }
}
