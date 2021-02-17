import React, { useState } from "react";
import cookies from "js-cookie";

import PlusIcon from "@kiwicom/orbit-components/lib/icons/Plus";

import { useToggle } from "../../../../utils/useToggle";
import { cookiesTypes } from "../../../../consts/cookies";

import { Wrapper, BookmarksWrapper, Button } from "./index.styled";

import Bookmark from "./Bookmark";
import AddOrEditBookmark from "./AddOrEditBookmark";

const getBookmarks = () => {
  const bookmarks = cookies.get(cookiesTypes.BOOKMARKS);
  const parsedBookmarks = bookmarks ? JSON.parse(bookmarks) : [];
  return parsedBookmarks;
};

const Bookmarks = () => {
  const isAddOrEditBookmarkShown = useToggle();
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [editingBookmarkId, setEditingBookmarkId] = useState(null);

  const deleteBookmark = (bookmarkId: any) => {
    const newBookmarks = bookmarks.filter(
      (bookmark: any) => bookmark.id !== bookmarkId
    );
    setBookmarks(newBookmarks);
    cookies.set(cookiesTypes.BOOKMARKS, JSON.stringify(newBookmarks), {
      expires: 365 * 10,
    });
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
          Add New Bookmark
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
