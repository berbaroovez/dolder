import { createSlice,PayloadAction  } from "@reduxjs/toolkit";
import { Database } from "../../lib/database.types";
import { Course } from "../../types/supabase";
import { RootState } from "../store";

interface SelectedFileState {
    value: Course | null;
}

const initialState: SelectedFileState = {
    value: null,
};


export const selectedFileSlice = createSlice({
    name: "selectedFile",
    initialState,
    reducers: {
        setSelectedFile: (state, action: PayloadAction<Course>) => {           
            state.value = action.payload;
        }
    }
});

export const { setSelectedFile } = selectedFileSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectFile = (state: RootState) => state.selectedFile.value
export default selectedFileSlice.reducer;