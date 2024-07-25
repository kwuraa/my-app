import { Route, Routes } from "react-router-dom"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"
import { useContext } from "react"
import { AppContext } from "./components/AppContext"

const MainRoutes = () => {
    const {isLoggedIn} = useContext(AppContext)
       return( 
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
            <Route path="/contaInfo" element={<ContaInfo />} />
        </Routes>
        )
}

export default MainRoutes