import { Card } from './components/card';
import { useState, useEffect } from 'react';

export function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch('https://v2.api.noroff.dev/online-shop');
        if (!res.ok) {
          const data = await res.json();

          if (data.error) {
            setError(data.error.message);
            setIsLoading(false);
            setProducts([]);
            return;
          }

          setError('API returned invalid state');
          setIsLoading(false);
          setProducts([]);
          return;
        }
        const data = await res.json();

        if (data.error) {
          setError(data.error.message);
          setIsLoading(false);
          setProducts([]);
          return;
        }

        setProducts(data.data);
        setIsLoading(false);
        setError(undefined);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
        setProducts([]);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return <p>There was an error when loading the data. {error}</p>;
  }

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-2">
      <input
        className="border-2 rounded-sm px-0.5"
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterChange}
      />
      <div className="flex flex-row flex-wrap gap-2 justify-center">
        {filteredProducts.map((product) => {
          return (
            <Card
              id={product.id}
              title={product.title}
              description={product.description}
              rate={product.rating}
              price={product.price}
              discountedPrice={product.discountedPrice}
              image={product.image.url}
            />
          );
        })}
      </div>
    </div>
  );
}
