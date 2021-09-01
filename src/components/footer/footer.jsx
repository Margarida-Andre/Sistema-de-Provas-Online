import React from "react";
import { Footer, Rodape } from "../../styles/components/footer/style";



function footer() {

  function Anos () {
    const Data = new Date();
    const anos = Data.getFullYear();
    return anos;
  }
  return (
    <>
      <Footer>
        <section id="footer">
          <div>
            <ul>
              <li>
                <h4>SPO</h4>
              </li>
              <li>Perguntas Frequentes</li>

              <li>Políticas de Privacidade</li>
              <li>Termos de Uso</li>
            </ul>

            <ul>
              <li>
                <h4>ORGANIZAÇÃO</h4>
              </li>
              <li>Quem somos?</li>

              <li>O que fazemos?</li>
              <li>Onde nos encontrar?</li>
            </ul>

            <ul>
              <li>
                <h4>FALE CONNOSCO</h4>
              </li>

              <li>Spo2020@gmail.com</li>
              <li>dlinecode.netlify.com</li>
              
            </ul>
          </div>
        </section>
      </Footer>

      <Rodape>
      <footer>
          Todos os Direitos
          Reservados. © {Anos()} SPO design by DLine-Code
        </footer>
        </Rodape>
    </>
  );
}

export default footer;
