import type { Components, JSX } from "../types/components";

interface CmMenuItem extends Components.CmMenuItem, HTMLElement {}
export const CmMenuItem: {
  prototype: CmMenuItem;
  new (): CmMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
