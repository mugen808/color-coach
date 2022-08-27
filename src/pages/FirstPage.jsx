import { styles, InformationButton, MainImage,
  TextSection, Wrapper
} from './firstPageStyles';
import mainImage from '../images/workshop/session4.jpg'



const FirstPage = () => {
  return (
    <Wrapper>
      <MainImage src={mainImage} alt="" />
      <TextSection>
        <h1 style={styles.h1}>
          DISC & Empathy training for People Leaders.
        </h1>
        <h2 style={styles.h2}>
          Help your key players to develop people and leadership skills by learning exactly what to listen and where to look. 
        </h2>
        <InformationButton>Discover the Color Training</InformationButton>
      </TextSection>
    </Wrapper>
  )
}

export default FirstPage;