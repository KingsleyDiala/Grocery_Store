import styled from 'styled-components'

// =============  STYLED COMPONENTS =============
const Section = styled.div`
  position: relative;
  top: 100px;
  width: 100%;
  height: fit-content;
  padding: 100px 10%;
  display: grid;
  place-content: center;
  overflow: hidden;
  ` 
const SectionContainer = styled.div`
  width: 1260px;
  height: 526px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`
const TopContainer = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & a {
    color: var(--dark-text-color);
    transition: transform color 1s ease;
  }
`
const BigText = styled.h4``
const SmallText = styled.a`
  color: var(--dark-text-color);
  transition: transform color 1s ease;
  &:hover {
    color: var(--accent-color);
    transform: scale(1.04);
  }
`
const BottomContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`
const ArrowRight = styled.div`
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 55%;
  right: -15px;
  display: grid;
  place-items: center;
  font-size: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--accent-color);
  cursor: pointer;
  z-index: 1;
  transition: all .2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
  }
`
const ArrowLeft = styled.div`
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 55%;
  left: -15px;
  display: grid;
  place-items: center;
  font-size: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--accent-color);
  cursor: pointer;
  z-index: 1;
  transition: all .2s ease;
    &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
  }
  `
const ItemContainer = styled.div`
  height: 457px;
  width: 192px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all .5s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .2);
    & a {
      display: block;
      transition: transform .2s ease;
    }
  }
`
const ImageContainer = styled.div`
  height: 280px;
  width: 100%;
  background-color: var(--dark-grey-color);
`
const ProductName = styled.p`
padding: 0 1rem;
`
const ProductPrice = styled.p`
  color: var(--accent-color);
  font-weight: 700;
`
const Button = styled.a`
display: none;
  position: relative;
  width: 160px;
  height: 41px;
  margin-top: 2rem;
  cursor: pointer;
  color: var(--light-text-color);
  font-size: var(--button-text);
  font-weight: 600;
  text-align: center;
  line-height: 35px;
  `





// ================ JSX COMPONENTS ===============
export const CarouselSection = () => {
  return (
    <Section>

      {/*  =============== TOP CONTAINER ============= */}
      <TopContainer>
        <BigText></BigText>
        <SmallText></SmallText>
      </TopContainer>

      {/* ====== BOTTOM CONTAINER ======== */}
      <BottomContainer>

        {/*  ===========ARROW RIGHT AND LEFT  =========== */}
        <ArrowRight> <i class="uil uil-angle-right-b"></i> </ArrowRight>
        <ArrowLeft><i class="uil uil-angle-left"></i></ArrowLeft>

        {/*  ============= ITEM 1 ============= */}
        <ItemContainer>
          <ImageContainer></ImageContainer>
          <ProductName></ProductName>
          <ProductPrice></ProductPrice>
          <Button></Button>
        </ItemContainer>

        {/*  ============= ITEM 2 ============= */}
        <ItemContainer>
          <ImageContainer></ImageContainer>
          <ProductName></ProductName>
          <ProductPrice></ProductPrice>
          <Button></Button>
        </ItemContainer>

        {/*  ============= ITEM 3 ============= */}
        <ItemContainer>
          <ImageContainer></ImageContainer>
          <ProductName></ProductName>
          <ProductPrice></ProductPrice>
          <Button></Button>
        </ItemContainer>

        {/*  ============= ITEM 4 ============= */}
        <ItemContainer>
          <ImageContainer></ImageContainer>
          <ProductName></ProductName>
          <ProductPrice></ProductPrice>
          <Button></Button>
        </ItemContainer>

        {/*  ============= ITEM 5 ============= */}
        <ItemContainer>
          <ImageContainer></ImageContainer>
          <ProductName></ProductName>
          <ProductPrice></ProductPrice>
          <Button></Button>
        </ItemContainer>

        {/*  ============= ITEM 6 ============= */}
        <ItemContainer>
          <ImageContainer></ImageContainer>
          <ProductName></ProductName>
          <ProductPrice></ProductPrice>
          <Button></Button>
        </ItemContainer>
        
      </BottomContainer>

    </Section>
  )
}