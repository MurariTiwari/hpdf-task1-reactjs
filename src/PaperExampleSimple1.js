import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const style = {
  height:"100px",
  width: "100%",
  textAlign: 'left',
  backgroundColor:'#03A9F4',

};
const s2={
	marginTop:70,
	marginLeft:30
}
const s4={
	marginLeft:120
}
const s3={
	height:"120px"
}

class PaperExampleSimple1 extends React.Component{
render(){
	return(
  <div>
    <Paper style={style} zDepth={1} >
	<Avatar src={this.props.pimage} size="70px" style={s2}/>
	</Paper>
    <Paper  zDepth={1} style={s3}>
	<b style={s4}>{this.props.name}</b><p style={s4}>{this.props.address}</p><br/>
	<b style={s2}>Tweets  45</b><b style={s2}>Following  3</b>
	</Paper>
	</div>
  );
}}
export default PaperExampleSimple1;
