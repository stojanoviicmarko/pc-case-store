const Product = ({ name, image, price }) => {
  const handleClick = e => {
    console.log(e.target.value)
  }
  return (
    <div className="flex items-center justify-center p-8 flex-col text-sm hover:bg-gray-200 rounded-sm duration-150 shadow-lg justify-self-center">
      <h1 className="mb-4">{name}</h1>
      <p className="font-bold mb-4">{price}</p>
      <img className="w-full" src={image} alt="product__image" />
      <button
        onClick={handleClick}
        className="mt-8 w-36 h-8 border border-gray-500 hover:bg-gray-500 rounded-sm hover:text-white active:bg-gray-800"
      >
        Add to basket
      </button>
    </div>
  )
}

export default Product
