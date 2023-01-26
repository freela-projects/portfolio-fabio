import styled from "styled-components"

const SlideShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100%;
  white-space: nowrap;
`
interface SliderProps {
    translation: number
}
const Slider = styled.div`
    white-space: nowrap;
    transition: ease 1000ms;
`
const Slide = styled.img`   
  height: 100vh;
  width: 100%;
  display: inline-block;
  object-fit: cover;
`
const SlideDots = styled.div`
    text-align: center;
`
const SlideDot = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #c4c4c4;
`

export { SlideShow, Slider, Slide, SlideDots, SlideDot }