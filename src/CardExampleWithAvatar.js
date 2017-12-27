import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DialogExampleSimple from './DialogExampleSimple';
import DialogExampleSimple1 from './DialogExampleSimple1';
import  CheckboxExampleSimple from './CheckboxExampleSimple';
import PopoverExampleAnimation from './PopoverExampleAnimation';
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
const s4={
	borderStyle:"solid",
	borderWidth:"1px",
	borderColor:'#bbbbbb',
	borderRadius:"10px",
	backgroundColor:"#ffffff"
}
class CardExampleWithAvatar extends React.Component{
	constructor(){
		super();
		this.state={bool:false,
		            like:0,value:"like"}
	}
	
	update(){
		if(this.state.bool)
		{
			this.setState({bool:false,like:this.state.like-1,value:"like"})
			
		}
		else
		{
			this.setState({bool:true,like:this.state.like+1,value:"dislike"})
		}
	}
	render(){
		let  data=this.props.data;
		if(this.state.like==0)
		this.state.like=data.like;
		return(
 <div style={s4}>
 <Avatar src={data.pimage} style={s}/>
 <span><PopoverExampleAnimation name={data.name} address={data.address} pimage={data.pimage}/></span>
 <span style={s1}> {data.address}.</span> 
 <span><a href="#" style={s1}>{data.time}</a></span>
 
 <Paper style={s3} zDepth={0}>{data.tweet}</Paper> 
 
  <Card style={s3} zDepth={0}>
    <CardMedia>
      <img src={data.image} alt="" />
    </CardMedia>
      </Card>
	  
	<span style={s3}> <DialogExampleSimple data={data}/> <DialogExampleSimple1 data={data}/>
  <IconButton tooltip={this.state.value} tooltipPosition="bottom-right"  style={s3} onClick={this.update.bind(this)}><img src="https://png.icons8.com/ios-glyphs/24/000000/hearts.png" /></IconButton><b style={{color:"#ff0000"}}>{this.state.like}</b>
   <IconButton tooltip="Direct Message" tooltipPosition="bottom-right"  style={s3}><img src="https://png.icons8.com/ios/24/000000/secured-letter.png" /></IconButton>
</span>

   </div>
	);}
}
export default CardExampleWithAvatar;
