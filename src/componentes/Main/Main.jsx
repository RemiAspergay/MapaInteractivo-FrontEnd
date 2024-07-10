import "./Main.css" 

function Main({children}) {
  return (
    <div className="main-container">
        <div className="main-content">
        {children}
        </div>
    </div>
  )
}

export default Main