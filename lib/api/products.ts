export async function allProducts() {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    return data.json();
  } catch (error) {
    return "cannot find products";
  }
}
