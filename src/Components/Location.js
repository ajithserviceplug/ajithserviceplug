import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Autocomplete from '@mui/material/Autocomplete';



export default function Location() {
    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }));

      const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });

  return (
   <>
   <div className="input-group w-auto" style={{'backgroundColor':'#fff', 'borderRadius': '7px'}} >
            <span className="input-group-text w-50"  style={{flexWrap: 'initial'}}>
            <HtmlTooltip
        title={
          <React.Fragment>
             <List
      sx={{
        width: '100%',
        maxWidth: 800,
        bgcolor: '#fff',
      }}
    >
      <ListItem>
        <ListItemText className='l1-txt' primary="Detect current location" secondary="Using GPS" />
      </ListItem>    
      <Divider component="li" variant="inset" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 9 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          (OR)
        </Typography>
      </li>
      <ListItem>
       
        <ListItemText primary="Enter location manually"  />
      </ListItem>
    </List>
          </React.Fragment>
        }
      >
        <Button> <span className='sm-1'>Bengaluru <span className='sm-3'>No 71, Apartmen...</span></span></Button>
      </HtmlTooltip>

   </span>

<Autocomplete
      id="movie-customized-option-demo"
      
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="" />}
    />
            {/* </span> */}
          </div>
   </>
  )
}


const top100Films = [  
  { title: 'Aliens', year: 1986 },
  { title: 'Aliens2', year: 1996 },
  { title: 'Aliens3', year: 1998 },

  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];


