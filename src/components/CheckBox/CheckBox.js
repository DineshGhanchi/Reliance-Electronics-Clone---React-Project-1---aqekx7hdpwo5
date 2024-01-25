import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBox({ name, data }) {
  
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });

  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filter By: <span style={{ color: '#584d4d', fontSize: '15px', fontWeight: "600" }}>{name}</span></FormLabel>
        <FormGroup>
          {data.map((item ,index) => {
            return <FormControlLabel
              control={
                <Checkbox checked={item} onChange={handleChange} name={item} />
              }
              label= {item}
              key={index}
            />
          })}
          
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>

    </Box>
  );
}