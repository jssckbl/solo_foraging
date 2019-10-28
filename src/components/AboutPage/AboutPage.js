import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div id="grad">      
    <p>
      Plants are cool. Edible plants that are not toxic are super cool. Find some cool edible plants!
    </p>
    <br></br>
      <p> Taking on a new skill, like learning about wild foods and herbs, can be overwhelming at first.
        So how does someone learn enough? There are many paths, from apprenticeships to degrees
        and certifications.
        Most importantly, integrating these plants and herbs into your daily life is essential.
      </p>
<br></br>
<>
      <a href="https://www.minnesotawildflowers.info/">Minnesota Wildflowers</a> 
      </>
      <br></br>
      <a href="https://foragerchef.com/">Forager Chef</a>
      <br></br>
      <a href="https://www.foragersharvest.com/#/">Forager's Harvest</a>
      <br></br>
      <a href="https://www.wildfoodadventures.com">Wildfood Adventures</a>
      <br></br>
      <a href="http://www.urbanoutdoorskills.com/">Urban Outdoor Skills</a> 
      <br></br>
      <a href="https://www.inaturalist.org/">iNaturalist</a>

    </div>
  </div>
);

export default AboutPage;
