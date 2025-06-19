import { cn } from "../utils";

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
}
export function Image(props: ImageProps) {
  const { src, alt, className } = props;
  return (
    <img
      className={cn("rounded-md", className)}
      src={src}
      alt={alt}
    />
  );
}
