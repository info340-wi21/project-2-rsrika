// imports the right components
import Heart from "react-heart";
import React, {useState} from 'react';
import { Redirect, Link} from 'react-router-dom';
import firebase from 'firebase';

export function Cards(props) {
  
  if(props.currentData.length < 1) {
    return <h1 className="no-favs">You don't have any favorited candies yet! Press a heart button on the home page, and you'll see your favorites here.</h1>
  }
  else {
    // the props for this should be the state values, specifically the card object array, and the gridView
    // based on the listView/GridView thing, rerender the cards accordingly
    if(props.gridView) {
      return props.currentData.map((currentCard) => {
        
        return(
        <div className="cardpoolGrid" key={currentCard.competitorname}>
          <CardGridView key={currentCard.competitorname} card={currentCard} likeCallback={props.likeCallBack} signedIn={props.signedIn} currentUser={props.currentUser} favCandyNums={props.favCandyNums}/>
        </div>);
      });
    }
    else {
      return props.currentData.map((currentCard) => {
        
        return(
          <div className="cardpoolList" key={currentCard.competitorname}>
            <CardListView key={currentCard.competitorname} card={currentCard} likeCallback={props.likeCallBack} signedIn={props.signedIn} currentUser={props.currentUser} favCandyNums={props.favCandyNums}/>
          </div>);
      });
    }
  }
}

// make the cards formatted like in gridView
function CardGridView(props) {
    
    const [active, setActive] = useState(false);
    const[redirectTo, setRedirect] = useState(undefined);
    
    // set path for each more info button on each card
    const handleClickIndv = () => {
      setRedirect("/indv/" + props.card.competitorname);
    }
    
    // figure out the correct display mode of the heart -
    // if logged out, off. if in favs in firebase, on. if not in favs, off.
    const heartStatus = (e) => {
      if(!props.currentUser) return false;
      else {
        let favCandyStrings = props.favCandyNums;
        let favCandyNums = favCandyStrings.map(Number)
        if (favCandyNums.includes(e) === true) {
          return true;
        }
        return false
      }
    }

    // if not logged in when heart is clicked, show prompt to sign up/log in
    // when heart is clickedand user is signed in, add candy num to firebase, specific to user
    const handleClickHeart = () => {
      
      if(!props.signedIn || props.currentUser === undefined) {
        let modal = document.querySelector("#signin-modal");
        modal.style.display="block";
      }
      else {
        let state = !active
        setActive(state);
        let newCandy = props.card.candynum
        let tempRef = firebase.database().ref('users/'+ props.currentUser.uid + '/favorites')
        tempRef.update({[newCandy]: newCandy})
      }
    };
  
    // the props for this should be the list of current candies to show
    // this is where the cards code goes
    
    if(redirectTo !== undefined && redirectTo.indexOf("/indv/") >= 0) {
      
      return (<Redirect push to={redirectTo}/>);
    }
    return(
      <div  key={props.card.competitorname} className="card">
        <img className="card-img-top" src={props.card.imglink} alt={props.card.competitorname}/>
        <div className="card-body">
            <p className="card-title h5">{props.card.competitorname}</p>
            <span className='iTechModules'>ANSWER 2: Spiderman</span>
            {props.card.userAdded ? <span></span>: <Heart className="heart nobreak" isActive={heartStatus(props.card.candynum)} onClick={() => {setActive(!active); handleClickHeart()}}/>}
            <Link to="/indv" className="btn btn-primary" onClick={handleClickIndv}>More Info</Link>
        </div>
      </div>
    );
  }



// make the cards formatted like in listView 
function CardListView(props) {
    const [active, setActive] = useState(false);
    const[redirectTo, setRedirect] = useState(undefined);

    // same three functions as grid view
    // set path for each more info button on each card
    const handleClickIndv = () => {
      setRedirect("/indv/" + props.card.competitorname);
    }

    const heartStatus = (e) => {
      if(!props.currentUser) return false;
      else {
        let favCandyStrings = props.favCandyNums;
        let favCandyNums = favCandyStrings.map(Number)
        if (favCandyNums.includes(e) === true) {
          return true;
        }
        return false
      }
    }
    const handleClickHeart = () => {
      
      if(!props.signedIn || props.currentUser === undefined) {
        let modal = document.querySelector("#signin-modal");
        modal.style.display="block";
      }
      else {
        let state = !active
        setActive(state);
        let newCandy = props.card.candynum
        if (active === false) {
          let tempRef = firebase.database().ref('users/'+ props.currentUser.uid + '/favorites')
          tempRef.update({[newCandy]: newCandy})
        }
        else {
          let tempRef = firebase.database().ref('users/'+ props.currentUser.uid + '/favorites/' + newCandy)
          tempRef.remove();
        }
      }
    };
    
    // the props for this should be the list of current candies to show
    // this is where the cards code goes
    
    if(redirectTo !== undefined && redirectTo.indexOf("/indv/") >= 0) {
      return (<Redirect push to={redirectTo}/>);
    }
    return(
      <div  key={props.card.competitorname} className="card">
        <img className="card-img-top" src={props.card.imglink} alt={props.card.competitorname}/>
        <div className="card-body">
            
            <p className="card-title h5">{props.competitorname}</p>
            <p className="card-title h5">{props.card.competitorname}</p>
            <p className="card-text">{"Has Egg: " + convertToWords(props.card.hasegg)}</p>
            <p className="card-text">{"Has Milk: " + convertToWords(props.card.hasmilk)}</p>
            <p className="card-text">{"Has Soy: " + convertToWords(props.card.hassoy)}</p>
            {props.card.userAdded ? <span></span>: <Heart className="heart nobreak" key={"candy"+props.card.candynum} isActive={heartStatus(props.card.candynum)} onClick={() => {handleClickHeart()}} currentUser={props.currentUser} value={props.card.candynum}/>}
            <Link to="/indv" className="btn btn-primary" onClick={handleClickIndv}>More Info</Link>
        </div>
      </div>
    );
  }

  
// given a binary value from the object, this returns a string of yes or no
export function convertToWords(num) {
    if(num === 0) {
      return "No";
    }
    else if(num === -1) {
      return "Not Specified";
    }
    else {
      return "Yes";
    }
  }