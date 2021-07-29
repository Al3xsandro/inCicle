import { useState } from "react";

import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa';
import { RiShareForwardBoxLine } from 'react-icons/ri';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { GiPadlock } from 'react-icons/gi';

import { Main } from './style';

export function MainSection() {
    const [like, setLike] = useState(false);

    function handleClick() {
        return !like ? setLike(true) : setLike(false);
    };

    return (
        <>
            <Main>
                  <div className="section_post">
                      <div className="section_social_profile">
                        <img className="social_logo" src="/img/kenedy.jpg" alt="profile"/>
                        <span className="social_name">Kenedy</span>

                        <div className="social_post_details">
                            <span className="social_date"><AiOutlineClockCircle /> há cerca de 8 horas</span>
                            <span className="social_privacy"><GiPadlock /> Somente eu</span>
                        </div>
                      </div>

                      <div className="social_post_content">
                          <p>Está publicação está configurada no modo privado "somente eu".</p>
                      </div>

                      <div className="section_actions_details">
                            {
                                !like ? <span className="action_first_like"><AiOutlineLike /> Seja o primeiro a curtir</span> :
                                <span className="action_first_like"><AiOutlineLike /> 1 pessoa curtiu isso</span>
                            }
                            <span className="action_commits">0 comentários</span>

                            <span className="action_shared">0 compartilhamentos</span>
                      </div>

                      <div className="feed_social_action">
                            {
                                !like ? <button className="button" onClick={handleClick}><AiOutlineLike /> Curtir</button> :
                                <button className="button" onClick={handleClick}><AiOutlineLike /> Curtido</button>
                            }

                            <button className="button"><FaRegCommentDots /> Comentários</button>

                            <button className="button"><RiShareForwardBoxLine /> Compartilhar</button>
                      </div>
                  </div>

                  <div className="section_post">
                      <div className="section_social_profile">
                        <img className="social_logo" src="/img/kenedy.jpg" alt="profile"/>
                        <span className="social_name">Kenedy</span>

                        <div className="social_post_details">
                            <span className="social_date"><AiOutlineClockCircle /> há cerca de 8 dias</span>
                            <span className="social_privacy"><BiWorld /> Público</span>
                        </div>
                      </div>

                      <div className="social_post_content">
                          <p>ikikikikikikiki.</p>
                      </div>

                      <div className="section_actions_details">
                          <span className="action_first_like"><AiOutlineLike /> 1 pessoa curtiu isso</span>

                          <span className="action_commits">0 comentários</span>

                          <span className="action_shared">3 compartilhamentos</span>
                      </div>

                      <div className="feed_social_action">
                            <button className="button"><AiOutlineLike /> Curtir</button>

                            <button className="button"><FaRegCommentDots/> Comentários</button>

                            <button className="button"><RiShareForwardBoxLine /> Compartilhar</button>
                      </div>
                  </div>
              </Main>
        </>
    )
}