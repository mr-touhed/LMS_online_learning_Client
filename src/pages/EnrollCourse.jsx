
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLoaderData } from 'react-router-dom';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function EnrollCourse() {

  const  loadData = useLoaderData();

  console.log(loadData);

  if(!loadData.status) return "no Enroll Course Found";

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableBody>
          {loadData?.data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                  <Stack alignItems="center">
                      <Box>
                      <Avatar
                          alt="Remy Sharp"
                          src={row.thumb}
                          sx={{ width: 56, height: 56 }}
                        />
                      </Box>
                      <Box>
                        <Typography>{row.title}</Typography>
                      </Box>
                  </Stack>
                
                
                
                
                </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right" style={{color:"green"}}>{row.payment}</TableCell>
              <TableCell align="right">{row.createAt}</TableCell>
              <TableCell align="right">
                <Button href='https://github.com/mr-touhed' target="_blank" >Continue Course</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
