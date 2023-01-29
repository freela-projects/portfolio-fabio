import styled from "styled-components";

const Transition = styled.div`
    @keyframes load-page {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 100;
        }
    }

    width: 100%;
    height: 100%;
    animation: load-page 2s ;
`
export default Transition;