import styled from '@emotion/styled';

export const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const BoardContainer = styled.section`
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    background-image: url(${props => props.backgroundImg.source.tablet});
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${props => props.backgroundImg.source.desktop});
  }

  // @media screen and (max-width: 767px) {
  background-image: url(${props => props.backgroundImg.source.mobile});
  // }
`;
//
