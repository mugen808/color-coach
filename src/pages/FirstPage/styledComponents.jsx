import styled from 'styled-components';

const InformationButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 0.6em;
  border-radius: 25px;
  font-weight: 500;
  margin-top: 5vh;
  cursor: pointer;
  align-self: flex-start;
  padding: 15px 50px;
  margin-right: 1vw;
  font-size: 20px;
  transition: 0.5s ease;
  &:hover {
    background-color: rgba(27, 26, 26, 1);
    color: white;
  }
`
const MainImage = styled.img`
  margin: 2vh 0 2vh 1vw;
  width: 56vw;
  object-fit: cover;
`
const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 33vw;
  height: 100%;
  justify-content: center;
  padding-top: 13vh;
  padding-right: 6vw;
`
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: space-between;
  align-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: var(--background-blue);
`

const styles = {
  h1: {
    fontSize: "55px",
    margin: "0"
  },
  h2: {
    fontSize: "20px",
    fontWeight: "500",
    margin: "5vh 0 0 0"
  },
}

export { styles, InformationButton, MainImage,
         TextSection, Wrapper
};