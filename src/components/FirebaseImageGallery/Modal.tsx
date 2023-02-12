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
                style={{ position: "absolute", top: 0, right: 0 }}
                justifyContent="flex-end"
                width="90%">
                <div onClick={close}>
                    <MdClose size={40} />
                </div>
            </HStack>
            <VStack
                width="90%"
                style={{zIndex: 2}}>
                <HStack>
                    <button onClick={nextSlide} id="next">
                        <MdArrowBackIosNew size={30} />
                    </button>
                    <HStack height="70%">
                        <img src={imagePath} />
                    </HStack>
                    <button onClick={previousSlide} id="previous">
                        <MdArrowForwardIos size={30} />
                    </button>
                </HStack>
            </VStack>
        </Background>
    )
}

export default Modal

