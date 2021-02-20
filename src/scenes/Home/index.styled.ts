import styled from "styled-components";

export const WhiteWrapper = styled.div`
  background: white;
  padding: 60px 40px;
  ${(props: { paddingTop?: string }) =>
    props.paddingTop ? `padding-top: ${props.paddingTop}px` : ""}
`;

export const GreyWrapper = styled.div`
  background: #fafafa;
  padding: 60px 40px;
`;

export const CustomHeading = styled.h1`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 40px;
  max-width: 600px;
  text-align: center;
  color: rgba(33, 33, 33, 0.82);
`;
export const CustomHeadingSubtitle = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: rgba(33, 33, 33, 0.82);
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  max-width: 600px;
  width: 100%;
`;

export const WidthWrapper = styled.div`
  width: ${(props: { width: string }) => props.width}px;
`;
