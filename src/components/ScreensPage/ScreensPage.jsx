import './screensPage.scss';
import PopUp from 'components/modal/PopUp';

const ScreensPage = () => {
  return (
    <div className="screensPage">
      ScreensPage
      <PopUp modalName={'Add another column'}>
        <p>Screens page popup</p>
      </PopUp>
    </div>
  );
};

export default ScreensPage;
