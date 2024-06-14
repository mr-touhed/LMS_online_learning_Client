
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useState } from 'react';
import { pathName } from '../utils/URL';
import { send_token } from '../utils/tools';
import { Avatar, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';





export default function CourseList() {
        const [courseList,setCourseList] = useState([]);
        const [loading,setLoading] = useState(false)

    useEffect(()=>{
          const getcourseList = async() =>{
            setLoading(true)
            try {
                const res = await fetch(`${pathName}/author-course`,{method:"GET",headers:send_token()})
                const result = await res.json();
                setCourseList(result.course_list)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
          }
          getcourseList()
    },[])

    

    if(loading) return

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableBody>
          {courseList&& courseList.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack alignItems="center" >
                <Avatar
                variant="square"
                  alt="Remy Sharp"
                  src={row.thumb}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography variant='h6'> {row.title}</Typography>
                </Stack>
                
              </TableCell>
              <TableCell align="right">{row.price}$</TableCell>
             
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.catagory}</TableCell>
              <TableCell align="right">
                <Link to={`/dashboard/course/edit/${row._id}`}>
                <Button><EditNoteIcon/></Button>
                </Link>
                <Button onClick ={ ''}><DeleteForeverIcon/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
