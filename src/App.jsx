import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home.jsx"
import MyList from "./pages/myList/MyList.jsx"
import { HOME, MY_LIST } from "./constants/path.jsx"


function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path={HOME} element={ <Home/>} />
          <Route path={MY_LIST} element={ <MyList/>} />

        </Routes>
      </div>
    </>
  )
}

export default App
