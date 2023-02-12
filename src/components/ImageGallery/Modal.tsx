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
        <Background >
            <HStack 
                onClick={close}
                style={{ position: "absolute", top: 0, right: 0, width:'100vw', height:'100vh'}}
                justifyContent="flex-end"
                alignItems="flex-start"
                width="90%">
                <div onClick={close}>
                    <MdClose size={40} />
                </div>
                
            </HStack>
            <VStack
                width="90%">
                <HStack>
                    <div onClick={nextSlide} style={{zIndex:'10'}}>
                        <MdArrowBackIosNew size={20} />
                    </div>
                    <HStack >
                        <img src={imagePath} style={{zIndex:'10'}}/>
                    </HStack>
                    <div onClick={previousSlide}style={{zIndex:'10'}}>
                        <MdArrowForwardIos size={20} />
                    </div>
                </HStack>
            </VStack>
        </Background>
    )
}

export default Modal

