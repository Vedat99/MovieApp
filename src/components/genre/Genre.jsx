import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../../redux/slices/genreSlice'
import "./Genre.css"

const Genre = () => {
  const {genres} =useSelector(store => store.genre)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenre())
  }, [genres])


  return (
    <>
      <div className='genres'>
        <ul>
        {
          genres && genres?.map((genre) => (
            <li key={genre.id}>
              {genre.name}
            </li>
          ))
        }
        </ul>
      </div>
    </>
  )
}

export default Genre