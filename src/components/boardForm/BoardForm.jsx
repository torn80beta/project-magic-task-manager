import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './boardForm.scss';
import Icons from '../../images/svg/icons_sprite_Board.svg';
import BoardFormButton from './boardFormButton/BoardFormButton';
// import { themeState } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addNewBoard } from 'redux/workplace/workplace-operation';
import { editBoardById } from 'redux/workplace/workplace-operation';
import { selectCurrentBoard } from 'redux/workplace/workplace-slice';

const iconsSvgInitial = [
  { id: 1, value: 'icon-1' },
  { id: 2, value: 'icon-2' },
  { id: 3, value: 'icon-3' },
  { id: 4, value: 'icon-4' },
  { id: 5, value: 'icon-5' },
  { id: 6, value: 'icon-6' },
  { id: 7, value: 'icon-7' },
  { id: 8, value: 'icon-8' },
];
const imagesBackgroundInitial = [
  // { id: 0, value: 0 },
  { id: 1, value: 'bg-2' },
  { id: 2, value: 'bg-3' },
  { id: 3, value: 'bg-4' },
  { id: 4, value: 'bg-5' },
  { id: 5, value: 'bg-6' },
  { id: 6, value: 'bg-7' },
  { id: 7, value: 'bg-8' },
  { id: 8, value: 'bg-9' },
  { id: 9, value: 'bg-10' },
  { id: 10, value: 'bg-11' },
  { id: 11, value: 'bg-12' },
  { id: 12, value: 'bg-13' },
  { id: 13, value: 'bg-14' },
  { id: 14, value: 'bg-15' },
  { id: 15, value: 'bg-16' },
];
function TextError(currentTheme, errorText) {
  return (
    <div className={`boardCardForm_error theme-${currentTheme}`}>
      {errorText}
    </div>
  );
}

const schema = yup.object().shape({
  name: yup
    .string()
    .max(20, 'Field can contain 20 symbols maximum')
    .trim('Board name cannot include leading and trailing spaces')
    .min(1, 'Board name needs to be at least 1 char')
    .required('This field is required to fill'),
});
const BoardForm = ({
  boardId = null,
  boardTitle = '',
  boardIcon = 'icon-1',
  boardBackground = 'bg-1',
  closeModal,
}) => {
  const currentBoard = useSelector(selectCurrentBoard);
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    // boardTitle: '',
    // svgIcon: 'circles',
    // backgroundIcon: 0,
    // boardTitle: boardTitle,
    name: boardId ? currentBoard.name : '',
    icon: boardId ? currentBoard.icon : '',
    background: boardId ? currentBoard.background : '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    if (boardId) {
      values.id = boardId;
      // console.log('values', values);
      dispatch(editBoardById(values));
    } else {
      const response = await dispatch(addNewBoard(values));
      navigate(response.payload._id);
    }

    resetForm();
    closeModal();
  };

  return (
    <div className={`boardCardForm_Container theme-${currentTheme}`}>
      <h2 className={'boardCardForm_Title'}>
        {boardId ? 'Edit board' : 'New board'}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {props => {
          const { values } = props;

          return (
            <Form>
              <label className={'boardCardForm_label'} htmlFor="name"></label>
              <Field
                className={`boardCardForm_Input theme-${currentTheme}`}
                type="text"
                name="name"
                placeholder="Title"
              />
              <ErrorMessage
                name="name"
                component={() => TextError(currentTheme, props.errors.name)}
              />
              <h4 className={'boardCardForm_IconTitle'}>Icons</h4>
              <div
                role="group"
                aria-labelledby="radio-group-icon"
                className={'boardCardForm_RadioGroupIcon'}
              >
                {iconsSvgInitial.map(icon => {
                  return (
                    <label
                      className={'boardCardForm_RadioIconLabel'}
                      key={icon.id}
                    >
                      <Field type="radio" name="icon" value={icon.value} />
                      <svg
                        className={
                          values.icon === icon.value
                            ? `boardCardForm_svgIconActive theme-${currentTheme}`
                            : `boardCardForm_svgIcon theme-${currentTheme}`
                        }
                      >
                        <use href={`${Icons}#image_${icon.id}`} />
                      </svg>
                    </label>
                  );
                })}
              </div>
              <h4 className={'boardCardForm_BackgroundTitle'}>Background</h4>
              <div
                role="group"
                aria-labelledby="radio-group-icon"
                className={'boardCardForm_RadioGroupImage'}
              >
                <label className={'boardCardForm_RadioIconLabel'}>
                  <Field type="radio" name="background" value="bg-1" />
                  <div
                    className={
                      'bg-1' === values.background
                        ? `imageContainerActive theme-${currentTheme}`
                        : `imageContainer theme-${currentTheme}`
                    }
                  >
                    <div className={'boardCardForm_SvgBackgroundWrapper'}>
                      <svg
                        className={`boardCardForm_backgroundImage theme-${currentTheme}`}
                        width="16"
                        height="16"
                      >
                        <use href={`${Icons}#imageBackground_0`} />
                      </svg>
                    </div>
                  </div>
                </label>
                {imagesBackgroundInitial.map(image => {
                  return (
                    <label
                      className={'boardCardForm_RadioIconLabel'}
                      key={image.id}
                    >
                      <Field
                        type="radio"
                        name="background"
                        value={image.value}
                      />
                      <div
                        className={
                          image.value === values.background
                            ? `imageContainerActive theme-${currentTheme}`
                            : `imageContainer theme-${currentTheme}`
                        }
                      >
                        <img
                          className={'backgroundImage'}
                          src={require(`../../images/images_BoardForm/image_${image.id}.jpg`)}
                          alt={`Background type ${image.id}`}
                        />
                      </div>
                    </label>
                  );
                })}
              </div>
              <BoardFormButton
                currentTheme={currentTheme}
                submitForm={props.submitForm}
                boardId={boardId}
                {...props}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BoardForm;
