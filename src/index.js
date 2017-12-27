import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PaperExampleSimple from './PaperExampleSimple';
import PaperExampleSimple1 from './PaperExampleSimple1';
import Papertweet from './Papertweet';
import WhoToFollow from './WhoToFollow';
import  CardExampleWithAvatar from './CardExampleWithAvatar';
const Appt = () => (
  <MuiThemeProvider>
    <PaperExampleSimple />
  </MuiThemeProvider>
);
const Appt1 = () => (
  <MuiThemeProvider>
    <PaperExampleSimple1 name={tweets[0].name} address={tweets[0].address} pimage={tweets[0].pimage}/>
  </MuiThemeProvider>
);


var tweets=[{
	
    pimage:"https://pbs.twimg.com/profile_images/891963500112871424/XZ0or9wU_400x400.jpg",
	name:"Murari Tiwari",
	address:"@muraritiwari7",
	time:"12 DEC",
	tweet:"It’s that time of year again! Relax this Christmas With @IAMLILBUB’s Extraordinarily Magical Yule Log Video → https://goo.gl/QHYFwk ", 
	image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Nativity_tree2011.jpg/1200px-Nativity_tree2011.jpg",
	like:25,
	reply:4,
	retweet:7
},{
	
    pimage:"data:image/png;base64,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",
	name:"Google",
	address:"@google",
	time:"22 DEC",
	tweet:"Start your first VM for free with Google Compute Engine. ", 
	image:"https://pbs.twimg.com/ad_img/928933441600491520/6_YSixeC?format=jpg&name=orig",
	like:250,
	reply:7,
	retweet:2
}
];



const App = () => (
  <MuiThemeProvider>
  < CardExampleWithAvatar data={tweets[0]}/>< CardExampleWithAvatar data={tweets[1]}/></MuiThemeProvider>
);
const Apptweet = () => (
  <MuiThemeProvider>
    < Papertweet />
  </MuiThemeProvider>
);
const AppFollow = () => (
  <MuiThemeProvider>
    < WhoToFollow />
  </MuiThemeProvider>
);
ReactDOM.render(
  <Appt />,
  document.getElementById('title')
);


ReactDOM.render(
  <Apptweet/>,
  document.getElementById('tweet')
);
ReactDOM.render(
  <App/>,
  document.getElementById('root1')
);
ReactDOM.render(
  <Appt1/>,
  document.getElementById('root')
);
ReactDOM.render(
  <AppFollow/>,
  document.getElementById('root2')
);