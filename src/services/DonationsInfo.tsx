import React, { useReducer, createContext } from "react";

const initialState: any = {
  donationsInfoLoading: false,
  donationsInfoError: null,
  donationsInfoData: null,
};

export const DonationsInfoContext = createContext({
  state: initialState,
  loadDonationsInfo: () => {},
});

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_DONATIONS_INFO":
      return {
        ...state,
        donationsInfoLoading: true,
        donationsInfoError: null,
        donationsInfoData: null,
      };
    case "LOAD_DONATIONS_INFO_SUCCESS":
      return {
        ...state,
        donationsInfoLoading: false,
        donationsInfoData: payload.response,
      };
    case "LOAD_DONATIONS_INFO_FAILED":
      return {
        ...state,
        donationsInfoLoading: false,
        donationsInfoError: true,
      };
    default:
      return state;
  }
};

const DonationsInfoProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadDonationsInfo = async () => {
    dispatch({
      type: "LOAD_DONATIONS_INFO",
    });

    try {
      fetch(
        "https://spreadsheets.google.com/feeds/cells/1ZtBLRpVMjBdzyBAggZDDV9nbEPPw3DCeYINaucaVV5s/od6/public/basic?alt=json"
      ).then((r) =>
        r.json().then((response) => {
          dispatch({
            type: "LOAD_DONATIONS_INFO_SUCCESS",
            payload: {
              response: JSON.parse(response.feed.entry[0].content["$t"]),
            },
          });
        })
      );
    } catch (error) {
      dispatch({ type: "LOAD_DONATIONS_INFO_FAILED" });
    }

    // const response =
    // setTimeout(() => {
    //   dispatch({
    //     type: "LOAD_DONATIONS_INFO_SUCCESS",
    //     payload: { response: "weeee" },
    //   });
    // }, 3000);
  };

  const value: any = { state, loadDonationsInfo };

  return (
    <DonationsInfoContext.Provider value={value}>
      {children}
    </DonationsInfoContext.Provider>
  );
};

export default DonationsInfoProvider;
