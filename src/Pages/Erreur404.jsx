/* eslint-disable react/no-unescaped-entities */
import React from "react"
import oups from "../img/404.jpg"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  position: relative;
  width: 100%;
  // left: 158px;
  // height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
`
// const StyledLink = styled(Link)`
//   text-decoration: none;
//   font-size: 20px;
//   color: #fff;
//   background-color: #000;
//   padding: 10px;
//   border-radius: 200px;
//   margin: 10px 0;
//   transition: all 0.3s;
//   &:hover {
//     scale: 1.1;
//     box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
//   }
// `
const Oups = styled.h1`
  position: relative;
  top: 50px;
`
/**
 * Page erreur 404
 * @returns Erreur404
 */
function Erreur404() {
  return (
    <Container>
      <>
        <Oups>La page demandée n'existe pas...</Oups>
        <img src={oups} alt="" height="500px"></img>
      </>
      <Link to="/" className="inputButton">
        Retour à l'accueil
      </Link>
    </Container>
  )
}

export default Erreur404
