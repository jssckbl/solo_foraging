import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>Morel Of The Story</p>
      <p>List of Links</p>
      <p>
        Plants are cool. Edible plants that are not toxic are super cool. Find some cool edible plants!
      </p>
      <p>
        Here are some links to things that help you out when it comes to cool edible plants:
      </p>
    </div>
  </div>
);

export default AboutPage;
