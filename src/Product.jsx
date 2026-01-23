import { Review } from './components/review';
import { useParams } from 'react-router-dom';
import { Tag } from './components/tag';
import { Button } from './components/button';
import { useState, useEffect } from 'react';
import { useCart } from './cartContext';
import { formatCurrency } from './utils/formatCurrency';
import { difference } from './utils/difference';
import { useTitle } from './utils/useTitle';

function Product() {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const { id } = useParams();
  const { addCartItem } = useCart();

  useTitle(
    product ? `${product.title} | Ecom Store` : `Product page | Ecom Store`,
    product ? product.description : ''
  );

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
      <title>{product.title} | Ecom Store</title>
      <div className="flex md:flex-row flex-col gap-2">
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
                <p className="font-thin text-sm text-gray-500">
                  {formatCurrency(difference(product))} discount
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
      <Button
        variant="secondary"
        onClick={() => {
          const postTitle = product.title;
          const postFile = product.image.url || '';
          const postDescription = product.description;
          const postUrl = window.location.href;

          const postBody = `Check out ${product.title} ${
            product.discountedPrice !== product.price
              ? `for the discounted price ${product.discountedPrice} kr`
              : `for the price ${product.discountedPrice} kr `
          } on this link: ${postUrl}`;

          const postData = {
            postTitle,
            postDescription,
            postBody,
            postFile,
          };

          const postDataEncoded = btoa(JSON.stringify(postData));

          const url = `https://hajnalka-social-noroff.netlify.app/feed/index.html?data=${postDataEncoded}`;

          window.open(url);
        }}
      >
        <img
          src="/share.svg"
          height="16px"
          width="16px"
          alt="share"
          className="inline"
        />{' '}
        {''}
        Share
      </Button>
      {!!product.reviews.length && (
        <div className="border p-2 my-1 rounded-sm">
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
      )}
    </div>
  );
}

export default Product;
