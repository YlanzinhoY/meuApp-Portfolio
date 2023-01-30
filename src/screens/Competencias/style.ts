import theme from 'src/theme'
import styled from 'styled-components/native'


export const Container = styled.View`
    width: 100%;
    background-color: #131131;
    height: 100%;
`

export const Content = styled.View`
    margin-left: 5px;
`

export const H2 = styled.Text`
    font-size: 20px;
    color: white;
    margin-top: 15px;
    margin-bottom: 20px;
    text-align: center;
`
export const Lang = styled.Text`
    font-size: 18px;
    color: #ffff;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const ScrollerViewer = styled.ScrollView`
    border-radius: 15px;
    padding: 5px;
`

export const ProgressBar100 = styled.View`
    width: ${({theme}) => theme.PROGRESS_BAR._100Porcent}%;
    border: 1px solid ${({theme}) => theme.COLORS.WHITE};
`
export const ProgressBar80 = styled.View`
        width: ${({theme}) => theme.PROGRESS_BAR._80Porcent}%;
        border: 1px solid ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 20px;
`