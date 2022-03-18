import './styles.css'

function CharCard ( { name, image, status, location, species, gender } ) {

    //Quis deixar renderizar na tela 15 caracteres sem contas o espaço.
    const limitedName = name.length > 15 ? name.slice(0,15) + '...': name

    return (
        <div className='Div-Border'>
            <div className="Container">
                <div className={status === "Alive" ? "Vivo" : "Morto"}>
                    <h2>{limitedName}</h2>
                    <img src={image} alt={name} />
                    <p>{name}, a {gender} of the {species} species is from {location} and currently is {status}</p>
                </div>
            </div>
        </div>
    )

}

export default CharCard