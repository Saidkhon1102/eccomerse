import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Product({ prod }) {
  const { dispatch, products, likedProducts } = useGlobalContext();
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const addLiked = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_LIKED", payload: prod });
    setAlreadyLiked(true);
  };

  const removeLiked = (e) => {
    e.preventDefault();
    dispatch({ type: "REMOVE_LIKED", payload: prod.id });
    setAlreadyLiked(false);
  };

  useEffect(() => {
    const item = likedProducts.find((p) => p.id === prod.id);
    if (item) setAlreadyLiked(true);
  }, [likedProducts, prod.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = products.find((product) => product.id === prod.id);

    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
    }
  };

  return (
    <>
      <Link to={`/singleProduct/${prod.id}`}>
        <div className="card bg-base-100 w-full shadow-xl hover:shadow-xl/20 cursor-pointer">
          <figure>
            <img className="h-50" src={prod.thumbnail} alt={prod.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title line-clamp-1">{prod.title}</h2>
            <p className="line-clamp-2">{prod.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-[#eb5971]">${prod.price}</p>
              <button
                onClick={handleSubmit}
                className="btn btn-outline btn-info"
              >
                Add to Basket
              </button>
              {alreadyLiked ? (
                <button
                  onClick={removeLiked}
                  className="cursor-pointer text-xl"
                >
                  <FaHeart />
                </button>
              ) : (
                <button
                  onClick={addLiked}
                  className="cursor-pointer text-xl"
                >
                  <FaRegHeart />
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;
