import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { FormProps } from '../../type'
import { MultiSelect } from '../MultiSelect'

const initialValues: FormProps = {
  title: '',
  persons: [],
}

export const Form = () => {
  const [data, setData] = useState(initialValues)

  const handleChange = ({ target }: any) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }))

    //   const {
    //     target: { name, value },
    //   } = event
    // setData({ ...data, [name]: value })
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    console.log('Data: ', data)
  }

  return (
    <>
      <Box my={4}>
        <Typography variant="subtitle2" color="black">
          Custom Form
        </Typography>
      </Box>
      <form onSubmit={onSubmit}>
        <TextField id="title" label="title" variant="outlined" onChange={handleChange} />
        <MultiSelect name="person" values={data.persons} handleChange={handleChange} />

        <Button variant="contained" type="submit">
          Enviar{' '}
        </Button>
      </form>
    </>
  )
}
