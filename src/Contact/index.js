import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './styles';
import { CONTACT_REF } from '../refs';
import Spinner from '../Spinner'

const Contact = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://portfolio-groot.firebaseio.com/contact.json')
      .then(resp => {
        let data = [];
        for (let i in resp.data) {
          data.push({
            key: i,
            value: resp.data[i]
          })
        }
        setInfo(data);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      })
  }, [])

  const classes = useStyles();
  return (
    <div ref={CONTACT_REF}>
      <div className={classes.contactTitle}>Contact</div>
      <TableContainer className={classes.tableWrapper}>
        <Table>
          <TableBody>
            {
              isLoading
                ?
                <Spinner />
                :
                info.map(val =>
                  <TableRow key={val.id}>
                    <TableCell className={classes.tableCell}>{val.key}</TableCell>
                    <TableCell className={classes.tableCell}>{val.value}</TableCell>
                  </TableRow>
                )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default Contact;