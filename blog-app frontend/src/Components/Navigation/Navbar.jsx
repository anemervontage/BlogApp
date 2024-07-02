import { Link } from "react-router-dom"; 
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="top">
      <div className="topCenter">
         <h2 className="toptitle">Fofang's Blog</h2>
      </div>
      <div className="topRight">

          <ul className="topList">
            <Link style={{ textDecoration: 'none', color: 'inherit'}}  to={`/`}> 
              <li className="topListItem" >
              ALL BLOGS
              </li>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/blog`}> 
              <li className="topListItem">
              ADD BLOGS
              </li>
            </Link>
          </ul>
      </div>
    </div>
  );
}
