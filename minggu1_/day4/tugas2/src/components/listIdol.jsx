import "./listIdol.css"
function ListIdol(props) {
   return (
    <div className="container">
        <img src={props.foto} alt={props.nama} className="box"/>
        <p className="text">{props.text}</p>
    </div>
   )     
}

export default ListIdol;