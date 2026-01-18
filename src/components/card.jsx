import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';
import { difference } from '../utils/difference';
import { LinkButton } from './link';

export function Card({
  id,
  title,
  description,
  image,
  price,
  discountedPrice,
  rate,
}) {
  return (
    <div className="border border-gray-300 md:w-[200px] w-full max-w-[300px] rounded p-2 flex flex-col bg-white hover:bg-gray-50 hover:border-amber-400 transition-colors cursor-pointer">
      <div className="flex flex-col object-fit">
        <img
          src={image}
          className="h-[160px] w-full object-cover"
          alt="My awesome Product"
        />
      </div>

      <div className=" max-h-8 ">
        <p className="font-bold font-serif truncate text-gray-800">{title}</p>
      </div>

      <div className="flex flex-col border-y border-gray-300">
        <p className="font-sans italic text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex flex-row gap-2 justify-between items-end">
        <div className="text-sm"> {stars(rate, '★')}</div>
        <div className="flex flex-col">
          {discountedPrice !== price ? (
            <div>
              <p className="font-thin line-through text-sm text-gray-500">
                {formatCurrency(price)}
              </p>
              <p className="font-thin text-sm text-gray-500">
                {formatCurrency(
                  difference({
                    price,
                    discountedPrice,
                  })
                )}{' '}
                discount
              </p>
              <p className="text-amber-600 font-semibold">
                {formatCurrency(discountedPrice)}
              </p>
            </div>
          ) : (
            <p className="text-gray-800 font-semibold">
              {formatCurrency(price)}
            </p>
          )}
        </div>
      </div>
      <LinkButton to={`/product/${id}`}>View Product</LinkButton>
    </div>
  );
}

export function stars(rate, character) {
  let b = '';
  if (rate > 5) {
    return '★★★★★';
  }
  if (rate <= 0) {
    return '★';
  }
  for (let i = 0; i < rate; i++) {
    b += character;
  }
  return b;
}
