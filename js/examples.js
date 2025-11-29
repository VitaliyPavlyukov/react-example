//var ReactDOM = require('react-dom/client');

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

// Header как функция
// function Header(){
//     return (
//         <header>Шапка сайта</header>
//     )
// }

// Header как константа
// const Header = () => {
//     return (
//         <header>Шапка сайта</header>
//     )
// }

// Header как класс
class Header extends React.Component {
    render() {
        return (
            <header>Шапка сайта</header>
        )
    }
}

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
    render() {
        return (
            <div className="helpClass">
                <Header/>

                <h3>{helpText}</h3>
                <input placeholder={helpText} onMouseEnter={inputMouseEnter} />
                <p>{helpText === 'Help Text!' ? "Да" : "Нет"}</p>
            </div>
        )
    }
}

const app = document.getElementById("app")
ReactDOM.render(<App />, app)