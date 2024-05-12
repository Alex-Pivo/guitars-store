import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constatns";

export const getGuitars = createAsyncThunk('guitars/getGuitars',
    async(_, thunkAPI)=>{
        try{
            const res = await axios(`${BASE_URL}`);
            return res.data;
        } catch (err){
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
)

const guitarsSlice = createSlice({
    name: "guitars",
    initialState: {
        list: [],
        
    },
    extraReducers: (builder) => {
        builder.addCase(getGuitars.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
    }
})


export default guitarsSlice.reducer;