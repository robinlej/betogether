import styled from "styled-components";



export const WelcomePageMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WelcomePageDiv = styled.div`
    display: flex;
    gap: 3em;
`

export const WelcomePageProfilePic = styled.img.attrs({
    src: 'assets/img/user-profile-picture.png'
})`
    width: 437px;
    height: 477px;
    left: 215px;
    top: 102px;
    object-fit: cover;
    transform: translate(0, -20%);
    z-index: 10;
`

export const WelcomePagePromotionFlag = styled.div`
    width: 207px;
    height: 37px;
    background-color: #63C3D1;
    z-index: 11;
    transform: translate(14.4em, 23.9em);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const WelcomePageProfileDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr ;
    grid-template-rows: 1fr;
`

export const WelcomePageTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    margin-bottom: 6em;
    gap: 3em;
    color: white;
`

export const PastProjectsTitle = styled.div`
    background-color: var(--blue-700);
    color: white;
    padding: 1em;
    font-size: 0.6em;
    width: 100%;
    height: 5vh;
`

export const PastProjectsContainer = styled.div`
    background-color: var(--blue-600);
    color: rgba(255,255,255, 0.3);
    width: 880px;
    height: auto;
    padding-inline: 2rem;
    padding-block: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 2rem;
`

export const PastProjectsMainDiv = styled.div`
    display: flex;
    gap: 1em;
    height: 100%;
    width: 100%;

`

export const PastProjectCardOverlay = styled.div`
    position: absolute;
    width: 90%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;         
    background-color: rgba(54, 54, 54, 0.5);   
    padding:10px;   
    transform: translateY(100%);
    transition: .2s ease-in-out;
`


export const PastProjectCard = styled.div`
    position: relative;
    display: block;
    height: 250px;
    width: 400px;  
    overflow: hidden;
    color: white;

&:hover{
    ${PastProjectCardOverlay}{
    transform: translateY(0);
    }
}
`



export const PastProjectImage = styled.img.attrs({
    alt: 'Past Project'
})`
    width: 90%;
    height: 100%;
    object-fit: cover;
`

