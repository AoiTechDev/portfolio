import React, { useEffect } from "react";

export function useMediaQuery({ query }: { query?: number }) {
  const [media, setMedia] = React.useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${query}px)`);
    setMedia(mediaQuery.matches);
  });


  return media;
}
