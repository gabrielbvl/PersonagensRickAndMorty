import CharCard from "../CharCard"
import './styles.css'

function Characters ( { characterList, next, setNext } ) {
    
    const nextPage = () => {
        setNext(next+1)
    }

    const previousPage = () => {
            if (next > 1) {
                setNext(next-1)
            }
    }

    return(

        <div className="Container">
            <h1>Meus Personagens</h1>
            
            <div className="Buttons">
                <button className="Previous" onClick={previousPage}>Previous</button>
                <button className="Next" onClick={nextPage}>Next</button>
             </div>

            <ul className="Cards">
            {characterList.map((card) =>
            <CharCard
            key={card.id}
            name={card.name}
            image={card.image}
            status={card.status}
            location={card.location.name}
            species={card.species}
            gender={card.gender}
            />)
            }
            </ul>
        </div>

    )

}

export default Characters