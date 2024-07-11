import "./Main.css" 
import NavBar from "../NavBar/NavBar"

function Main({ children }) {
  return (
    <>
    <NavBar>
    <div className="main-container">
      <div className="main-content">{children}</div>
    </div>
    </ NavBar>
    </>
  )
}

export default Main;
 */
