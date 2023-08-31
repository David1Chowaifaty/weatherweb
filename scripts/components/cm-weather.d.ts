import type { Components, JSX } from "../types/components";

interface CmWeather extends Components.CmWeather, HTMLElement {}
export const CmWeather: {
  prototype: CmWeather;
  new (): CmWeather;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
