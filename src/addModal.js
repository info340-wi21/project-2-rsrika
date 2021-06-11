import firebase from 'firebase';
import React, {useState} from 'react';
let addedID = 0;

// modal that adds a candy to the file
export function AddModal(props) { 
    const [active, setActive] = useState(false);


    const handleApply = (candyObj) => {
        console.log("inside handleApply")
        if(!props.signedIn || props.currentUser === undefined) {
          let modal = document.querySelector("#signin-modal");
          modal.style.display="block";
        }
        else {
          let state = !active
          setActive(state);

          console.log("candyObj", candyObj);
          let tempRef = firebase.database().ref('users/'+ props.currentUser.uid + '/added')
          console.log("tempRef", tempRef)
          tempRef.push(candyObj);
          addedID++;
        }
        props.handleModalClose();
      };

    let candy = {
        "candynum": props.candyNum,
        "competitorname": "",
        "chocolate": 0,
        "fruity": 0,
        "caramel": 0,
        "peanutyalmondy": 0,
        "nougat": 0,
        "crispedricewafer": 0,
        "hard": 0,
        "bar": 0,
        "pluribus": 0,
        "sugarpercent": -1,
        "pricepercent": -1,
        "winpercent": -1,
        "imglink": "",
        "hasegg": 0,
        "hasmilk": 0,
        "hassoy": 0,
        "userAdded": 1
      }; 
    return (
        <div className="modal add-modal card">
            <div className="modal-content card-body">
                <span className="add-modal-close close" onClick={() => props.handleModalClose()} alt="close button">×</span>
                <span className="add-modal-txt">Add Your New Candy Information</span>
                <label>Name of your Candy: </label>
                <input type="text" name="name" onChange={(event) => {candy.competitorname = event.target.value}}></input>
                <br/>
                <label >Image Url of a Picture of your Candy: </label>
                <input type="text" name="image" onChange={(event) => {candy.imglink = event.target.value}}></input>
                <br/>
                <input type="checkbox" name="containsEgg" onClick={() => {candy.hasegg = 1}} alt="egg checkbox"></input>
                <label >Your Candy contains Egg</label>
                <br/>
                <input type="checkbox" name="containsMilk" onClick={() => {candy.hasmilk = 1}} alt="milk checkbox"></input>
                <label >Your Candy contains Milk</label>
                <br/>
                <input type="checkbox" name="containsSoy" onClick={() => {candy.hassoy = 1}} alt="soy checkbox"></input>
                <label >Your Candy contains Soy</label>
                <br/>
                
                <input type="checkbox" name="chocolate" onClick={() => {candy.chocolate = 1}} alt="chocolate checkbox"></input>
                <label >Your Candy contains Chocolate</label>
                <br/>
                <input type="checkbox" name="fruity" onClick={() => {candy.fruity = 1}} alt="fruity checkbox"></input>
                <label >Your Candy is Fruity</label>
                <br/>
                <input type="checkbox" name="caramel" onClick={() => {candy.caramel = 1}} alt="caramel checkbox"></input>
                <label >Your Candy contains caramel</label>
                <br/>
                <input type="checkbox" name="peanutyalmondy" onClick={() => {candy.peanutyalmondy = 1}} alt="peanuty almondy checkbox"></input>
                <label >Your Candy contains peanuts, almonds, or peanut butter</label>
                <br/>
                <input type="checkbox" name="nougat" onClick={() => {candy.nougat = 1}} alt="nougat checkbox"></input>
                <label >Your Candy has nougat</label>
                <br/>
                <input type="checkbox" name="crispedricewafer" onClick={() => {candy.crispedricewafer = 1}} alt="crisped ricewafer checkbox"></input>
                <label >Your Candy contains crisped rice wafers</label>
                <br/>
                <input type="checkbox" name="hard" onClick={() => {candy.hard = 1}} alt="hard checkbox"></input>
                <label >Your Candy contains is hard</label>
                <br/>
                <input type="checkbox" name="bar" onClick={() => {candy.bar = 1}} alt="bar checkbox"></input>
                <label >Your Candy is a bar</label>
                <br/>
                <input type="checkbox" name="pluribus" onClick={() => {candy.pluribus = 1}} alt="multiple candies in a box checkbox"></input>
                <label >Your Candy has many pieces inside 1 box</label>
                <br/>

                <label >Sugar percentage of your Candy __% (if known): </label>
                <input type="number" name="sugarpercent" onChange={(event) => {candy.sugarpercent = event.target.value/100}}></input>
                <br/>
                <br/>
                <button className="btn btn-primary" defaultValue="Reset" onClick={() => handleApply(candy)} alt="Reset Button">Add</button>
            </div>
        </div>
        
    );
}