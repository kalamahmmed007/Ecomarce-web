import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarOpen: false,
    cartDrawerOpen: false,
    modal: null,
    notifications: [],
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar: (state) => { state.sidebarOpen = !state.sidebarOpen; },
        openCartDrawer: (state) => { state.cartDrawerOpen = true; },
        closeCartDrawer: (state) => { state.cartDrawerOpen = false; },
        showNotification: (state, action) => { state.notifications.push(action.payload); },
        hideNotification: (state, action) => {
            state.notifications = state.notifications.filter(n => n.id !== action.payload);
        },
        setModal: (state, action) => { state.modal = action.payload; },
        clearModal: (state) => { state.modal = null; },
    },
});

export const { toggleSidebar, openCartDrawer, closeCartDrawer, showNotification, hideNotification, setModal, clearModal } = uiSlice.actions;
export default uiSlice.reducer;
