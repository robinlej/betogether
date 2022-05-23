import styled from "styled-components";

export const ConsultResultsPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0em 3em 3em 3em;
`

export const GroupNameDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const GroupProjectsMainDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem;
    gap: 5rem;
    max-width: 1250px;
`

export const GroupProjectCardTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-700);
    color: white;
    padding: 1em;
`

export const GroupProjectCardGroups = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--blue-600);
    padding: 1em;
`

export const GroupProjectStudentImage = styled.img.attrs(group => ({
    src: group.src,
  }))`
    object-fit: cover;
    height: 56px;
    width: 56px;
    border-radius:50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`

export const GroupProjectStudentDiv = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    margin: 1em;
`

export const GroupProjectFullDiv = styled.div`
    display: flex;
    background-color: var(--blue-600);
    padding: 1em;
    cursor:pointer;
`
export const GroupProjectDetails = styled.div`
    display: flex;
    padding: 2em;
`

