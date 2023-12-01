/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      <div className="grid grid-cols-3 p-3 gap-x-2 gap-y-4">
        {props.products.map((product) => (
          <div className="bg-tan shadow-lg" key={product.id}>
            <div>
              <h2 className="text-center text-lg font-bold">{product.name}</h2>
              <div>
                {product.images.map((image) => (
                  <div key={image.id}>
                    <img src={image.url} className="aspect-square object-cover w-full" />
                  </div>
                ))}
              </div>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
              <p>Inventory: {product.inventory}</p>
              <p>Supplier: {product.supplier.name}</p>
              <div className="p-1">
                <button className="bg-teal rounded-md text-white p-2">See Product Info</button>
              </div>
              <div className="p-1">
                <button className="bg-teal rounded-md text-white p-2">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
