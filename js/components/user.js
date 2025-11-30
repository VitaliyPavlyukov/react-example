//import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component {
    user = this.props.user
    
    // Не работает в разметке
    //<IoCloseCircleSharp className="delete-icon" />

    render() {
        return (
           <div className="user">       
                <button className="delete-icon">Удалить</button>
                <button className="edit-icon">Редактировать</button>
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
            </div>         
        )
    }
}