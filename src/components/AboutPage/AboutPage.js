import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Plants are cool. Edible plants that are not toxic are super cool. Find some cool edible plants!
      </p>

      <p> Taking on a new skill, like learning about wild foods and herbs, can be overwhelming at first.
        So how does someone learn enough? There are many paths, from apprenticeships to degrees
        and certifications.
        Most importantly, integrating these plants and herbs into your daily life is essential.
        
      </p>

      <p> https://www.minnesotawildflowers.info/ </p>
      <p> https://foragerchef.com/ </p>
      <p> https://www.foragersharvest.com/#/ </p>
      <p> https://www.wildfoodadventures.com </p>
      <p> http://www.urbanoutdoorskills.com/ </p>
      <p>
        Here are some links to things that help you out when it comes to cool edible plants:
      </p>
    </div>
  </div>
);

export default AboutPage;
