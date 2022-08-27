import styled from "styled-components"

const Wrapper = styled.menu`
  background-color: tomato;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: none;
`

const MenuOptions = styled.a`
  text-decoration: none;
  font-size: 40px;
  color: white;
  padding-bottom: 6vh;
  :hover {
    color: #1c1f1c;
  }
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20vh 0 0 20vw;
`
const Menu = () => {
  return (
    <>
      <Wrapper>
        <OptionsWrapper>
          <MenuOptions href="#">Training</MenuOptions>
          <MenuOptions href="#">Benefits</MenuOptions>
          <MenuOptions href="#">Services</MenuOptions>
          <MenuOptions href="#">Clients and testimonials</MenuOptions>
          <MenuOptions href="#">Contact</MenuOptions>
        </OptionsWrapper>
      </Wrapper>
    </>
  )
}

export default Menu;