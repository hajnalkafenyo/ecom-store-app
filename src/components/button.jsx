const buttonPrimaryClass = 'bg-amber-400 text-black';
const buttonSecondaryClass = 'bg-gray-600 text-white';

function getButtonClass(variant) {
  if (!variant) {
    return buttonPrimaryClass;
  }
  switch (variant) {
    case 'primary':
    default:
      return buttonPrimaryClass;
    case 'secondary':
      return buttonSecondaryClass;
  }
}

export function Button(props) {
  const { variant, ...restProps } = props;
  const className = getButtonClass(variant);
  return (
    <button className={`rounded-md py-1 px-2 ${className}`} {...restProps} />
  );
}
