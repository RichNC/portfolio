import React from 'react';
import { Thumbnail } from './Thumbnail';
import './Projects.css';


export function Projects(props){
  return (
    <div>
      <h2>Projects</h2>
      <p>(Add horizontal scrolling effect)</p>
      <div className="thumbnail-container">
        <Thumbnail
          link=""
          image=""
          title=""
          category=""
        />
        <Thumbnail
          link=""
          image=""
          title=""
          category=""
        />
        <Thumbnail
          link=""
          image=""
          title=""
          category=""
        />
        <Thumbnail
          link=""
          image=""
          title=""
          category=""
        />
      </div>
    </div>
    )
}
