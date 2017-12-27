import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';

const s={
	color:"#000000",
	marginLeft:"5px",
	fontSize:"14px",
	paddingBottom:"0px",
	marginTop:"5px"
	
}
const s1={
	color:'#999999',
	marginLeft:"2px",
	fontSize:"14px"
	
}
const s3={
	color:"#000000",
	marginLeft:"50px",
	textAlign:"justify",
	fontSize:"13px",
	marginTop:"3px",
	marginRight:"5px"
}
const s2={
	backgroundColor:"#fff",
	marginTop:2
}
const kl={
	margin:2,
	
	
}
const TextFieldExampleSimple = () => (
<TextField
      hintText="Your Comment"
      floatingLabelText="Add Your Comment"
	  fullWidth="false"
	  multiLine="true"
	  rows="1"
	  rowsMax="10"
	  underlineShow="false"
	  style={s2}
    />
);


const po={
	marginLeft:25,
	borderRadius:"10px"
}

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple1 extends React.Component {
  state = {
    open: false,retweet:0,bool:false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };handleClose1 = () => {
    this.setState({open: false,retweet:this.state.retweet+1,bool:true});
  };

  render() {
	  let data=this.props.data;
	  if(this.state.retweet==0)
	  this.state.retweet=data.retweet;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Retweet"
        primary={true}
        onClick={this.handleClose1}
      />,
    ];

    return (
      <span>
         <IconButton tooltip="Retweet" tooltipPosition="bottom-right"  style={s3} onClick={this.handleOpen} ><img src="https://png.icons8.com/material/24/000000/retweet.png" /></IconButton><b style={{color:"#ff0000"}}>{this.state.retweet}</b> 
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        ><h5 style={{align:"center",color:"#000"}}><b>Retweet this to your Followers?</b></h5>
		<Divider/>
		<TextFieldExampleSimple/><Divider/>
         <Avatar src={data.pimage} style={s}/>
         <span><a href="#" style={s}><b>{data.name}</b></a></span>
         <span style={s1}> {data.address}.</span> 
         <span><a href="#" style={s1}>{data.time}</a></span>
         <Paper style={s3} zDepth={0}>{data.tweet}</Paper> 
        
        </Dialog>
      </span>
    );
  }
}

