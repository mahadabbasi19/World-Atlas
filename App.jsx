import { Outlet } from "react-router-dom";
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import "./App.css"

const App  = ()=>{
  return <>
  <Header></Header>
  <Outlet></Outlet>
  <Footer></Footer>
  </>
}

export default App;