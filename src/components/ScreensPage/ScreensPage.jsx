import './screensPage.scss';
import PopUp from 'components/modal/PopUp';

import Columns from '../columns/Columns';

//temporary
const columnsArray = [
  { title: 'To Do', id: 1 },
  { title: 'In progress', id: 2 },
  { title: 'Done', id: 3 },
  { title: 'Done', id: 4 },
  { title: 'Done', id: 5 },
  { title: 'Done', id: 6 },
  { title: 'Done', id: 7 },
  { title: 'Done', id: 8 },
];

const ScreensPage = () => {
  const currentTheme = 'violet';
  return (
    <div className={`theme-${currentTheme} screenPage`}>
      <div className={`screenPage_header theme-${currentTheme}`}>
        <h1 className={`screenPage_title theme-${currentTheme}`}>
          Project office
        </h1>
        <button className={`screenPage_filter theme-${currentTheme}`}>
          <span className={`screenPage_filterText theme-${currentTheme}`}>
            Filter
          </span>
        </button>
      </div>

      <div className={`screenPage_canvas theme-${currentTheme}`}>
        <div className={`screenPage_columns theme-${currentTheme}`}>
          {columnsArray.map(item => (
            <Columns title={item.title} key={item.id} />
          ))}
        </div>
        <button className={`screenPage_addButton theme-${currentTheme}`}>
          <span className={`screenPage_addButtonText theme-${currentTheme}`}>
            Add another column
          </span>
        </button>
      </div>
      <PopUp modalName={'Add another column'}>
        <p>Screens page popup</p>
      </PopUp>
    </div>
  );
};

export default ScreensPage;
