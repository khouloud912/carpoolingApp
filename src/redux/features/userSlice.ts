import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../api/types"


interface IUserState{
    user: IUser | null;
}

const initialState: IUserState={
    user: null,
}

export const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        login :(state, action: PayloadAction<IUser>)=>{
            state.user = action.payload
        },
        logout:()=> initialState
    }
})

export default userSlice.reducer