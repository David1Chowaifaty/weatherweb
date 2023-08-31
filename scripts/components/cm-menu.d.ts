import type { Components, JSX } from "../types/components";

interface CmMenu extends Components.CmMenu, HTMLElement {}
export const CmMenu: {
  prototype: CmMenu;
  new (): CmMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
