import { sizes, Styled } from "./loader.styles";

export type LoaderSizes = keyof typeof sizes;
export type LoaderProps = React.ComponentProps<typeof Styled.Loader> & {
  /** Loader dimensions */
  size?: LoaderSizes;
};
