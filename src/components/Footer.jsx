import React from "react"

const Footer = () => {
    return (
        <div id="footerContainer">
        <div id ="footer">
            {/* <hr class="footer-hr"/> */}
            <div class="linkContainer">
            {/* <h2 class="resourcesTitle">RESOURCES</h2> */}
            <div class="links">
                <h2 class="resourcesTitle">LINKS</h2>
                <a class="siteLinks" href="https://www.nps.gov/subjects/developer/index.htm"  target="_blank">DEVELOPER RESOURCES</a>
            </div>
            <h2 class="resourcesTitle">CONTACT US</h2>
           
            </div>

        <img id="footerImage" src="https://res.cloudinary.com/fsa2/image/upload/v1690999680/portfolio%20site%20images/Project%20Images/fire_ba5i35.png" alt="icon"/>

        </div>
        </div>
    )

    
}

export default Footer;