
export function Form(props) {
  //should have:
  //  currentData
  //  handleSubmit
  
  return (<RenderForm handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax} handleSubmit={props.handleSubmit}/>);
 
}
export function RenderForm (props) {
  return (
  <form>
    <h2>Filter</h2>
    <span className='iTechModules'>ANSWER 3: "Guten Tag"</span>
    <nobr className="filtertype">Contains:</nobr><br />
    <input type="checkbox" name="contains1" value="chocolate" alt="chocolate button"/>
    <label htmlFor="contains1">
    &ensp;Chocolate</label><br />
    <input type="checkbox" name="contains2" value="caramel"  alt="caramel button"/>
    <label htmlFor="contains2">
    &ensp;Caramel</label><br />
    <input type="checkbox" name="contains3" value="peanutyalmondy" alt="peanuty almondy button"/>
    <label htmlFor="contains3">
    &ensp;Peanuts/Peanut Butter/Almonds</label><br />
    <input type="checkbox" name="contains4" value="nougat" alt="nougat button"/>
    <label htmlFor="contains4">
    &ensp; Nougat</label><br />
    <input type="checkbox" name="contains5" value="crispedricewafer" alt="crisped ricewafer button"/>
    <label htmlFor="contains5">
    &ensp;Crisped Rice/Wafers/Cookie</label><br />
    <input type="checkbox" name="contains6" value="pluribus" alt="pluribus button"/>
    <label htmlFor="contains6">
    &ensp;Multiple Candies in Bag/Box</label><br />
    <input type="checkbox" name="contains7" defaultValue="Egg" alt="Egg button"/>
    <label htmlFor="contains7">
    &ensp;No Egg</label><br />
    <input type="checkbox" name="contains8" defaultValue="Milk" alt="Milk button"/>
    <label htmlFor="contains8">
    &ensp;No Milk</label><br />
    <input type="checkbox" name="contains9" defaultValue="Soy" alt="Soy button"/>
    <label htmlFor="contains9">
    &ensp;No Soy</label><br /><br />
    <nobr className="filtertype">Other Attributes:</nobr><br />
    <input type="checkbox" name="other1" defaultValue="Fruity" alt="Fruity button"/>
    <label htmlFor="other1">
    &ensp;Fruit-Flavored</label><br />
    <input type="checkbox" name="other2" defaultValue="Hard" alt="Hard button"/>
    <label htmlFor="other2">
    &ensp;Hard Candy</label><br />
    <input type="checkbox" name="other3" defaultValue="Bar" alt="Bar button"/>
    <label htmlFor="other3">
    &ensp;Candy Bar</label><br /><br />
    <nobr className="filtertype">Sugar Percentile:</nobr><br />
    <input className="sugarrange" placeholder="Min" aria-label="Minimum Sugar Percentile" type="number" name="sugarmin" min={0} max={100} onChange={(event) => {props.handleSugarMin(event.target.value)}} />
    <nobr>% to
    </nobr>
    <input className="sugarrange" placeholder="Max" aria-label="Maximum Sugar Percentile" type="number" name="sugarmax" min={0} max={100} onChange={(event) => {props.handleSugarMax(event.target.value)}} /><nobr>
      %</nobr><br />
      
    <p  className="invalid-feedback" /><br />
    
    <br /><br />
   
    <button  type="button" defaultValue="Reset" onClick={() => props.handleSubmit() } alt="Reset button">Apply</button>
    <input type="reset" defaultValue="Reset" />
    <div className="error-message">
      <p className="text-danger">Values in sugar percent ranges must be between 0 and 100.</p>
    </div>
  </form>);
}

