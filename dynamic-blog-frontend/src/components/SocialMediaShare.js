import React from 'react';

const SocialMediaShare = ({ url }) => {
  return (
    <div>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">
        Share on Facebook
      </a>
      <br />
      <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer">
        Share on Twitter
      </a>
      <br />
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank" rel="noopener noreferrer">
        Share on LinkedIn
      </a>
    </div>
  );
};

export default SocialMediaShare;
