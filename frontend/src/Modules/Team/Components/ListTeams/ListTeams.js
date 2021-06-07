import React, { Component, Fragment } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { TableRow, Button ,Container} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import ModalConfirm from '../../../../Shared/Components/ModalConfirm/ModalConfirm';
import { Link } from "react-router-dom";
import { Delete } from '@material-ui/icons';
import TeamService from '../../Shared/TeamService';
import { teal } from "@material-ui/core/colors";

const useStyles = (theme) => ({
  btn: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    float: "right",
  },
  row:{
    margin: `auto`,
  },
  table: {
    flexGrow: 1,
    margin: `auto`,
    border :"1px solid #c3c3c3",
    padding :"10px 10px 10px 10px",
  },
  title: {
    margin: `auto`,
    padding :"50px 50px 50px 50px",
    width :"80%"
  }

})


class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
       teams:[],
    };
  }

  componentDidMount = () =>{
      TeamService.getListTeams().then(res =>{
        this.setState({
            teams:res.data
        })
      });
      console.log(this.state.teams);
     
  };
 

  render() {
    const { classes } = this.props;
    let { teams } = this.state;
    console.log(teams);
    return (
      <Fragment>
           <Container maxWidth="lg" >
        <div><h2 className={classes.title}>Danh sách team</h2></div>
        <TableContainer  className={classes.table}>
          <Table  size="small" aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell><strong>Mã team</strong></TableCell>
                <TableCell align="centrer"><strong>Trưởng team</strong></TableCell>
                <TableCell align="centrer"><strong>Phòng ban</strong></TableCell>
                <TableCell align="centrer"><strong>Số lượng thành viên</strong></TableCell>
                <TableCell><div className={classes.btn}><Button size="small" variant="contained" color="primary" href="./Teams/0">Thêm mới</Button></div></TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {teams.map((item, i) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.code}
                  </TableCell>
                  <TableCell align="centrer">{item.name}</TableCell>
                  <TableCell align="centrer">{item.pic.name}</TableCell>
                  <TableCell align="centrer">{item.desc}</TableCell>
                  <TableCell >
                    <div className={classes.btn}>
                      <Link to={`Teams/${item.id}`}>
                        <Button size="small" variant="contained" color="primary" >Sửa</Button>
                      </Link>
                    </div>
                    <div className={classes.btn}>
                      <Button variant="contained" color="secondary" size="small" startIcon={<Delete />}>Xóa</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Container>
        <ModalConfirm message={this.state.notiConfirm} answer={this.answer}></ModalConfirm>
      </Fragment>
    );
  }
}
export default withStyles(useStyles)(Teams);
