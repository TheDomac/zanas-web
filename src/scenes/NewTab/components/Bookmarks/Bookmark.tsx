import React from "react";

import MenuMeatballsIcon from "@kiwicom/orbit-components/lib/icons/MenuMeatballs";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";

import {
  Button,
  ExternalLink,
  OptionsWrapper,
  BookmarkWrapper,
} from "./index.styled";
import { useToggle } from "utils/useToggle";

const Bookmark = ({
  bookmark,
  deleteBookmark,
  setEditingBookmarkId,
  isAddOrEditBookmarkShown,
}: any) => {
  const isPopoverOpen = useToggle();

  const handleEditClick = () => {
    setEditingBookmarkId(bookmark.id);
    isAddOrEditBookmarkShown.setOn();
    isPopoverOpen.setOff();
  };

  const handleDeleteClick = () => {
    deleteBookmark(bookmark.id);
    isPopoverOpen.setOff();
  };

  const handleBookmarkClick = (url: string) => () => {
    const parsedURL = url.startsWith("http") ? url : `http://${url}`;
    window.open(parsedURL, "_self");
  };

  return (
    <BookmarkWrapper>
      <OptionsWrapper>
        <Popover
          noPadding
          opened={isPopoverOpen.isOn}
          onClose={isPopoverOpen.setOff}
          onOpen={isPopoverOpen.setOn}
          content={
            <>
              <ListChoice title="Edit" onClick={handleEditClick} />
              <ListChoice title="Delete" onClick={handleDeleteClick} />
            </>
          }
        >
          <MenuMeatballsIcon customColor="#1f7bb6" size="small" />
        </Popover>
      </OptionsWrapper>
      <ExternalLink onClick={handleBookmarkClick(bookmark.url)}>
        <Button>{bookmark.name}</Button>
      </ExternalLink>
    </BookmarkWrapper>
  );
};

export default Bookmark;
