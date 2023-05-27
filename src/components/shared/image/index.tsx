import type { ImageProps } from 'next/image';
import NextImage from 'next/image';
import theme from '../../../styles/theme';

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      sizes={` max-width: ${theme.breakpoints.values.xs} 30vw, max-width: ${theme.breakpoints.values.sm} 50vw, max-width: ${theme.breakpoints.values.lg} 100vw`}
      quality={100}
    />
  );
}
