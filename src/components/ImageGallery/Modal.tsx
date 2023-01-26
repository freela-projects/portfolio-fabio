import { Background, HStack, VStack } from "./styles"
import { MdArrowBackIosNew, MdArrowForwardIos, MdClose } from "react-icons/md"

interface ModalProps {
    imagePath: string
    nextSlide?: () => void
    previousSlide?: () => void
    close: () => void
}

const Modal = ({ imagePath, nextSlide, previousSlide, close }: ModalProps) => {

    return (
        <Background>
            <HStack
                justifyContent="flex-end"
                width="90%">
                <div onClick={close}>
                    <MdClose size={40} />
                </div>
            </HStack>
            <VStack
                width="90%">
                <HStack>
                    <div onClick={nextSlide}>
                        <MdArrowBackIosNew size={20} />
                    </div>
                    <img src={imagePath} />
                    <div onClick={previousSlide}>
                        <MdArrowForwardIos size={20} />
                    </div>
                </HStack>
            </VStack>
        </Background>
    )
}

export default Modal

