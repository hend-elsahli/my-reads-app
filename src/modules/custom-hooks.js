import { useEffect } from "react";

/*---------------------------------
          Custom Hooks
---------------------------------*/
/**
 * @description Effect hook that will only be executed onComponentDidMount
 * @param {function} handler - hook handler
 * @returns {function} custom h
 */
export const useMountEffect = (handler) => useEffect(handler, []);
