import type { Components, JSX } from "../types/components";

interface CmMainweather extends Components.CmMainweather, HTMLElement {}
export const CmMainweather: {
  prototype: CmMainweather;
  new (): CmMainweather;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
