import { FormControl, InputLabel, MenuItem, useTheme } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import { Theme } from '@mui/material/styles'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

type Props = {
  name: string
  values: Array<string>
  handleChange: any
}

export const MultiSelect = ({ name, values, handleChange }: Props) => {
  const theme = useTheme()

  return (
    <div>
      <FormControl sx={{ my: 4, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Persons</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={values}
          onChange={handleChange}
          input={<OutlinedInput label="person" />}
          MenuProps={MenuProps}
          name="person"
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, values, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
