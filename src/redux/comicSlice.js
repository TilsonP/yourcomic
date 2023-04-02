import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    title: "",
    num: 0,
    year: "",
    month: "",
    day: "",
    transcript: "",
    alt: "",
    img: "",
}

export const comicSlice = createSlice({
    name: "comic",
    initialState,
    reducers: {
        getComic: (state, action) => {
            const {title, num, year, month, day, transcript, alt, img} = action.payload;
            state.title = title;
            state.num = num;
            state.year = year;
            state.month = month;
            state.day = day;
            state.transcript = transcript;
            state.alt = alt;
            state.img = img;
        }
    }
})

export const {getComic} = comicSlice.actions
export default comicSlice.reducer

