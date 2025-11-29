//import React from "react"
//import ReactDOM from "react-dom"
//import Header from ".components/header.js"
//import Image from ".img/react.jpg"
//import './css/main.css'

//var ReactDOM = require('react-dom/client');

// ReactDOM.render(<div><h1>Заголовок</h1></div>, document.getElementById("app"))
// ReactDOM.render(React.createElement('input', {
//     placeholder: "help text",
//     value: "",
//     onMouseEnter: () => console.log('button mouse enter')
//     //onClick: () => alert('1')
// }), document.getElementById("app"))

//ReactDOM.render(<input placeholder="help text 2" />, document.getElementById("app"))

//const helpText = "Help Text!"

//const inputMouseEnter = () => console.log({helpText})

// Компонент как фукнция
// function App(){
//     return (
//     <div className="helpClass">
//         <Header/>

//         <h3>{helpText}</h3>
//         <input placeholder={helpText} onMouseEnter={inputMouseEnter} />
//         <p>{helpText === 'Help Text!' ? "Да" : "Нет"}</p>
//     </div>
//     )
// }

// Компонент как класс
class App extends React.Component {
    helpText = "Help Text!"

    render() {
        return (
            <div className="helpClass">
                <Header title="Шапка сайта"/>
                <Header title="Шапка сайта 2"/>

                <h3>{this.helpText}</h3>
                <input placeholder={this.helpText} onMouseEnter={this.inputMouseEnter} />
                <p>{this.helpText === 'Help Text!' ? "Да" : "Нет"}</p>
                <Image image="./img/react.jpg" />
            </div>
        )
    }

    inputMouseEnter() {console.log("helpText")}
}

//export default App