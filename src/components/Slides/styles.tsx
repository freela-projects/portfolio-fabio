import styled, {keyframes} from "styled-components"

const SlideShow = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
    img{
      position: absolute;
      object-fit: cover;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
`


export { SlideShow }