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
            <header className="header">{this.props.title}</header>
        )
    }
}