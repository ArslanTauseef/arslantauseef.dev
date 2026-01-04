import "../styles/middle/middle.css"
import MyPicture from "../../../../assets/Pictures/MyPicture/MyPicture.png"

export const Middle = () => {
  return (
    <main className="at-main">
        <section className="left-main-section">
            <div><h1>Hi, this is a test heading.</h1></div>
            <div><h2>This website is a personal Portfolio.</h2></div>
            <div><h3>Thanks, for taking interest.</h3></div>
        </section>
        <section className="right-main-section">
            <div><img src={MyPicture} alt="Profile Picture (Arslan Tauseef)" /></div>
        </section>
    </main>
  )
}
