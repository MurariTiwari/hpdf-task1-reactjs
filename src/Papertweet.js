import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CardExampleWithAvatar from './CardExampleWithAvatar';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const p={
	marginLeft:"10px",
	marginTop:"15px"
}
const FloatingActionButtonExampleSimple = () => (
    <FloatingActionButton mini={true} zDepth={0} style={p}>
      <ContentAdd />
    </FloatingActionButton>
 
);

const style = {
  
  width: "100%",
  backgroundColor:"#B2DFDB",
  borderColor:"#009688",
  borderRadius:"10px"
};
const s1={
	marginLeft:25,
	marginTop:10
}
const s2={
	backgroundColor:"#fff",
	marginTop:2
}
const kl={
	margin:2,
	
	
}


const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const po={
	marginLeft:25,
	borderRadius:"10px"
}

class Papertweet extends React.Component{
	
	constructor(){
		super();
		this.state={
			disable:true,
			value:"",
			disp:false
		}
	} update(e){
	  if(e.target.value!=null)
		  this.setState({disable:false,value:e.target.value});
	else    this.setState({disable:true});	  
  }  Tweet(e){
     const t={
	 pimage:"https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_400x400.jpg",
	name:"Murari Tiwari",
	address:"@muraritiwari7",
	time:"1 sec",
	tweet:this.state.value, 
	image:null,
	like:0,
	reply:0,
	retweet:0
}	  
	 this.setState({disp:true});
 
     ReactDOM.render(<MuiThemeProvider><CardExampleWithAvatar data={t}/> </MuiThemeProvider>,document.getElementById("r"));	 
  }
	render(){
		return(<div>
  <div >
    <Paper style={style} zDepth={1} >
	<Avatar style={s1} src="https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_400x400.jpg" />
	 <TextField
      hintText="your Tweet"
      floatingLabelText="Tweet Here"
	  fullWidth="false"
	  multiLine="true"
	  rows="1"
	  rowsMax="10"
	  onKeyPress={this.update.bind(this)}
	  underlineShow="false"
	  style={s2}
    />
	<FlatButton style={kl}  style={styles.uploadButton} hoverColor="#B2DFDB"><img src="https://png.icons8.com/android/24/000000/picture.png" /><input type="file" style={styles.uploadInput} />
</FlatButton>
	<FlatButton style={kl}  style={styles.uploadButton} hoverColor="#B2DFDB"><img src="https://png.icons8.com/material/24/000000/gif.png" /><input type="file" style={styles.uploadInput} />
</FlatButton>
	<FlatButton style={kl} hoverColor="#B2DFDB"><img src="https://png.icons8.com/windows/30/000000/poll-topic.png"/></FlatButton>
	<FlatButton style={kl} hoverColor="#B2DFDB"><img src="https://png.icons8.com/metro/24/000000/marker.png" /></FlatButton>
	<RaisedButton label="Tweet" primary={true} disabled={this.state.disable}style={po} onClick={this.Tweet.bind(this)} />
		
	</Paper>
  </div><div id="r"/></div>
);
}}
export default Papertweet;