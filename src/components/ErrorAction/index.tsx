import { Body, Button } from "./styles"
import { BiErrorAlt, BiError } from "react-icons/bi"
import translate from "../../utils/translate"

interface ErrorActionProps {
    text: string
    type: "error" | "warning"
}

function ErrorAction ({ text, type }: ErrorActionProps) {
    function reloadPage() {
        window.location.reload()
    }
    return (
        <Body>
            {
                type === "error" ?
                    <BiErrorAlt size={50} color="#ff0000" />
                    :
                    <BiError size={50} color="#fdee1a" />
            }
            <p>{text}</p>
            {
                type === "error" && 
                    <Button onClick={reloadPage}>{translate("tryAgain")}</Button>
            }
        </Body>
    )
}

export default ErrorAction