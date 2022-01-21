import React from 'react';
// renders the component for the "about" page.
export function About() {
  return (<div>
            <div className="problem">
              <MakeStatement/>
            </div>
            <div className="problem description">
              <MakeDescription/>
            </div>
            <div className="authors">
                <h1>The Authors</h1>
                <div className="row">
                    <MakeAuthors/>
                </div>
            </div>
</div>);
}

// these are the individual about page components. They are only called internally and are not exported
function MakeStatement() {
    return(
        <div>
            <h1>The Problem</h1>
            <p>
                There are millions of types of candy bars around the world, but how do you choose which one to eat? Each person has different preferences, allergies, and dietary needs, so there is no 'one size fits all' candy bar. The various different types of candies out there often have different types of packaging, and it can be difficult for people to read nutrition labels correctly when they are choosing which candy bar to buy. The current problem with candy choices is that people only often know about the larger brands of candy, like Kit-Kat, Snickers, etc. so they are not exposed to other types of candy that might suit their preferences better. Furthermore, many people do not know how to correctly read a nutrition label, so finding the sugar content, or finding out if a type of candy violates dietary restrictions can be difficult. As of now, there are no web app solutions to helping people choose a type of candy to eat, and instead, people rely on the advertising, packaging, and labeling of the candy bar itself to find out what it contains and whether or not they can eat it. According to
                <a href="https://www.healthline.com/health/sugar/defenseless-addicted-sugar-marketing#2">this</a>
                article, false advertisement can cause many negative affects such as an addiction to sugar. Our web app is focused on helping people make informed decisions about their candy bars. Using our web app will help them choose a few that match their taste preferences and dietary needs through different categories of classification, like sugar content, chocolatey, fruity, and many more.
            </p>
        </div>
    );
}
function MakeDescription() {
    return(
        <div>
            <h2>Website Description</h2>
            <p>
                The users of the application will be anyone who wants to learn about the different types of candy, or who is trying to decide what kind of candy to get. Users will be able to view different attributes of many kinds of candies. Whether that’s deciding which candy fits their preferences, learning about the existence of certain candies, or seeing which candies to have less frequently due to high sugar percentage, they’ll be able to make informed decisions about their candy choice due to the information presented on this page. We will be utilizing
                <a href="https://www.kaggle.com/alexisbcook/data-for-datavis?select=candy.csv">a dataset from Kaggle</a>
                for the pre-existing that will be displayed.
            </p>
            <p>
                With our web app, users will be able to search for and discover candy bars. Users can search for a candy bar that matches their taste preferences or dietary needs by sorting thorugh different catergories such as name, sugar content, if it contains chocolate, if it is fruity, and many more. If the user does not have specific preferences they are looking for in a candy bar, they can simply browse through and discover a new candy bar to try. Through our web app, users will be able to make informed decisions about their candy bars and choose a candy perfectly geared towards what they want to eat without relying on commercial advertisement.
            </p>
        </div>
    );
}
function MakeAuthors() {
    return(
        <div className="authors-about">
            <div className="author-col">
                <img src="./img/sachi.JPG" alt="Sachi Figliolini"></img>
                <h3>Sachi Figliolini</h3>
                <p>Sachi is a freshman studying Informatics at the Univeristy of Washington. In the Information school she particaptes in the Informatics Undergraduate Association (IUGA) as a first year representative and the Director of Finance. She is passionate about using information and computing to lead efforts to solve issues in the greater community. During her free time she likes playing video games, rewatching shows, and painting.</p>
                <a href="https://www.linkedin.com/in/sachi-figliolini" target="_blank" rel="noreferrer">
                    <img className="linkedin" src="./img/linkedin.png" alt="linkedin logo"></img>
                </a>
            </div>
            <div className="author-col">
                <img src="./img/victoria.jpg" alt="Victoria Nguyen"></img>
                <h3>Victoria Nguyen</h3>
                <p>Victoria is a freshman studying informatics and psychology. By combining the two fields, she is pursuing a path in user experience research. Her involvements at UW include serving as a junior officer of Women in User Experience as well as contributing to research in the Human Centered Design and Engineering department. Outside of school, she enjoys cooking, trying new restaurants, and having self-care nights with herself. Topics that she’s always excited to have a conversation about are mental health and cartoons.</p>
                <a href="https://www.linkedin.com/in/victoriabnguyen/" target="_blank" rel="noreferrer">
                    <img className="linkedin" src="./img/linkedin.png" alt="linkedin logo"></img>
                </a>
            </div>
            <div className="author-col">
                <img src="./img/roshni.JPG" alt="Roshni Srikanth"></img>
                <h3>Roshni Srikanth</h3>
                <span className='iTechModules'>ANSWER 5: A Dell</span>
                <p>Roshni Srikanth is a freshman studying Informatics at the University of Washington. She is a student in the Interdisciplinary Honors Program and is the Director of Diversity Efforts for WINFO (Women in Informatics). She is interested in studying technology, its interaction with culture, and sustainability. Outside of school, she loves to read, eat, cook, and play with her dog Mango.</p>
                <a href="https://www.linkedin.com/in/roshni-srikanth/" target="_blank" rel="noreferrer">
                    <img className="linkedin" src="./img/linkedin.png" alt="linkedin logo"></img>
                </a>
            </div>
        </div>
    );
}
