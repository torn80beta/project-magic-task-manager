import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Field } from 'formik';
import { themeState } from 'redux/theme/themeSlice';
import './addCardForm.scss';
import Icon from 'components/icon/Icon';
import DateCalendar from 'components/calendar/DatePicker';

const AddCardForm = () => {
  const theme = useSelector(themeState);

  return (
    <Formik
      initialValues={{ title: '', desc: '', priority: 'without' }}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.desc) {
          errors.desc = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values));
          setSubmitting(false);
        }, 400);
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
      }) => (
        <form className={`add-form theme-${theme}`} onSubmit={handleSubmit}>
          <p className={`add-form-title theme-${theme}`}>Add card</p>
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
                name="desc"
                placeholder="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desc}
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
                  aria-labelledby="priority-group"
                >
                  <label className="add-form-radio low">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="priority"
                      value="low"
                    />
                    <span class="outer-circle"></span>
                    <span class="inner-circle"></span>
                  </label>
                  <label className="add-form-radio medium">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="priority"
                      value="medium"
                    />
                    <span class="outer-circle"></span>
                    <span class="inner-circle"></span>
                  </label>
                  <label className="add-form-radio high">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="priority"
                      value="high"
                    />
                    <span class="outer-circle"></span>
                    <span class="inner-circle"></span>
                  </label>
                  <label className="add-form-radio without">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="priority"
                      value="without"
                    />
                    <span class={`outer-circle theme-${theme}`}></span>
                    <span class={`inner-circle theme-${theme}`}></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="add-form-deadline">
              <p className={`add-form-deadline-title theme-${theme}`}>
                Deadline
              </p>
              <DateCalendar/>
            </div>
            <button
              className={`add-form-submit theme-${theme}`}
              type="submit"
              disabled={isSubmitting}
            >
              <div className={`add-form-icon-wrap theme-${theme}`}>
                <Icon id="plus" width={14} height={14} />
              </div>
              Add
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddCardForm;
