export default function Card({
  background = '',
  marginTop = '',
  height = '',
  smMaxWidth = '',
  borderRadius = '',
  children,
  flexDirection = '',
  padding = '',
}) {
  return (
    <div
      className={`flex flex-col ${flexDirection} ${marginTop} ${padding} ${background} ${height} ${smMaxWidth} ${borderRadius} sm:rounded-2xl w-full`}
    >
      {children}
    </div>
  );
}
