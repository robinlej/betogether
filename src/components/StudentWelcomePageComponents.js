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
    src: 'https://bit.ly/3FKSgvh'
})`
    width: 437px;
    height: 477px;
    left: 215px;
    top: 102px;
    object-fit: cover;
    transform: translate(-10%, -20%);
    z-index: 10;
`

export const WelcomePagePromotionFlag = styled.div`
    width: 207px;
    height: 37px;
    background-color: #63C3D1;
    z-index: 11;
    transform: translate(11.7em, 23.9em);
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
    width: 60vw;
    height: 5vh;
`

export const PastProjectsContainer = styled.div`
    background-color: var(--blue-600);
    color: rgba(255,255,255, 0.3);
    width: 60vw;
    height: 20vh;
    padding-inline: 5rem;
    padding-block: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

// The spider animation idea we had in the beginning, at the end if we consider it, we can just uncomment

// export const NoProjectsSpiderDiv = styled.div`
//   display: block;
//   height: 45px;
//   left: 5%;
//   margin-left: -22px;
//   top: 0;
//   width: 45px;
//   position:absolute;

//   @keyframes spider-move {
//     0% {height: 10px;}
//     100% {height: 100px;}
//   }

//   &::before {
//     display: block;
//     content: "";
//     width: 1px;
//     height: 50px;
//     background: #efebe4;
//     margin-left: 24px;
//     margin-bottom: -3px;
//     animation: spider-move 4s ease-in-out infinite alternate;
//   }
// `

// export const NoProjectsSpider = styled.img.attrs({
//     src: "https://s9.postimg.cc/jh7auf1tr/icon-spider.png"
// })`
//     max-width:100%;
// `
