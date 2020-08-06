import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/16269962?s=460&u=2ab727dfec7464c9f1059d66bc7581e7d60d9727&v=4" alt="Alessandro L Santos" />
                <div>
                    <strong>Alessandro L. Santos</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entuaiasta das melhores tecnologias de química avaçada.
                <br/><br/>
                Apaixonado por explodir coisa em laboratório e por mudar a vida das pessoas
                através de experiências.
            </p>

            <footer>
                <p> 
                    Preço/hora 
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;