import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './boardForm.scss';
import Icons from '../../images/svg/icons_sprite_Board.svg';
import BoardFormButton from './boardFormButton/BoardFormButton';
// const currentTheme = 'dark';

const iconsSvgInitial = [
  { id: 1, value: 'circles' },
  { id: 2, value: 'star' },
  { id: 3, value: 'ball' },
  { id: 4, value: 'puzzle' },
  { id: 5, value: 'cube' },
  { id: 6, value: 'lightning' },
  { id: 7, value: 'colors' },
  { id: 8, value: 'hexagon' },
];
const imagesBackgroundInitial = [
  // { id: 0, value: 0 },
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
  { id: 6, value: 6 },
  { id: 7, value: 7 },
  { id: 8, value: 8 },
  { id: 9, value: 9 },
  { id: 10, value: 10 },
  { id: 11, value: 11 },
  { id: 12, value: 12 },
  { id: 13, value: 13 },
  { id: 14, value: 14 },
  { id: 15, value: 15 },
];
function TextError(props) {
  return (
    <div
      className={'boardCardForm_error'}
    >{`This field is required to fill`}</div>
  );
}
// const ImageSvg = ({ id, name, value, color }) => {
//   return (
//     <svg
//       className={
//         value === name
//           ? `boardCardForm_svgIconActive theme-${currentTheme}`
//           : `boardCardForm_svgIcon theme-${currentTheme}`
//       }
//     >
//       <use href={`${Icons}#image_${id}`} />
//     </svg>
//   );
// };

// const ImageBackGround = ({ id, name, value }) => {
//   return (
//     <div
//       className={
//         name === Number(value) ? 'imageContainerActive' : 'imageContainer'
//       }
//     >
//       <img
//         className={'backgroundImage'}
//         src={require(`./img/image_${id}.jpg`)}
//         alt={`Background type ${id}`}
//       />
//     </div>
//   );
// };

const schema = yup.object().shape({
  boardTitle: yup.string().required(),
});

const initialValues = {
  boardTitle: '',
  svgIcon: 'circles',
  backgroundIcon: 0,
};
const handleSubmit = (values, actions) => {
  console.log(values);
  actions.resetForm();
};
const BoardForm = ({ props }) => {
  const currentTheme = 'dark';

  return (
    <div className={`boardCardForm_Container theme-${currentTheme}`}>
      <h2 className={'boardCardForm_Title'}>New board</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {props => {
          // console.log(props);
          const { values } = props;
          return (
            <Form>
              <label
                className={'boardCardForm_label'}
                htmlFor="boardTitle"
              ></label>
              <Field
                className={`boardCardForm_Input theme-${currentTheme}`}
                type="text"
                name="boardTitle"
                placeholder="Title"
              />
              <ErrorMessage name="boardTitle" component={TextError} />
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
                      <Field type="radio" name="svgIcon" value={icon.value} />
                      <svg
                        className={
                          values.svgIcon === icon.value
                            ? `boardCardForm_svgIconActive theme-${currentTheme}`
                            : `boardCardForm_svgIcon theme-${currentTheme}`
                        }
                      >
                        <use href={`${Icons}#image_${icon.id}`} />
                      </svg>
                      {/* <ImageSvg
                        id={icon.id}
                        name={icon.value}
                        value={values.svgIcon}
                      /> */}
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
                  <Field type="radio" name="backgroundIcon" value="0" />
                  <div
                    className={
                      0 === Number(values.backgroundIcon)
                        ? 'imageContainerActive'
                        : 'imageContainer'
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
                        name="backgroundIcon"
                        value={image.value}
                      />
                      <div
                        className={
                          image.value === Number(values.backgroundIcon)
                            ? 'imageContainerActive'
                            : 'imageContainer'
                        }
                      >
                        <img
                          className={'backgroundImage'}
                          src={require(`../../images/images_BoardForm/image_${image.id}.jpg`)}
                          alt={`Background type ${image.id}`}
                        />
                      </div>
                      {/* <ImageBackGround
                        id={image.id}
                        name={image.value}
                        value={values.backgroundIcon}
                      /> */}
                    </label>
                  );
                })}
              </div>
              <BoardFormButton
                currentTheme={currentTheme}
                submitForm={props.submitForm}
                {...props}
              />
              {/* <div
                role="button"
                className={`boardButtonSubmit theme-${currentTheme}`}
                type="submit"
                onClick={props.submitForm}
              >
                <div
                  className={`boardButtonInfo_wrapper theme-${currentTheme}`}
                >
                  <div
                    className={`boardButtonIcon_wrapper theme-${currentTheme}`}
                  >
                    <svg
                      className={`boardButtonIcon theme-${currentTheme}`}
                      width="14"
                      height="14"
                    >
                      <use href={`${Icons}#plus`} />
                    </svg>
                  </div>
                  Create
                </div>
              </div> */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BoardForm;
