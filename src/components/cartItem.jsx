import { AddButton } from './addButton';
import { formatCurrency } from '../utils/formatCurrency';
import { difference } from '../utils/difference';

export function CartItem({
  id,
  price,
  discountedPrice,
  title,
  image,
  description,
}) {
  return (
    <div className="flex md:flex-row flex-col items-center border border-gray-300 md:w-full max-w-[300px] rounded-md  bg-gray-50">
      <div className="items-center">
        <img
          src={image}
          alt="The product"
          className="md:w-[250px] w-[128px] "
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
