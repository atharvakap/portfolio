import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

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
        <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;