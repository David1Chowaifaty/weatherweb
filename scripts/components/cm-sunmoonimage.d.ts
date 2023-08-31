import type { Components, JSX } from "../types/components";

interface CmSunmoonimage extends Components.CmSunmoonimage, HTMLElement {}
export const CmSunmoonimage: {
  prototype: CmSunmoonimage;
  new (): CmSunmoonimage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
