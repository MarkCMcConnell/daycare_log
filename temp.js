<div className={styles.btnContainer}>
  <button
    type='button'
    name='AM'
    className={ this.state.meridiem === 'AM' ? styles['btn'] + ' ' + styles['active'] : styles['btn'] }
    onClick={() => this.handleChange('AM')}
  >
    {firstId}
  </button>
  <button
    type='button'
    name='PM'
    className={ this.state.meridiem === 'PM' ? styles['btn'] + ' ' + styles['active'] : styles['btn'] }
    onClick={() => this.handleChange('PM')}
  >
    {secondId}
  </button>
</div>
