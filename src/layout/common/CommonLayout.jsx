import { Outlet ,useLocation} from "react-router-dom"
import { useEffect } from "react";
import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"

const CommonLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    },[pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default CommonLayout
