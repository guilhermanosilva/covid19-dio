import React, {memo, useState, useEffect, useCallback} from 'react'
import { getCountry } from '../../api'
import ContainerStyled from './style'
import Board from './components/Board'
import Panel from './components/Painel'

function Main(){

  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')

  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    getCountry(country)
      .then(data => setData(data))
  },[])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel 
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        ></Panel>
      </div>
      
      <Board data={data}/>


    </ContainerStyled>
  )
}

export default memo(Main)

// memo cria um componente imutável
// evita a renderização desnecessária, rerender quando não precisa