import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { needHelp } from 'redux/auth/auth-operation';
import { selectCurrentTheme } from 'redux/auth/auth-slice';

import './needHelpForm.scss';

const NeedHelpForm = props => {
  const dispatch = useDispatch();
  const theme = useSelector(selectCurrentTheme);
  const { closeModal } = props;

  return (
    <Formik
      initialValues={{ email: '', text: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !new RegExp(
            '^(?=.*[@.])(?!.*[@.]{2,})(?=[a-zA-Z0-9@.-]*[.][a-zA-Z])(?=[a-zA-Z0-9@.-]*[@])[a-zA-Z0-9@.-]+$'
          ).test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(needHelp(values));
        resetForm();
        closeModal();
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
        <form className={`help-form theme-${theme}`} onSubmit={handleSubmit}>
          <p className={`help-form-title theme-${theme}`}>Need help</p>
          <div className="help-form-wrap">
            <div className="help-form-email-wrap">
              <input
                className={`help-form-input email theme-${theme}`}
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className={`help-form-input-error theme-${theme}`}>
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <textarea
              className={`help-form-input comment theme-${theme}`}
              rows={5}
              name="text"
              placeholder="Comment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
            />
            <button
              className={`help-form-submit theme-${theme}`}
              type="submit"
              disabled={isSubmitting}
              aria-label="Send"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default NeedHelpForm;
