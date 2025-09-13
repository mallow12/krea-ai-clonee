import { useState, useCallback } from 'react';

export function useHover<T = string | number>() {
  const [hoveredId, setHoveredId] = useState<T | null>(null);

  const handleMouseEnter = useCallback((id: T) => {
    setHoveredId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  const isHovered = useCallback((id: T) => hoveredId === id, [hoveredId]);

  return {
    hoveredId,
    handleMouseEnter,
    handleMouseLeave,
    isHovered
  };
}