// imports the right statements
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

// signin
const uiConfig = {
    signInOptions: [
      {provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true}
    ],
    credentialHelper: 'none', 
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    }
  };


// creates the header
export function Header() {
    return (<header className="jumbotron jumbotron-fluid bg-secondary text-white">
              <div className="a">
                  <div className="header-row">
                      <div className="header-image">
                          <span className='iTechModules'>ANSWER 1: Hruff Hruff</span>
                          <img className="logo" src="img/icon.png" alt="candy website logo"/>
                      </div>
                      <div className="header-text">
                          <h1>Candy Search</h1>
                          <p>Search for your new favorite candy using the candy filter!</p>
                      </div>
                  </div>
              </div>
            </header>);
  }
 



// creates the signin page
export function SignIn(props) {
  useEffect( () => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        props.setUser(firebaseUser)
        props.setSignedIn(true);
        return <Redirect push to="/"/>
      } else {
        props.setUser(undefined)
        props.setSignedIn(false);
      }
    })
  });
  
  return (
    <div className="container">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
// creates the larger list view/grid view buttons
export function ButtonsLarge(props){
  
    return(
      <div>
        <button id="list-button" className="view" aria-label="List View" onClick={() => {props.handleClick(false)}} alt="list button">
          <i className="fa fa-bars"></i>
          List
        </button>
        <button id="grid-button" className="view" aria-label="Grid View" onClick={() => {props.handleClick(true)}} alt="grid button">
          <i className="fa fa-th-large"></i>
          Grid
        </button>
        <button id="add-button" className="view" aria-label="Add Candy" onClick={() => {props.showAddModal()}} alt="add button">
          <i className="fa fa-edit"></i>
          Add Candy
        </button>
        <br/><br/><br/>
      </div>
    );
  }
  
  
// creates the smaller list view/grid view buttons with the added "Filter" button that shows the modal
export function ButtonsSmall(props) {
  
      return(
      <div>
        <button id="list-button" aria-label="List View" onClick={() => {props.handleClick(false)}} alt="list button">
          <i className="fa fa-bars"></i>
          List
        </button>
        <button id="grid-button" aria-label="Grid View" onClick={() => {props.handleClick(true)}} alt="grid button">
          <i className="fa fa-th-large"></i>
          Grid
        </button>
        <button id="smallfilterbutton" aria-label="Filter"  onClick={() => {props.filterButtonCallBack()}} alt="filter button">
          <i className="fa fa-filter"></i>
          Filter
        </button>
      </div>
    );
  }
  

// creates the footer element
export function Footer() {
    return (
      <div className="footer">
        <p>©2021 The Whippersnappers. All rights reserved.</p>
        <p>Created by Sachi Figliolini, Victoria Nguyen, and Roshni Srikanth</p>
        <p>Images taken from&nbsp;
          <a href="https://www.candywarehouse.com/">Candy Warehouse</a>
          <span className='iTechModules'>ANSWER 4: They always crash</span>
        </p>
      </div>
    );
  }
  