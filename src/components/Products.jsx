import List from './List'

const ProductList = () => {
  const products = [
    { id: 1, name: 'Apple', price: 1.63 },
    { id: 2, name: 'Banana', price: 2.3 },
    { id: 3, name: 'Cherry', price: 3.15 },
    { id: 4, name: 'Durian', price: 4.5 },
  ]

  return (
    <List
      items={products}
      renderItem={(product) => `${product.name} ($${parseFloat(product.price).toFixed(2)})`}
    />
  )
}

export default ProductList
