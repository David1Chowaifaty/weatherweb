import type { Components, JSX } from "../types/components";

interface CmTemperature extends Components.CmTemperature, HTMLElement {}
export const CmTemperature: {
  prototype: CmTemperature;
  new (): CmTemperature;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
