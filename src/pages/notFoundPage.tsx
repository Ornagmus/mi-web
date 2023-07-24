
import '../imagenes/css/NotFoundPage.css';
import NavBar from '../components/atoms/NavBar';

const NotFoundPage = () => {
  const randomJoke = [
    "Ooops! Lo sentimos mucho, ese contenido no existe. ¡Pero estamos seguros de que hay vida extraterrestre!",
    "Ooops! Lo sentimos mucho, ese contenido no existe. ¡Parece que un dinosaurio se lo ha comido!",
    "Ooops! Lo sentimos mucho, ese contenido no existe. ¡Quizás lo encontraste en el Triángulo de las Bermudas!",
    "Ooops! Lo sentimos mucho, ese contenido no existe. ¡Es posible que esté en una galaxia muy, muy lejana!",
  ];

  const randomIndex = Math.floor(Math.random() * randomJoke.length);
  const joke = randomJoke[randomIndex];

  return (
    <div>
    <NavBar />
    <div className="not-found-container">
      
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">{joke}</p>
    </div>
    </div>
  );
};

export default NotFoundPage;
