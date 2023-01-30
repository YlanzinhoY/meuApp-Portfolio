import { Container, H1, DivContent, ImgContent, H2, Hr} from "../../components/Header/style"
import { Image } from 'phosphor-react-native'
import { Competencias } from "@screens/Competencias";

type Props = {
    textMain: string
    textSecondary: string
}

export function Header({textMain, textSecondary}: Props) {
    return(
        <Container>
            <DivContent>
                <Image size={55} color="white"/>
                <H1>{textMain}</H1>
                <H2>{textSecondary}</H2>
            </DivContent>
                <Hr />
        </Container>
    )
}