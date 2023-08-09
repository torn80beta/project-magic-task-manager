// import './screensPage.scss';
// import PopUp from 'components/modal/PopUp';
// // import { useState } from 'react';
// import Columns from '../columns/Columns';
// import Icon from '../icon/Icon';
// import FilterPopup from 'components/filterPopup/FilterPopup';
// import {
//   selectCurrentTheme,
//   // selectCurrentUserBoards,
// } from 'redux/auth/auth-slice';
// import { useSelector } from 'react-redux';
// import ColumnForm from 'components/columnForm/ColumnForm';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   selectAllBoards,
//   selectColumns,
// } from 'redux/workplace/workplace-slice';
// // import bcg from '../../images/desktop/bg-10.1x.jpg';
// // import { ScreenBcg } from './ScreensPageBcg.styled';
// import { desktopArray } from 'images/imgArrey';

// const ScreensPage = () => {
//   const currentTheme = useSelector(selectCurrentTheme);
//   const boardArray = useSelector(selectAllBoards);
//   const columnsArray = useSelector(selectColumns);
//   const { boardName } = useParams();
//   const [currentBoard, setCurrentBoard] = useState('');
//   const [currentBoardBcg, setCurrentBoardBcg] = useState('');
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     // return () => {
//     //   window.removeEventListener('resize', handleResize);
//     // };
//   }, []);

//   const getBackgroundImage = () => {
//     if (windowWidth < 600) {
//       // return 'url(../image/mobile/bg-1.1x.jpg)';
//     } else {
//       // return 'url(../../image/mobile/bg-1.1x.jpg)';
//     }
//   };
//   console.log(getBackgroundImage());
//   const styles = {
//     container: {
//       width: '100%',
//       height: '100vh',
//       backgroundImage: `url(${desktopArray[2]})`,
//       // backgroundImage: getBackgroundImage(),
//       backgroundSize: 'cover',
//       // Другие стили
//     },
//   };

//   useEffect(
//     () => {
//       const foundBoard = boardArray.find(item => item._id === boardName);
//       foundBoard ? setCurrentBoard(foundBoard.name) : setCurrentBoard('');
//       setCurrentBoardBcg(foundBoard && foundBoard.background);
//       console.log(currentBoardBcg);
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [{ boardName }, boardArray]
//   );
//   return (
//     <div style={styles.container}>
//       <div className={`screenPage_header theme-${currentTheme}`}>
//         <h1 className={`screenPage_title theme-${currentTheme}`}>
//           {currentBoard}
//         </h1>
//         <PopUp
//           data={
//             <span className={`screenPage_filterText theme-${currentTheme}`}>
//               Date Picker
//             </span>
//           }
//         >
//           <DatePicker />
//         </PopUp>

//         <PopUp
//           data={
//             <span className={`screenPage_filter theme-${currentTheme}`}>
//               <Icon id={'filter'} width={16} height={16} />
//               <span className={`screenPage_filterText theme-${currentTheme}`}>
//                 Filter
//               </span>
//             </span>
//           }
//         >
//           <FilterPopup />
//         </PopUp>
//       </div>

//       <div className={`screenPage_canvas theme-${currentTheme}`}>
//         <div className={`screenPage_columns theme-${currentTheme}`}>
//           {columnsArray.map(item => (
//             <Columns {...item} key={item._id} />
//           ))}
//         </div>

//         <PopUp
//           data={
//             <span className={`screenPage_addButton theme-${currentTheme}`}>
//               <span
//                 className={`screenPage_addButtonPlus theme-${currentTheme}`}
//               >
//                 <Icon id={'plus'} width={14} height={14} />
//               </span>
//               <span
//                 className={`screenPage_addButtonText theme-${currentTheme}`}
//               >
//                 Add another column
//               </span>
//             </span>
//           }
//         >
//           <AddColumnForm />
//         </PopUp>
//       </div>
//     </div>
//   );
// };

// export default ScreensPage;
