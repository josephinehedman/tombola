import Button from '../components/Button';
import './Home.css';

const Home = ({ getData }) => (
  <main className='main-content'>
    <section className='main-container--home-page'>
      <h1 className='header__welcome'>Welcome to Tombola!</h1>
      <p> Ps. It might take a little while to connect to the Bored API </p>
      <p> The first activity could take some time to load. </p>
      <Button getData={getData} />
    </section>
  </main>
);

export default Home;
