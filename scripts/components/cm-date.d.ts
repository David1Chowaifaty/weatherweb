import type { Components, JSX } from "../types/components";

interface CmDate extends Components.CmDate, HTMLElement {}
export const CmDate: {
  prototype: CmDate;
  new (): CmDate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
