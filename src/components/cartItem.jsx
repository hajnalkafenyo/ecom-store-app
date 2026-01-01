import { AddButton } from './addButton';
import { formatCurrency } from '../utils/formatCurrency';

export function CartItem({
  id,
  price,
  discountedPrice,
  title,
  image,
  description,
}) {
  return (
    <div className="flex md:flex-row flex-col items-center border border-gray-300 rounded-md w-full bg-gray-50">
      <div className="items-center">
        <img
          src={image}
          alt="The product"
          className="md:w-6 md:h-6 w-full h-[120px]"
        />
      </div>
      <div className="flex md:flex-row flex-col p-2 grow">
        <div className="flex-col grow">
          <div className="font-semibold text-m text-gray-800">{title}</div>
          <div className="font-light text-sm border-y border-gray-300 text-gray-600">
            {description}
          </div>
        </div>
        <div className="flex flex-col items-end p-2 justify-end">
          <AddButton id={id} />
          {discountedPrice !== price ? (
            <>
              <p className="font-thin line-through text-sm text-gray-500">
                {formatCurrency(price)}
              </p>
              <p className="text-amber-600 font-semibold">
                {formatCurrency(discountedPrice)}
              </p>
            </>
          ) : (
            <p className="text-gray-800 font-semibold">
              {formatCurrency(price)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
