export interface CardProps {
  children: ReactNode;
}

export const Card = forwardRef((props: CardProps, ref) => {
  const { children } = props;
  return (
    <div ref={ref} className="border border-gray-300 rounded-md p-4">
      {children}
    </div>
  );
});
