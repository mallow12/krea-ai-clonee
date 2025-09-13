export interface ImageConfig {
  src: string;
  alt: string;
  fallbackGradient?: string;
  className?: string;
}

export function getImageProps(config: ImageConfig) {
  const { src, alt, fallbackGradient, className = '' } = config;
  
  return {
    src,
    alt,
    className: `object-cover transition-transform duration-300 group-hover:scale-110 ${className}`,
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement;
      if (fallbackGradient) {
        target.style.background = fallbackGradient;
        target.style.opacity = '0.8';
      }
    },
    loading: 'lazy' as const
  };
}

export function createImageUrl(baseUrl: string, params?: Record<string, string | number>) {
  if (!params) return baseUrl;
  
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });
  
  return url.toString();
}