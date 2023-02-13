import styled from "styled-components"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Body = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: calc(450px);

    @media (min-width: 768px) {
        flex-direction: row;
        margin-top: 0;
        margin-left: calc(5%);
        margin-right: calc(250px + 5%);
        width: calc(100% - (250px + 10%));
    }
    `
const ProfilePicure = styled(LazyLoadImage)`
    max-width: 230px;
    max-height: 345px;

    @media (min-width: 768px) {
        margin-right: 20px;
    }
    `

const SocialMedias = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;

    a {
        margin-right: 20px;
        margin-bottom: 20px;
        color: white;
    }
    `

export { Body, ProfilePicure, SocialMedias }