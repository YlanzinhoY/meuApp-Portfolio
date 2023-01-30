import { Container, H2, Lang, ProgressBar100, ProgressBar80, ScrollerViewer, Content} from "./style"

import { View, Text} from "react-native";


type Props = {
    textMain: string
}


export function Competencias({ textMain }: Props) {
    return(
        <Container>
            <H2>{textMain}</H2>
            <ScrollerViewer>
                <Content>
                    <Lang>HTML - 100%</Lang>
                    <ProgressBar100 />
                    <Lang>CSS - 80%</Lang>
                    <ProgressBar80 />
                    <Lang>Javascript - 80%</Lang>
                    <ProgressBar80 />
                    <Lang>NodeJS - 80%</Lang>
                    <ProgressBar80 />
                    <Lang>Sass - 80%</Lang>
                    <ProgressBar80 />
                    <Lang>TypeScript - 80%</Lang>
                    <ProgressBar80 />
                    <Lang>React - 80%</Lang>
                    <ProgressBar80 />
                    <Lang>React Native - 80%</Lang>
                    <ProgressBar80 />
                </Content>
            </ScrollerViewer>
           
        </Container>


    )
}