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
    constructor(props) {
        super(props)
        this.state = {
            helpText: "Help Text!",
            userData: ""
        }
        this.inputClick = this.inputClick.bind(this)
    }
    
    //Эффект в компоненте
    componentDidUpdate(prevProp){
        if (this.state.helpText !== 'Help'){
            console.log("helpText не равен Help")
        }
        else {
            console.log("helpText равен Help")
        }
    }

    render() {
        return (
            <div className="helpClass">
                <Header title="Шапка сайта"/>                

                <h3>{this.state.helpText}</h3>
                <h3>{this.state.userData}</h3>

                <input
                    placeholder={this.state.helpText}
                    onChange={event => this.setState({userData: event.target.value})}
                    onClick={this.inputClick} />
                <p>{this.state.helpText === 'Help Text!' ? "Да" : "Нет"}</p>
                <Image image="./img/react.jpg" />
            </div>
        )
    }

    inputMouseEnter() {console.log("helpText")}
    inputClick() {
        this.setState({helpText: "Changed"})
        console.log("inputClick")
    }
}

//export default App