import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'User', label: 'User', minWidth: 170 },
  { id: 'title', label: 'title', minWidth: 100 },
  {
    id: 'start',
    label: 'start',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'end',
    label: 'end',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'result',
    label: 'result',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(User, title, start, end, result) {  
  return { User, title, start, end, result };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
   
  },
  tableHead :{ 
    backgroundColor : "white"
  }
});

const AP_results = ({fios, tests, users}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [ results, setResults ] = useState([]);
  const [ curList, setCurList] = useState([]);
  const [ curFio, setCurFio ] = useState('');

  const [rows, setRows] = useState( [
    createData('IvanovII', 'test0', "2020-09-01 11:20:20", "2020-09-01 11:20:20", 100), 
  ]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }; 

  useEffect(() => {
    //   fetch('https://cab07.000webhostapp.com/sql_getResults.php')     
    //   .then((response) => {
    //       return response.json();
    //   })
    //   .then((data) => {         
    //       let qq = [];  
    //       data.results.map ( el => {                 
    //           qq.push(
    //               {
    //                   "user_id" : el.user_id/1,
    //                   "test_id" : el.test_id/1,
    //                   "start" : el.start,
    //                   "end" : el.end,
    //                   "result" : el.result/1    
    //               }                   
    //           )});                
    //           setResults(qq); 
    //       });  
    //       genResultTable();
  },[]);
  let genResultTable = () => {
    //   let arr = rows;
    //   results.forEach( el => {                       
    //       let titl = tests[el.test_id/1]["title"];
    //       let usr  = users.get(""+el.user_id);
    //       if ( curFio === '' || curFio === usr ) {
    //           arr.push(   
    //             createData( usr , titl, el.start, el.end.split(' ')[1], el.result)
    //           )
    //       }           
    //   })
    //   console.log ( arr );
    let arr = rows;
    arr.push(createData('IvanovII', 'test0', "2020-09-01 11:20:20", "2020-09-01 11:20:20", 100));
      setRows(arr);

  };
  let selectChange = (event ) =>{
      setCurFio( event.target.value );        
  };
  let refreshBut = () => {
      genResultTable();
  } 
  return (
      <div>
        <div className = "AdminPanel_head">           
            <select                 
                placeholder = "Фамілія вучня"
                onChange = { selectChange }
                >
                {fios.map(el =>{
                    return <option key = {''+el}>{el}</option>
                })}                                                  
            </select>
            <button                
                onClick = { () => refreshBut()}>
                    Аднавіць табліцу
                </button>
        </div>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className = {classes.tableHead}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}

export default AP_results;