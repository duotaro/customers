import Head from "next/head";
import Navbar from './navbar'
import Footer from './footer'
import Side from "./side";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      {/* Preloader */}
      {/* <div className="preloader flex-column justify-content-center align-items-center">
        <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
      </div> */}
      <Navbar />
      <Side />
      {/* <nav className="navbar navbar-expand navbar-light bg-dark gnav">
      </nav> */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}