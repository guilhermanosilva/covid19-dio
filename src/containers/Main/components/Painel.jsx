import React, { memo } from 'react'
// import RefreshIcon from '../../../assets/images/refresh.svg'
import {Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { 
  CardPanelContentStyled, 
  ItemStyled, 
  CardPainelStyled,
  PainelStart,
  PainelEnd
} from './style'

const navigatorHasShared = navigator.share

function Painel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`Pais-${country.label}`} height={24} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `
    País: ${country} - 
    Total de casos: ${cases} -
    Recuperados: ${recovered} -
    Mortos: ${deaths}`

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }
  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>Compartilhar</Button>
    </div>
  )

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>Copiar</Button>
    </div>
  )

  return (
    <CardPainelStyled>
      <CardPanelContentStyled>
        <PainelStart>
          <Typography variant="h4" component="span" color="primary">COVID19</Typography>
          <Typography variant="h6" component="span" color="text.secondary">Painel coronavirus</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>{COUNTRIES.map(renderCountries)}</Select>
          </div>
        </PainelStart>
        <PainelEnd>
          {navigatorHasShared ? renderShareButton : renderCopyButton}
          <Typography variant="subtitle2" component="span" color="primary">Atualizado em {updateAt}</Typography>
        </PainelEnd>
      </CardPanelContentStyled>
    </CardPainelStyled>
  )

}

export default memo(Painel)