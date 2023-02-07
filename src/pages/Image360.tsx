import Image360Render from "../components/Image360"
import Main from "../components/Main"
import { images } from "../data/fake-data/images360"

function Image360() {
  return (
    <Main disablePadding>
        <Image360Render images={images}/>
    </Main>
  )
}

export default Image360