import './Columns.scss';
const Columns = ({ title }) => {
  const currentTheme = 'violet';
  return (
    <div className={`column theme-${currentTheme}`}>
      <div className={`column_header theme-${currentTheme}`}>
        <h2 className={`column_headerText theme-${currentTheme}`}>{title}</h2>
      </div>
    </div>
  );
};
export default Columns;
