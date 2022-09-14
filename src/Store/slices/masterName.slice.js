import {createSlice} from '@reduxjs/toolkit'

const masterNameSlice = createSlice({
  name: 'masterName',
  initialState: '',
  reducers: {
    setNameTrainer: (state, action) => action.payload
  }
})

export const {setNameTrainer} = masterNameSlice.actions
export default masterNameSlice.reducer