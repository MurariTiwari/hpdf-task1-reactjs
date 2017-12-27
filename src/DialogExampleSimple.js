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
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
	reply:0,
	bool:false,
	breply:true
  };

  handleOpen = () => {
    this.setState({open: true,breply:true});
  };

  handleClose1 = () => {
    this.setState({open: false,breply:true});
  };handleClose2 = () => {
    this.setState({open: false,reply:this.state.reply+1,bool:true});
  };
  update(e){
	  if(e.target.value!=null)
		  this.setState({breply:false});
	else    this.setState({breply:true});	  
  }
  render() {
	  let data=this.props.data;
	  if(this.state.reply==0)
	  this.state.reply=data.reply;
    const actions = [
      <FlatButton
        label="Cancel"
		disabled={false}
		backgroundColor="#B2DFDB"
        onClick={this.handleClose1}
		style={{margin:5}}
      />,
      <FlatButton
        label="Reply"
		disabled={this.state.breply}
		backgroundColor="#B2DFDB"
        onClick={this.handleClose2}
      />,
    ];

    return (
      <span>
         <IconButton tooltip="Reply" tooltipPosition="bottom-right" onClick={this.handleOpen}><img src="https://png.icons8.com/ios/24/000000/topic.png"/></IconButton><b style={{color:"#ff0000"}}>{this.state.reply}</b> 
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        ><h5 style={{align:"center",color:"#000"}}><b>Reply to {data.name}</b></h5>
		<Divider/>
         <Avatar src={data.pimage} style={s}/>
         <span><a href="#" style={s}><b>{data.name}</b></a></span>
         <span style={s1}> {data.address}.</span> 
         <span><a href="#" style={s1}>{data.time}</a></span>
         <Paper style={s3} zDepth={0}>{data.tweet}</Paper> 
         <div style={{backgroundColor:"B2DFDB"}} >
		 <TextField
      hintText="your Reply"
      floatingLabelText="Reply Here"
	  fullWidth="false"
	  multiLine="true"
	  rows="1"
	  rowsMax="10"
	  onKeyPress={this.update.bind(this)}
	  underlineShow="false"
	  style={s2}
    />
	     <FlatButton style={kl} hoverColor="#B2DFDB"><img src="https://png.icons8.com/android/24/000000/picture.png" /></FlatButton>
	     <FlatButton style={kl} hoverColor="#B2DFDB"><img src="https://png.icons8.com/material/24/000000/gif.png" /></FlatButton>
	     <FlatButton style={kl} hoverColor="#B2DFDB"><img src="https://png.icons8.com/windows/30/000000/poll-topic.png"/></FlatButton>
     	<FlatButton style={kl} hoverColor="#B2DFDB"><img src="https://png.icons8.com/metro/24/000000/marker.png" /></FlatButton>
    </div>
        </Dialog>
      </span>
    );
  }
}

