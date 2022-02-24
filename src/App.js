import magazineBackground from './zuckerberg-testify.jpg';
import './App.css';

function App() {
  return (
    <main className="main-container">
        <section className="top-info">
            <p className="info">United States</p>
            <p className="info">FEB. 24 / MARCH. 1, 2022</p>
        </section>

        <article className="magazine-cover">
            <header className="title-container">
                <h1 className="magazine-title">TIME</h1>
            </header>

            <figure className="img-container">
                <img src={magazineBackground} alt="" className="background-img"/>
            </figure>

            

            <footer className="articles-container">
                <article className="article">
                    <p className="name">Mark Zuckerberg</p>
                    <p className="author">Meta CEO</p>
                </article>

                <article className="article">
                    <p className="name">CHANGE THE WORLD</p>
                    <p className="author">METAVERSE</p>
                </article>
            </footer>
        </article>

        <section className="bottom-info">
            <p className="info">time.com</p>
        </section>
    </main>
  );
}

export default App;