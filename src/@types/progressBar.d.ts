import 'styled-components'
import theme from '../theme/index'

declare module 'styled-components' {
    type BarType = typeof theme

    export interface DefaultTheme extends BarType { }
}