import 'styled-components';
import light from '@/styles/light';

type ThemeType = typeof light;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}
