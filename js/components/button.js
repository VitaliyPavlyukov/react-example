const Button = (props) => {
    // Изменение состояния через Хуки
    const [click, setClick] = React.useState(0)
    console.log('click', click)

    return (
            <button onClick={() => setClick(click + 1)}>{props.text} {click}</button>
        )    
}

Button.defaultProps = {
    text: "Кнопка"
}