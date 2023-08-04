import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { themeState } from 'redux/theme/themeSlice';
import './needHelpForm.scss';

const NeedHelpForm = () => {
  const theme = useSelector(themeState);

  return (
    <Formik
      initialValues={{ email: '', comment: '' }}
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
              name="comment"
              placeholder="Comment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
            />
            <button
              className={`help-form-submit theme-${theme}`}
              type="submit"
              disabled={isSubmitting}
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
