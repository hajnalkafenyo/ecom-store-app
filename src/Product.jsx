import { Review } from './components/review';
import { useParams } from 'react-router-dom';
import { Tag } from './components/tag';
import { Button } from './components/button';
import { useState, useEffect } from 'react';
import { useCart } from './cartContext';
import { formatCurrency } from './utils/formatCurrency';

function Product() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const { id } = useParams();
  const { addCartItem } = useCart();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!res.ok) {
          const data = await res.json();

          if (data.error) {
            setError(data.error.message);
            setIsLoading(false);
            setProduct();
            return;
          }

          setError('API returned invalid state');
          setIsLoading(false);
          setProduct();
          return;
        }
        const data = await res.json();

        if (data.error) {
          setError(data.error.message);
          setIsLoading(false);
          setProduct();
          return;
        }

        setProduct(data.data);
        setIsLoading(false);
        setError(undefined);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
        setProduct();
      }
    }

    fetchData();
  }, [id]);

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return <p>There was an error when loading the data. {error}</p>;
  }

  if (!product) {
    return <p>Product not loaded</p>;
  }

  return (
    <div>
      <div className="flex flex-row gap-2">
        <img
          src={product.image.url}
          className="h-[160px] w-full object-cover"
          alt={product.image.alt}
        />
        <div className="border p-2 rounded-sm">
          <div className="font-bold text-xl">{product.title}</div>
          <div className="flex flex-row flex-wrap">
            {product.tags.map((tag) => (
              <Tag text={tag} />
            ))}
          </div>
          <div className="text-sm border-y-2 p-2">{product.description}</div>
          <div className="flex flex-col gap-2">
            {product.discountedPrice !== product.price ? (
              <div>
                <p className="font-thin line-through text-sm">
                  {formatCurrency(product.price)}
                </p>
                <p className="text-green-700 font-semibold">
                  {formatCurrency(product.discountedPrice)}
                </p>
              </div>
            ) : (
              <p className="text-black font-semibold">
                {formatCurrency(product.price)}
              </p>
            )}
            <Button
              onClick={() => {
                addCartItem(product);
              }}
            >
              Add to Cart
            </Button>{' '}
          </div>
        </div>
      </div>
      <div className="border p-2 m-px rounded-sm">
        {product.reviews.map((review) => (
          <div>
            <Review
              id={review.id}
              username={review.username}
              description={review.description}
              rating={review.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
