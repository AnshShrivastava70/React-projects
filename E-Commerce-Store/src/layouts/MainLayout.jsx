import { Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"
import Navigation from "../components/Navigation"

const MainLayout = () => {
  return (
    <>
    <Navigation/>
    <Breadcrumbs/>
    <Outlet/>
    </>
  )
}
export default MainLayout