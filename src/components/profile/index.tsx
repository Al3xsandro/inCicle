import { Nav } from './style';

import { IoLocationSharp } from 'react-icons/io5';
import { MdLocationCity } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';

export function Profile() {
    return (
        <>
            <Nav>
                  <div className="nav_profile">
                      <div className="nav_banner">
                          <img className="nav_logo" src="/img/kenedy.jpg" alt="profile"/>
                      </div>
                      <br/>
                      <div className="nav_profile_info">
                        <h2 className="nav_title">Kenedy Morais</h2>
                        <span className="nav_social">@Kenedymorais</span>
                        <p className="nav_job">Front-end Developer</p>
                      </div>
                      <div className="nav_profile_description">
                          <span className="nav_city"><IoLocationSharp /> Rio Branco/Acre - Brasil</span>
                          <span className="nav_company"><MdLocationCity /> InCicle</span>
                          <span className="nav_graduation"><FaUniversity/> UniNorte</span>
                      </div>
                  </div>
              </Nav>
        </>
    )
};