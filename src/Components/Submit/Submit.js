import React from 'react';

// Import stylesheet
import styles from './Submit.css';

const Submit = () => {
  return (
    <div>
      <input
        className={styles.btn}
        type="submit"
        value="Submit"
      />
    </div>
  );
}

export default Submit;
