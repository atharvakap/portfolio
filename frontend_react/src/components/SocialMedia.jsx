import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/atharvaKap" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/atharvakap" target="_blank">
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/atharvakap99/" target="_blank">
        <AiFillLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;