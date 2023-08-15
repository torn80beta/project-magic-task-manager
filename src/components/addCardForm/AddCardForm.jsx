import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { Formik } from 'formik';
import { Field } from 'formik';
import Icon from 'components/icon/Icon';
import DateCalendar from 'components/calendar/DatePicker';
import './addCardForm.scss';
import * as yup from 'yup';
import { addNewTask, editTaskById } from 'redux/workplace/workplace-operation';

const AddCardForm = ({
  columnId = null,
  taskId = null,
  closeModal,
  data: { title, description, labelColor, deadLine } = {},
}) => {
  const dispatch = useDispatch();
  const normalizedDeadLine = deadLine ? deadLine : new Date();
  const theme = useSelector(selectCurrentTheme);
  const schema = yup.object().shape({
    title: yup
      .string()
      .max(25, 'Name can contain 25 symbols max')
      .trim('No leading or trailing spaces')
      .min(1, 'Name needs to be at least 1 char')
      .required('This field is required'),
  });

  return (
    <Formik
      initialValues={{
        columnId,
        _id: taskId,
        description: description,
        title: title || '',
        labelColor: labelColor || 'without',
        deadLine: new Date(normalizedDeadLine),
      }}
      validationSchema={schema}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.description) {
          errors.description = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (!columnId && taskId) {
          //Робимо PATCH запит при сабміті
          // console.log('Updating a card ' + values);
          dispatch(editTaskById(values));
          setSubmitting(false);
          closeModal();
        } else if (!taskId && columnId) {
          //Робимо POST запит при сабміті
          // console.log('Creating a new card ' + values);
          dispatch(addNewTask(values));
          setSubmitting(false);
          closeModal();
        } else {
          console.log('Oops! Something went wrong :(');
          return;
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form className={`add-form theme-${theme}`} onSubmit={handleSubmit}>
          <p className={`add-form-title theme-${theme}`}>
            {!columnId && taskId ? 'Edit card' : 'Add card'}
          </p>
          <div className="add-form-wrap">
            <div className="add-form-email-wrap">
              <input
                className={`add-form-input email theme-${theme}`}
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <p className={`add-form-input-error theme-${theme}`}>
                {errors.title && touched.title && errors.title}
              </p>
            </div>
            <div className="add-form-desc-wrap">
              <textarea
                className={`add-form-input desc theme-${theme}`}
                rows={7}
                name="description"
                placeholder="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <p className={`add-form-input-error theme-${theme}`}>
                {errors.desc && touched.desc && errors.desc}
              </p>
            </div>
            <div>
              <div>
                <p className={`add-form-group-title theme-${theme}`}>
                  Label color
                </p>
                <div
                  className="add-form-radio-group"
                  role="group"
                  aria-labelledby="labelColor-group"
                >
                  <label className="add-form-radio low">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="labelColor"
                      value="low"
                    />
                    <span className="outer-circle"></span>
                    <span className="inner-circle"></span>
                  </label>
                  <label className="add-form-radio medium">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="labelColor"
                      value="medium"
                    />
                    <span className="outer-circle"></span>
                    <span className="inner-circle"></span>
                  </label>
                  <label className="add-form-radio high">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="labelColor"
                      value="high"
                    />
                    <span className="outer-circle"></span>
                    <span className="inner-circle"></span>
                  </label>
                  <label className="add-form-radio without">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="labelColor"
                      value="without"
                    />
                    <span className={`outer-circle theme-${theme}`}></span>
                    <span className={`inner-circle theme-${theme}`}></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="add-form-deadline">
              <p className={`add-form-deadline-title theme-${theme}`}>
                Deadline
              </p>
              <DateCalendar
                selected={values.deadLine}
                onSelect={date => setFieldValue('deadLine', date)}
              />
            </div>
            <button
              className={`add-form-submit theme-${theme}`}
              type="submit"
              disabled={isSubmitting}
              aria-label={!columnId && taskId ? 'Edit' : 'Add'}
            >
              <div className={`add-form-icon-wrap theme-${theme}`}>
                <Icon id="plus" width={14} height={14} />
              </div>
              {!columnId && taskId ? 'Edit' : 'Add'}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddCardForm;
