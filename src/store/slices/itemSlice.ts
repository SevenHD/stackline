import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/functions";

interface Review {
    customer: string;
    review: string;
    score: number;
}

export interface Sale {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number
}

export interface Item {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: String[];
    tags: String[];
    sales: Sale[];
}

interface ItemState {
    items: Item[];
    loading: boolean;

}

const initialState: ItemState = {
    items: [{
        id: "",
        title: "",
        image: "",
        subtitle: "",
        brand: "",
        reviews: [],
        retailer: "",
        details: [],
        tags: [],
        sales: [],
    }],
    loading: false
}

// Create a Thunk to handle async request
export const getItems = createAsyncThunk<Item[]>("getItems", async () => {
    const data = await fetchData()
    return data
})

//Create item reducer
const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(getItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getItems.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default itemSlice.reducer