import React, { useState } from "react";

import PlusIcon from "@kiwicom/orbit-components/lib/icons/Plus";

import { useToggle } from "utils/useToggle";
import useTranslate from "utils/useTranslate";
import { keys } from "consts/localStorage";

import { Wrapper, BookmarksWrapper, Button } from "./index.styled";

import Bookmark from "./Bookmark";
import AddOrEditBookmark from "./AddOrEditBookmark";

const getBookmarks = () => {
  const bookmarks = localStorage.getItem(keys.BOOKMARKS);
  const parsedBookmarks = bookmarks ? JSON.parse(bookmarks) : [];
  return parsedBookmarks;
};

const Bookmarks = () => {
  const translate = useTranslate();
  const isAddOrEditBookmarkShown = useToggle();
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [editingBookmarkId, setEditingBookmarkId] = useState(null);

  const deleteBookmark = (bookmarkId: any) => {
    const newBookmarks = bookmarks.filter(
      (bookmark: any) => bookmark.id !== bookmarkId
    );
    setBookmarks(newBookmarks);
    localStorage.setItem(keys.BOOKMARKS, JSON.stringify(newBookmarks));
  };

  return (
    <Wrapper>
      {bookmarks.length > 0 && (
        <BookmarksWrapper>
          {bookmarks.map((bookmark: any) => (
            <Bookmark
              key={bookmark.id}
              bookmark={bookmark}
              deleteBookmark={deleteBookmark}
              setEditingBookmarkId={setEditingBookmarkId}
              isAddOrEditBookmarkShown={isAddOrEditBookmarkShown}
            />
          ))}
          {!isAddOrEditBookmarkShown.isOn && (
            <Button onClick={isAddOrEditBookmarkShown.setOn}>
              <PlusIcon />
            </Button>
          )}
        </BookmarksWrapper>
      )}
      {!isAddOrEditBookmarkShown.isOn && bookmarks.length === 0 && (
        <Button onClick={isAddOrEditBookmarkShown.setOn} iconAndText>
          <PlusIcon />
          {translate("add_bookmark")}
        </Button>
      )}
      {isAddOrEditBookmarkShown.isOn && (
        <AddOrEditBookmark
          isAddOrEditBookmarkShown={isAddOrEditBookmarkShown}
          editingBookmarkId={editingBookmarkId}
          setEditingBookmarkId={setEditingBookmarkId}
          setBookmarks={setBookmarks}
          bookmarks={bookmarks}
        />
      )}
    </Wrapper>
  );
};

export default Bookmarks;
