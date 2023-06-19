import { NextPage } from "next";
import Navbar from "./navbar/Navbar";
import Footer from './footer/Footer';

const Layout: NextPage = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout
