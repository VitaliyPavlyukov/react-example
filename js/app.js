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
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    id: 0,
                    firstname: "Bob",
                    lastname: "Marley",
                    bio: "Биография",
                    age: 40,
                    isHappy: true
                },
                {
                    id: 1,
                    firstname: "John",
                    lastname: "Doe",
                    bio: "Биография",
                    age: 30,
                    isHappy: false
                }
            ],
            
            helpText: "Help Text!",
            userData: ""
        }

        // В методе addUser можно использовать состояния
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)

        this.inputClick = this.inputClick.bind(this)
    }

    // Предыдущий конструктор
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         helpText: "Help Text!",
    //         userData: ""
    //     }
    //     this.inputClick = this.inputClick.bind(this)
    // }
    
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

                <main>
                    <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
                </main>  
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>

                <Button />
                <Button text="Button" />            

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

    deleteUser(id){
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user){
        let allUsers = this.state.users
        allUsers[user.id] = user
        this.setState({ users: []}, () => {
            this.setState({ users: [...allUsers] })
        })
    }

    addUser(user){
        console.log('user', user)

        const id = this.state.users.length + 1
        // ... - все атрибуты в объекте
        this.setState({ users: [...this.state.users, {id, ...user}] })
    }

    inputMouseEnter() {console.log("helpText")}
    inputClick() {
        this.setState({helpText: "Changed"})
        console.log("inputClick")
    }
}

//export default App