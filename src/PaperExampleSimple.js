import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import  CardExampleWithAvatar from './CardExampleWithAvatar';
import  WhoToFollow from './WhoToFollow';


const style = {
  margin:"3px",
  width: "100%",
  textAlign: 'center',
  display: 'inline-block',
};
const s={
	marginLeft:"5px"
}
const s1={
	marginLeft:"130px",
	marginRight:"180px",
};
const sd={
	marginLeft:"25px",
	marginRight:"25px"
}
var tweets=[{
	
    pimage:"https://pbs.twimg.com/profile_images/595083746216259584/FfOYxJfr_bigger.png",
	name:"Express Technology",
	address:"@expresstechi",
	time:"1 h",
	tweet:"More      #Facebook prompts option for new users: Sign-up with name as per #Aadhaar ", 
	image:"https://pbs.twimg.com/card_img/945995341798637568/0d5GAv5I?format=jpg&name=600x314",
	like:255,
	reply:4,
	retweet:3
},{
	
    pimage:"https://pbs.twimg.com/profile_images/862884513428283392/3rnXwj4C_bigger.jpg",
	name:"Ivan Mehta",
	address:"@IndianIdel",
	time:"4 h",
	tweet:"Facebook is asking users to sign up with the name mentioned on their Aadhaar. Even if that is not mandatory this is the first time the social network is asking for a specific ID", 
	image:"https://pbs.twimg.com/card_img/945948621748322304/67qSlFon?format=jpg&name=800x419",
	like:250,
	reply:7,
	retweet:2
}
];

class PaperExampleSimple extends React.Component{

search(){
	
	ReactDOM.render(
    <MuiThemeProvider>
    <PaperExampleSimple />
	<Paper style={style} zDepth={0} style={{backgroundColor:"#00BCD4",width:"100%"}}><h3 style={{marginLeft:30,padding:10,color:"#ffffff"}}><b>Aadhaar</b></h3>
	<div style={{backgroundColor:"#ffffff",width:"100%"}}>
	<FlatButton style={s}
      href="#"
      label="Top"
	  hoverColor="#00BCD4"
	  backgroundColor="#00BCD4"
      secondary={false}
       ></FlatButton>
   <FlatButton  style={s}
      href="#"
      label="Latest"
	  hoverColor="#00BCD4"
      secondary={false}
       ></FlatButton>
	   <FlatButton  style={s}
      href="#"
      label="People"
	  hoverColor="#00BCD4"
      secondary={false}
       ></FlatButton>
	   <FlatButton  style={s}
      href="#"
      label="Photos"
	  hoverColor="#00BCD4"
      secondary={false}
       ></FlatButton>
	   <FlatButton  style={s}
      href="#"
      label="Videos"
	  hoverColor="#00BCD4"
      secondary={false}
       ></FlatButton>
	   <FlatButton  style={s}
      href="#"
      label="News"
	  hoverColor="#00BCD4"
      secondary={false}
       ></FlatButton><FlatButton  style={s}
      href="#"
      label="Broadcast"
	  hoverColor="#00BCD4"
      secondary={false}
       ></FlatButton>
	   </div></Paper>
  </MuiThemeProvider>,
  document.getElementById('title')
);


ReactDOM.render(
  <p></p>,
  document.getElementById('tweet')
);
ReactDOM.render(
  <MuiThemeProvider>
  < CardExampleWithAvatar data={tweets[0]}/>< CardExampleWithAvatar data={tweets[1]}/>
  </MuiThemeProvider>,
  document.getElementById('root1')
);
ReactDOM.render(<MuiThemeProvider>
<br/>
<Paper style={{padding:15}}>
<h5>Search Filters  <a href="#">show</a> </h5>
</Paper><br/>< WhoToFollow />
</MuiThemeProvider>,
  document.getElementById('root')
);
ReactDOM.render(
  <p></p>,
  document.getElementById('root2')
);
	
	

	}

render(){
return	(
  <div>
    <Paper style={style} zDepth={1} >
	
	<FlatButton style={s}
      href="#"
      label="Home"
	  hoverColor="#00BCD4"
      secondary={false}
       ><img src="https://png.icons8.com/material/24/000000/home.png"/></FlatButton>
   <FlatButton  style={s}
      href="#"
      label="Moments"
	  hoverColor="#00BCD4"
      secondary={false}
       ><img src="https://png.icons8.com/ios-glyphs/24/000000/lightning-bolt.png"/></FlatButton>
   <FlatButton  style={s}
      href="#"
      label="Notifications"
	  hoverColor="#00BCD4"
      secondary={false}
       ><img src="https://png.icons8.com/material/24/000000/bell.png"/></FlatButton>
   <FlatButton  style={s}
      href="#"
      label="Messages"
	  hoverColor="#00BCD4"
      secondary={false}
       ><img src="https://png.icons8.com/material/24/000000/filled-message.png"/></FlatButton>
	   <img src="https://png.icons8.com/color/48/000000/twitter.png" style={s1}/>
	 <input type="text" className="search-query" placeholder="aadhaar"/>
	  <IconButton tooltip="Search" touch={true} tooltipPosition="bottom-right" onClick={this.search.bind(this)}>
  <img src="https://png.icons8.com/material/20/000000/search.png"/></IconButton>
     <Avatar src="https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_bigger.jpg" style={sd}/> 
	 <RaisedButton primary={true} label="Tweet"/>
   
    </Paper>
  </div>
);
}}
export default PaperExampleSimple;
