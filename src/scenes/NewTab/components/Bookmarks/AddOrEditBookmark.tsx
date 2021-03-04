import React, { useState, useEffect } from "react";

import InputField from "@kiwicom/orbit-components/lib/InputField";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import { keys } from "consts/localStorage";
import { AddOrEditBookmarkWrapper, Button } from "./index.styled";

import useTranslate from "utils/useTranslate";

const AddOrEditBookmark = ({
  isAddOrEditBookmarkShown,
  editingBookmarkId,
  setEditingBookmarkId,
  setBookmarks,
  bookmarks,
}: any) => {
  const [bookmarkName, setBookmarkName] = useState("");
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const translate = useTranslate();
  const editingBookmark = bookmarks.find(
    (bookmark: any) => bookmark.id === editingBookmarkId
  );

  useEffect(() => {
    setBookmarkName(editingBookmark?.name || translate("new_bookmark"));
    setBookmarkUrl(editingBookmark?.url || "");
  }, [editingBookmark]);

  const changeName = (e: any) => setBookmarkName(e.target.value);
  const changeUrl = (e: any) => setBookmarkUrl(e.target.value);

  const handleAddBookmarkClick = (e: any) => {
    e.preventDefault();
    const newBookmark = {
      name: bookmarkName,
      url: bookmarkUrl,
      id: new Date().getTime(),
    };
    const newBookmarks = [...bookmarks, newBookmark];

    setBookmarks(newBookmarks);
    localStorage.setItem(keys.BOOKMARKS, JSON.stringify(newBookmarks));
    isAddOrEditBookmarkShown.setOff();
  };

  const handleEditBookmarkClick = (e: any) => {
    e.preventDefault();
    const newBookmarks = bookmarks.map((bookmark: any) =>
      bookmark.id === editingBookmarkId
        ? {
            name: bookmarkName,
            url: bookmarkUrl,
            id: editingBookmarkId,
          }
        : bookmark
    );
    setBookmarks(newBookmarks);
    localStorage.setItem(keys.BOOKMARKS, JSON.stringify(newBookmarks));
    setEditingBookmarkId(null);
    isAddOrEditBookmarkShown.setOff();
  };

  const handleCancel = () => {
    setEditingBookmarkId(null);
    isAddOrEditBookmarkShown.setOff();
  };
  return (
    <AddOrEditBookmarkWrapper>
      <form
        onSubmit={
          editingBookmarkId ? handleEditBookmarkClick : handleAddBookmarkClick
        }
      >
        <InputField
          autoFocus
          value={bookmarkName}
          onChange={changeName}
          spaceAfter="small"
        />
        <InputField
          value={bookmarkUrl}
          placeholder={translate("bookmark_placeholder")}
          onChange={changeUrl}
          spaceAfter="small"
        />

        <Stack direction="row" justify="end" spacing="small">
          <Button type="button" onClick={handleCancel}>
            {translate("cancel")}
          </Button>
          <Button type="submit" disabled={!bookmarkName || !bookmarkUrl}>
            {editingBookmarkId ? translate("edit") : translate("add")}
          </Button>
        </Stack>
      </form>
    </AddOrEditBookmarkWrapper>
  );
};

export default AddOrEditBookmark;
