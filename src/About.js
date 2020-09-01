import React from 'react';

export function lightsOn(){
  document.querySelector('body').style.backgroundColor = '#F9E7E7';
  document.querySelector('body').style.color = '#12191C';
}

export function About(props){
  return (
    <div className="about">
      <hr />
      <div className="about-text">
        <h1>Bio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa iure, sed labore odit aliquam ad iste? Dolores officiis explicabo quisquam modi blanditiis, aut, possimus enim debitis temporibus iusto, saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa iure, sed labore odit aliquam ad iste? Dolores officiis explicabo quisquam modi blanditiis, aut, possimus enim debitis temporibus iusto, saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa iure, sed labore odit aliquam ad iste? Dolores officiis explicabo quisquam modi blanditiis, aut, possimus enim debitis temporibus iusto, saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa iure, sed labore odit aliquam ad iste? Dolores officiis explicabo quisquam modi blanditiis, aut, possimus enim debitis temporibus iusto, saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa iure, sed labore odit aliquam ad iste? Dolores officiis explicabo quisquam modi blanditiis, aut, possimus enim debitis temporibus iusto, saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa iure, sed labore odit aliquam ad iste? Dolores officiis explicabo quisquam modi blanditiis, aut, possimus enim debitis temporibus iusto, saepe.</p>
      </div>
      <h4>CV/Resume</h4>
    </div>
    )
}
