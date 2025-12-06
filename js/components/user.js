//import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }

    user = this.props.user
    
    // Не работает в разметке
    //<IoCloseCircleSharp className="delete-icon" />

    render() {
        return (
           <div className="user">       
                <button onClick={() => this.props.onDelete(this.user.id)} className="delete-icon">Удалить</button>
                <button onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                } } className="edit-icon">Редактировать</button>
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <img src={this.user.avatar} />
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>         
        )
    }
}