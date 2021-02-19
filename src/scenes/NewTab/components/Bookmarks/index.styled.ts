import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
`;

export const BookmarksWrapper = styled.div`
  margin-bottom: 20px;
  max-height: 550px;
  max-width: 350px;
  width: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
  align-content: flex-start;
  position: relative;

  > * {
    margin-right: 12px;
    margin-bottom: 12px;
  }
`;

export const AddOrEditBookmarkWrapper = styled.div`
  max-width: 250px;
`;

interface ButtonProps {
  iconAndText?: Boolean;
}

export const Button = styled.button`
  border: 1px solid #1f7bb6;
  color: #1f7bb6;
  background: transparent;
  height: 44px;
  padding: 0 16px 0
    ${({ iconAndText }: ButtonProps) => (iconAndText ? "12px" : "16px")};
  cursor: pointer;
  transition: 150ms;
  font-weight: 700;
  border-radius: 3px;
  display: flex;
  align-items: center;

  ${({ iconAndText }) =>
    iconAndText
      ? `
      svg {
        margin-right: 8px;
      }
  `
      : ""}

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  top: -3px;
  right: 3px;
  visibility: hidden;
  opacity: 0;
  transition: 300ms;
  transition-delay: 500ms;
  border-radius: 50%;
`;

export const BookmarkWrapper = styled.div`
  position: relative;

  &:hover {
    ${OptionsWrapper} {
      visibility: visible;
      opacity: 1;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
