import { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

const Details = () => {
  const { id } = useParams()
  const [pokemons, setPokemons] = useState({})

  useEffect(()=> {

  }, [id])

  return (
    <div>
      <h1>página de detalhes</h1>
    </div>
  )
}

export default Details
