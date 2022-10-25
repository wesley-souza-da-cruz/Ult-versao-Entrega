import Home from './Home.css'
import viagem from '../../assets/viagem.jpg'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem Vindo - <span>Minha Agencia</span>
            </h1>
            <p>Procure Seu Local De Viagem</p>
            <a href="/">Criar Projeto</a>
            <img src={viagem} alt="Minha Agencia" />

        </section>
    )
}

export default Home;