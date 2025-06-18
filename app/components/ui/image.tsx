interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
}
export function Image(props: ImageProps) {
  const { src, alt, className } = props;
  return <img className={`rounded-md ${className}`} src={src} alt={alt} />;
}
