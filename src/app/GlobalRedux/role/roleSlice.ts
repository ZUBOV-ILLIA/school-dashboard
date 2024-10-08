import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RoleState {
  role: string;
}

const initialState: RoleState = {
  role: "",
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
