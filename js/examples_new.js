import React from 'react';

//import React from "react"
//import ReactDOM from "react-dom"

// ReactDOM.render(<div><h1>Заголовок</h1></div>, document.getElementById("app"))
// ReactDOM.render(React.createElement('input', {
//     placeholder: "help text",
//     value: "",
//     onMouseEnter: () => console.log('button mouse enter')
//     //onClick: () => alert('1')
// }), document.getElementById("app"))

//ReactDOM.render(<input placeholder="help text 2" />, document.getElementById("app"))

const helpText = "Help Text!"

const inputMouseEnter = () => console.log({helpText})

const elements = (
    <div className="helpClass">
        <h3>{helpText}</h3>
        <input placeholder={helpText} onMouseEnter={inputMouseEnter} />
        <p>{helpText === 'Help Text!' ? "Да" : "Нет"}</p>
    </div>
)
const app = reactDOMClient.createRoot(document.getElementById("app"))

app.render(elements)