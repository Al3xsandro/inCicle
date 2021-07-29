import { Aside } from './style';

export function AsideSection() {
    return (
        <>
            <Aside>
                  <div className="content_box">
                      <h2 className="title">🎂 Aniversáriantes</h2>
                  </div>
                  <div className="message_box">
                      <p className="title">Nenhum de seus amigos comemora aniversário hoje</p>
                  </div>
                  <div className="content_box">
                    <h2 className="title">⌛ Pendências</h2>
                  </div>
                  <span className="date_title">Seg, 21 de Jun</span>
                  <div className="message_box">
                    <p className="title">Você não possui nenhuma pendência para hoje</p>
                  </div>
              </Aside>
        </>
    )
}