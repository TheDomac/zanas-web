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

interface HeadingsProps {
  fontSize?: string;
  centered?: boolean;
  inverted?: boolean;
  maxWidth?: string;
}
export const CustomHeading = styled.h1`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 40px;
  max-width: ${(props: HeadingsProps) =>
    props.inverted ? `${props.maxWidth}px;` : "600px;"}
  color: ${(props: HeadingsProps) =>
    props.inverted
      ? `white; text-shadow: 0 0 10px black; a { text-shadow: none; }`
      : "#4a4a4a;"}
    ${(props: HeadingsProps) =>
      props.fontSize ? `font-size: ${props.fontSize}px` : "40px;"}
    ${(props: HeadingsProps) => (props.centered ? `text-align: center;` : "")};
`;
export const CustomHeadingSubtitle = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${(props: HeadingsProps) =>
    props.inverted
      ? `white; text-shadow: 0 0 10px black; a { text-shadow: none; }`
      : "#4a4a4a;"}
  margin-bottom: 10px;
  max-width: ${(props: HeadingsProps) =>
    props.inverted ? `${props.maxWidth}px;` : "600px;"}
  ${(props: HeadingsProps) =>
    props.fontSize ? `font-size: ${props.fontSize}px;` : "40px;"}

  ${(props: HeadingsProps) => (props.centered ? `text-align: center;` : "")}
`;

export const Logo = styled.img`
  max-width: 600px;
  width: 100%;
`;

export const WidthWrapper = styled.div`
  max-width: ${(props: { width: string }) => props.width}px;
`;
