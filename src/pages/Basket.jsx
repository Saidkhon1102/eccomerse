import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";
import BasketItem from "../components/BasketItem";

function Basket() {
  const { products, totalPrice, dispatch } = useGlobalContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-indigo-600 mb-2">Shopping Basket</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          {products.length === 0 ? (
            <div className="text-center mt-16">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-purple-200">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">Your basket is empty</h2>
                <p className="text-xl text-gray-600 italic">
                  Add some products to get started!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header with total price and clear button */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Total Price: 
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 ml-2">
                        {formatPrice(totalPrice)}
                      </span>
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {products.length} item{products.length !== 1 ? 's' : ''} in your basket
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch({ type: "CLEAR", payload: products })}
                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              {/* Products list */}
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-200">
                    <BasketItem product={product} />
                  </div>
                ))}
              </div>

              {/* Checkout section */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Ready to checkout?</h3>
                    <p className="text-indigo-100 mt-1">Complete your purchase</p>
                  </div>
                  <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/30">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
