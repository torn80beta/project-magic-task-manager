import './notFound.scss';

const NotFound = () => {
  return (
    <section className="notFound">
      <h1>404</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologies on it's behalf.
        </p>
        <a href="/project-magic-task-manager" rel="noreferrer noopener">
          Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;
