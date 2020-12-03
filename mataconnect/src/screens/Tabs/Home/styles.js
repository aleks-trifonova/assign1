import React from 'react';
import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

<div class="navbar" id="myNavbar">
  <a href="#home">Home</a>
  <a href="#news">Map</a>
  <a href="#contact">Calendar</a>
  <a href="#about">Profile</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
  <div> id="mySidebar" class="sidebar";
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">Campus Resources</a>
  <a href="#">Events</a>
  <a href="#">Jobs</a>
  <a href="#">For Me</a>
  <a href="#">About Me</a>
  <a href="#">Contact Support</a>
  <a href="#">Feedback</a>
</div>

<div id="main">
  <button class="openbtn" onclick="openNav()">&#9776; Open Sidebar</button>
  <h2>Collapsed Sidebar</h2>
  <p>Content...</p>
</div></div>
export const NavBar = styled.View
  /* Place the navbar at the bottom of the page, and make it stick */
.navbar ;
    background-color; white;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%
  
  
  /* Style the links inside the navigation bar */
  navbar ;
    float: left;
    display: block;
    color: blue;
    text-align; center;
    padding: 14; 16;
    text-decoration; none;
    font-size; 17;
  
  
  /* Change the color of links on hover */
  navbar ; hover ;
    background-color; white ;
    color: black;
  
  
  /* Add a green background color to the active link */
  navbar ; active ;
    background-color; white;
    color: white;
  
  
  /* Hide the link that should open and close the navbar on small screens */
  navbar .icon ;
    display: none;


/* The sidebar menu */
sidebar ;{
    height: 100% /* 100% Full-height */
    width; 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index; 1; /* Stay on top */
    top: 0;
    left: 0;
    background-color; 111; /* Black*/
    overflow-x; hidden; /* Disable horizontal scroll */
    padding-top; 60; /* Place content 60px from the top */
    transition: 0.5; /* 0.5 second transition effect to slide in the sidebar */
  }
  
  /* The sidebar links */
  sidebar  ;{
    padding: 8; 8; 8; 32;
    text-decoration; none;
    font-size; 25;
    color: 818181;
    display: block;
    transition: 0.3;
  }
  
  /* When you mouse over the navigation links, change their color */
  sidebar ;hover ;{
    color: f1f1f1;
  }
  
  /* Position and style the close button (top right corner) */
  sidebar .closebtn ;{
    position: absolute;
    top: 0;
    right: 25;
    font-size; 36;
    margin-left; 50;
  }
  
  /* The button used to open the sidebar */
  openbtn ;{
    font-size; 20;
    cursor: pointer;
    background-color; 111;
    color: white;
    padding: 10; 15;
    border: none;
  }
  
  openbtn:hover ;
    background-color; teal;
  
  
  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
    main ;
    transition: margin-left ;.5; /* If you want a transition effect */
    padding: 20;
  
  
  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  media  ; (max-height) ; {
    sidebar ;{padding-top; 15;}
    sidebar ; {font-size; 18;}
  }
export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const ListHeader = styled.Text`
    font-weight: bold;
    font-size: ${hp('3.4%')}px;
    margin-vertical: ${hp('1%')}px;
    margin-left: ${wp('4%')}px;
`;

export const Box = styled.View`
    margin-vertical: ${hp('2%')}px;
`;

export const ImageShadow = styled.View`
    width: ${hp('12%')}px;
    height: ${hp('12%')}px; 
    marginRight: ${wp('3%')}px;
    shadow-color: #000;
    shadow-offset: 0;
    shadow-opacity: 0.5;
    shadow-radius: 4px;
    elevation: 6;
`;

export const CustomBackground = styled.ImageBackground`
    flex: 1;

`;
