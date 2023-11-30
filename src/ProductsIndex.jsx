/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Inventory: {product.inventory}</p>
          <p>Supplier: {product.supplier.name}</p>
          <p>
            {product.images.map((image) => (
              <div key={image.id}>
                <img src={image.url} />
              </div>
            ))}
          </p>
          <button>See Product Info</button>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
