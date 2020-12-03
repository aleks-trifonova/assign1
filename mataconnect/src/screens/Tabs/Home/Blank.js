import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Container, ListHeader } from './styles';

export default function Index() {
    /* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

    return (
        <Container>
            <Text>Homepage</Text>

        </Container>
    );
}

