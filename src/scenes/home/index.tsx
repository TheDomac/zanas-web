import React, { useState, useRef } from "react";
import styled from "styled-components";
import cookies from "js-cookie";

import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from "@kiwicom/orbit-components/lib/Button";

import { useToggle } from "../../utils/useToggle";
import { cookiesTypes } from "../../consts/cookies";

import Shortcut from "./components/Shortcut";
import Clock from "./components/Clock";

const ShortcutsComponentWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
`;
const ShortcutsWrapper = styled.div`
  margin-bottom: 20px;
  max-height: 550px;
  max-width: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;
  align-content: flex-start;
`;
const AddnewShortcutWrapper = styled.div`
  margin-left: 5px;
  max-width: 250px;
`;
const FormSubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const getShortcuts = () => {
  const shortcuts = cookies.get(cookiesTypes.SHORTCUTS);
  const parsedShortcuts = shortcuts ? JSON.parse(shortcuts) : [];
  return parsedShortcuts;
};

const Home = () => {
  const isNewShortcutOpen = useToggle();
  const [newShortcutName, setNewShortcutName] = useState("");
  const [newShortcutUrl, setNewShortcutUrl] = useState("");
  const [shortcuts, setShortcuts] = useState(getShortcuts());
  const inputName: any = useRef();

  const changeName = (e: any) => setNewShortcutName(e.target.value);
  const changeUrl = (e: any) => setNewShortcutUrl(e.target.value);

  const openNewShortcut = () => {
    isNewShortcutOpen.setOn();
    inputName.current.focus();
  };

  const addNewShortcut = (e: any) => {
    e.preventDefault();
    const newShortcuts = [
      ...shortcuts,
      {
        name: newShortcutName,
        url: newShortcutUrl,
        id: new Date().getTime(),
      },
    ];

    setShortcuts(newShortcuts);
    setNewShortcutName("");
    setNewShortcutUrl("");
    isNewShortcutOpen.setOff();

    cookies.set(cookiesTypes.SHORTCUTS, JSON.stringify(newShortcuts), {
      expires: 365,
    });
  };

  const deleteShortcut = () => {
    // todo
  };

  return (
    <>
      <ShortcutsComponentWrapper>
        {shortcuts.length > 0 && (
          <ShortcutsWrapper>
            {shortcuts.map((shortcut: any) => (
              <Shortcut key={shortcut.id} shortcut={shortcut} />
            ))}
          </ShortcutsWrapper>
        )}
        <AddnewShortcutWrapper>
          {isNewShortcutOpen.isOn ? (
            <form onSubmit={addNewShortcut}>
              <InputField
                ref={inputName}
                value={newShortcutName}
                placeholder="Name"
                onChange={changeName}
              />
              <InputField
                value={newShortcutUrl}
                placeholder="https://example.com/"
                onChange={changeUrl}
              />

              <FormSubmitWrapper>
                <Button submit>Add</Button>
                <Button onClick={isNewShortcutOpen.setOff}>Close</Button>
              </FormSubmitWrapper>
            </form>
          ) : (
            <Button onClick={openNewShortcut}>Add New Shortcut</Button>
          )}
        </AddnewShortcutWrapper>
      </ShortcutsComponentWrapper>
      <Clock />
    </>
  );
};

export default Home;
