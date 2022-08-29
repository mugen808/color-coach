import styled, { keyframes } from "styled-components"


const Wrapper = styled.menu`
  background-color: #ff4747;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  z-index: 90;
  position: fixed;
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

const Footer = styled.p`
  color: white;
  font-size: 22px;
  text-align: center;
  justify-self: flex-end;
  padding-top: 3vh;
`

const FooterLink = styled(MenuOptions)`
  font-size: 22px;
`
const Menu = () => {
  return (
    <>
      <Wrapper>
        <OptionsWrapper>
          <MenuOptions href="#">Method</MenuOptions>
          <MenuOptions href="#">Benefits</MenuOptions>
          <MenuOptions href="#">Services</MenuOptions>
          <MenuOptions href="#">Testimonials</MenuOptions>
          <MenuOptions href="#">Contact Us</MenuOptions>
        </OptionsWrapper>
        <Footer>Follow us on 
          <FooterLink href="#"> Instagram </FooterLink>
          and
          <FooterLink href="#"> LinkedIn</FooterLink>
        </Footer>
      </Wrapper>
    </>
  )
}

export default Menu;