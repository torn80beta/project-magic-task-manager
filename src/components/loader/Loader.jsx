import './loader.scss';
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div className={`loader-wrapper`}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
