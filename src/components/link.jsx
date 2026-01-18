import { Link } from 'react-router-dom';

const primaryClass = 'bg-amber-400 text-black';
const secondaryClass = 'bg-gray-600 text-white';

function getLinkButtonClass(variant) {
  if (!variant) {
    return primaryClass;
  }
  switch (variant) {
    case 'primary':
    default:
      return primaryClass;
    case 'secondary':
      return secondaryClass;
  }
}

export function LinkButton(props) {
  const { variant, children, ...restProps } = props;
  const className = getLinkButtonClass(variant);
  return (
    <Link
      className={`rounded-md py-1 px-2 text-center ${className}`}
      {...restProps}
    >
      {children}
    </Link>
  );
}
