import languages from "../data/languages.js"
import MyButton from "./MyButton.jsx"





const AppMain = () => {

    return (
        <main>
            <div className="container">
                {
                    languages.map(curElem => {
                        <button key={curElem.id}>{curElem.title}</button>
                    })
                }
            </div>
        </main>
    )
}

export default AppMain
