import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSubMenu: false,
  notificationsSubMenu: false,
  setting: false,
  sidebarMenu: false,
  filterMenu: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: initialState,
  reducers: {
    userSunMenuHandler(state) {
      state.userSubMenu = !state.userSubMenu;
      state.notificationsSubMenu = false;
    },
    notificationsHandler(state) {
      state.notificationsSubMenu = !state.notificationsSubMenu;
      state.userSubMenu = false;
    },
    settingHandler(state) {
      state.setting = !state.setting;
    },
    sidebarMenu(state) {
      state.sidebarMenu = !state.sidebarMenu;
    },
    filterMenu(state) {
      state.filterMenu = !state.filterMenu;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
