class Users extends React.Component {

    users = [
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
    ]

    render() {
        if (this.users.length > 0)
            return (
            <div>
                {
                    this.users.map((el)=>(
                        <div className="user" key={el.id}>
                            <h3>{el.firstname} {el.lastname}</h3>
                            <p>{el.bio}</p>
                            <b>{el.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
                        </div>
                    ))
                }
            </div>        
            )
        else
            return(
                <div className="user">
                    <h3>Пользователей нет</h3>
                </div>
        )
    }
}