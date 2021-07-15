import React from "react";
import "./Footer.css"
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <footer>
      <div class="social-media">
      <div className="icon"><FaEnvelope /></div>
      <a href="https://github.com/Bruce-zzhu/MindTask-Planner">
      <div className="icon"><FaGithub /></div>
      </a>
      
      <div className="icon"><FaInstagram /></div>
      
    </div>
      <div class="copyright">Copy Right -- CakeIsALie</div>
      
    </footer>
  );
}
