import styled from '@emotion/styled';

export const BoardContainer = styled.section`
  width: 100%;
  height: calc(100vh - 68px);
  flex-wrap: nowrap;
  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${props => props.backgroundImg.source.tabletRet});
    }
    background-image: url(${props => props.backgroundImg.source.tablet});
  }
  @media screen and (min-width: 1440px) {
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${props => props.backgroundImg.source.desktopRet});
    }
    background-image: url(${props => props.backgroundImg.source.desktop});
  }

  @media screen and (max-width: 767px) {
    height: calc(100vh - 60px);
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${props => props.backgroundImg.source.mobileRet});
    }
    background-image: url(${props => props.backgroundImg.source.mobile});
  }
`;
//
