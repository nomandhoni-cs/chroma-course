import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"



const SharedLayout = ({giveAlert, logo, cart, user, loginSignupHandler, handleSignOut}) => {
  return (
    <>
    <Header loginSignupHandler={loginSignupHandler} handleSignOut ={ handleSignOut } user={user} giveAlert = {giveAlert} logo={logo} cart={cart}/>
    <Outlet />
    <Footer />
    </>
  )
}

export default SharedLayout