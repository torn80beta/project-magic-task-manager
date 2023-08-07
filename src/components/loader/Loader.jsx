import './loader.scss';
import { Spin } from 'antd';

const Loader = () => {
  // const currentTheme = useSelector(selectCurrentTheme);
  return (
    <div className={`loader-wrapper`}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
