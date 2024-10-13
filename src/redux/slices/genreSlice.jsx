import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_GENRE, API_KEY } from '../../constants/api'

const initialState = {
  genres: [],//api den gelen isteklerle bu boş dizi değerini dolduracağız
}
//axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b2a1f4bce5bdd90efc53293c42d059fe")
//bu api isteğini api.jsx ile dinamik hale getirdik 
export const getGenre= createAsyncThunk("getGenres", async() => {
    const res = await axios.get(`${API_GENRE}?api_key=${API_KEY}`)
    //console.log(res)
    return res.data.genres
})


export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {//api den değer alacaksak burayı kullanamayız apisiz yerler için burası kullanılır
    },
  extraReducers:(builder) => { //api isteği var ise buradan işlemleri yapıyoruz
    builder
        .addCase(getGenre.fulfilled, (state, action) => {
            state.genres = action.payload
        })
  }
})

// Action creators are generated for each case reducer function
//api den işlem alacağımız için burayı kullanmıyoruz genre için
//export const { increment, decrement} = countgenre.actions

export default genreSlice.reducer