import React, {memo} from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board( {data} ){
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60}/> 
  
  return (
    <Grid container splacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(parseInt(cases).toLocaleString())} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(parseInt(todayDeaths).toLocaleString())} label="Óbtios hoje" color="#f7bb29" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(parseInt(todayCases).toLocaleString())} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(parseInt(deaths).toLocaleString())} label="Total de mortos" color="#e95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(parseInt(recovered).toLocaleString())} label="Total de recuperados" color="#67c887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)