import { useRef, useEffect } from "react";

/*---------------------------------
          Custom Hooks
---------------------------------*/
/** TODO: remove unused custom hooks before sending... */
export const useMountEffect = (handler) => useEffect(handler, []);
export const useUpdateEffect = (handler, dependencies) => {
  const isInitialMount = useRef(true);

  return useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      handler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
