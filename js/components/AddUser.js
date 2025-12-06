class AddUser extends React.Component {
    userAdd = {}

    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            avatar : "",
            bio: "",
            age: 1,
            isHappy: false
        }

        // Обновление значений ввода        
        if (this.props.user){
            this.state.firstname = this.props.user.firstname;   
            this.state.lastname = this.props.user.lastname;  
            this.state.avatar = this.props.user.avatar;  
            this.state.bio = this.props.user.bio;  
            this.state.age = this.props.user.age;  
            this.state.isHappy = this.props.user.isHappy;                       
        }
    }

    render() {        

        return (
            <form ref={(el)=> this.myForm = el}>
                <label htmlFor="firstname">Имя:</label>
                <input placeholder="Имя" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})}></input>                
                <label htmlFor="lastname">Фамилия:</label>
                <input placeholder="Фамилия" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})}></input>
                <label htmlFor="bio">Биография:</label>
                <textarea placeholder="Биография" value={this.state.bio} onChange={(e) => this.setState({bio: e.target.value})}></textarea>
                <label htmlFor="age">Возраст:</label>
                <input placeholder="Возраст" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})}></input>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" checked={this.state.isHappy} onChange={(e) => this.setState({isHappy: e.target.checked})}></input>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        avatar: this.state.avatar,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)                    
                }
                }>{(this.props.user) ? "Сохранить" : "Добавить"}</button>
            </form>        
        )
    }

}