import React from "react"
import { Link } from "gatsby"
import Loadable from "@loadable/component"
import links from "../constants/links"
import { FooterWrapper } from "../css"

const Footer = () => {
  const linkProfilo =
    process.env.LINK_URL || "https://tecinovaservicos.com.br/"
  return (
    <FooterWrapper>
      <div className="links">
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className="copyright">
        copyright &copy; TECiNOVA {new Date().getFullYear()} All rights
        reserved
      </div>
      <div className="copyright"></div>
      <div className="created">
        By <a href={linkProfilo}>TECiNOVA</a>
      </div>
      <div id="wcb" class="wcb carbonbadge wcb-d"></div>
    </FooterWrapper>
  )
}

export default Footer
