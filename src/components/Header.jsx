import logo from "../assets/img/logo.jpeg"
import NavBar from "./NavBar"

export default function Header() {

    return (
        <>
          <header className="p-3">
            <div className="d-flex justify-content-between">
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <NavBar />
                </div>
            </div>
          </header>
        </>
    )
}