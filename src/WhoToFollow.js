import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';


const style = {
 
  width: "100%",
};
const q={
	marginLeft:10,
	marginTop:10,
	fontSize:18
}
const q1={
	marginLeft:10,
	marginTop:10,
	fontSize:12
}
const q2={
	marginLeft:10,
	marginTop:10,
	fontSize:12,
	color:'#999999',
}
const q4={
	marginLeft:80,
	color:"#3F51B5",
}
const WhoToFollow= () => ( <div>
    <Paper style={style} zDepth={1}>
	<b style={q}>Who To Follow</b>
	<a href="#" style={q1}>.Refresh  </a>
	<a href="#"  style={q1}> .View All</a>
	<br/>
	<Avatar src="https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_400x400.jpg" style={q}></Avatar>
	<b style={q1}>Kumar Empty</b>
	<b style={q2}>@KumarEmpty11</b>
	<FlatButton  style={q4} hoverColor="#B2DFDB" ><b>Follow</b></FlatButton>
	<Divider/>
	<Avatar src="https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_400x400.jpg" style={q}></Avatar>
	<b style={q1}>Kumar Empty</b>
	<b style={q2}>@KumarEmpty11</b>
	<FlatButton  style={q4} hoverColor="#B2DFDB" ><b>Follow</b></FlatButton>
	<Divider/>
	<Avatar src="https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_400x400.jpg" style={q}></Avatar>
	<b style={q1}>Kumar Empty</b>
	<b style={q2}>@KumarEmpty11</b>
	<FlatButton  style={q4} hoverColor="#B2DFDB" ><b>Follow</b></FlatButton>
	
	</Paper>
  </div>
);

export default WhoToFollow;
