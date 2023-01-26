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
    animation: load-page 2s ;
`
export default Transition;