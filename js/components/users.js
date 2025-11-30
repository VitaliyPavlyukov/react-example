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
        return (
           <div>
            {
                this.users.map((el)=>(
                    <div className="user" key={el.id}>
                        <h3>{el.firstname} {el.lastname}</h3>
                        <p>{el.bio}</p>
                    </div>
                ))
            }
           </div>        
        )
    }
}