import 'styled-components';
import { YDSTheme } from '../style/theme';
declare module 'styled-components' {
    export interface DefaultTheme extends YDSTheme {}
}
