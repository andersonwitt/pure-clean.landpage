export interface IWImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const WImage: React.FC<IWImageProps> = ({
  src,
  alt,
  width,
  height,
  borderRadius,
}) => (
  <img
    width={width}
    height={height}
    src={src}
    alt={alt}
    style={{ borderRadius: borderRadius }}
  />
);

export default WImage;
