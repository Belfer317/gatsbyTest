import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  width: 65%;
  margin: auto;
  height: 20vh;
  border: 1px solid #f00;
  border-radius: 1em;
  /* background-color: #0f0; */
  transition: 0.4s;

  &:hover {
    background-color: #ff0;
    box-shadow: 3px 3px 5px #aaa;
    width: 100%;
    letter-spacing: 0.2em;
  }
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <H1>Hi from the second page</H1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
