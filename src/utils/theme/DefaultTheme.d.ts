import { Theme } from "src/utils/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
