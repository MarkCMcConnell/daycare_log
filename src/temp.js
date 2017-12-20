// bottles
return (
  <div key={index}>
    <label htmlFor={index}>{this.props.firstLabel}</label>
    <TimePicker id={index} time={item.time}
      onChangeDateTime={(time) => this.handleTimeFormChange(time, index)}
    />
    <label htmlFor={index}>{this.props.secondLabel}</label>
    <select id={index} name={index} onChange={(e) => this.handleChange(e, index)}>
      <option value='1 oz.'>1 oz.</option>
      <option value='1.5 oz.'>1.5 oz.</option>
      <option value='2 oz.'>2 oz.</option>
      <option value='2.5 oz.'>2.5 oz.</option>
      <option value='3 oz.'>3 oz.</option>
      <option value='3.5 oz.'>3.5 oz.</option>
      <option value='4 oz.'>4 oz.</option>
      <option value='4.5 oz.'>4.5 oz.</option>
      <option value='5 oz.'>5 oz.</option>
      <option value='5.5 oz.'>5.5 oz.</option>
      <option value='6 oz.'>6 oz.</option>
      <option value='6.5 oz.'>6.5 oz.</option>
      <option value='7 oz.'>7 oz.</option>
      <option value='7.5 oz.'>7.5 oz.</option>
      <option value='8 oz.'>8 oz.</option>
      <option value='8.5 oz.'>8.5 oz.</option>
      <option value='9 oz.'>9 oz.</option>
      <option value='9.5 oz.'>9.5 oz.</option>
      <option value='10 oz.'>10 oz.</option>
    </select>
  </div>
);

// Diapers
return (
  <div key={index}>
    <label htmlFor={item.id}>{this.props.firstLabel}</label>
    <TimePicker id={index} time={item.time}
      onChangeDateTime={(time) => this.handleTimeFormChange(time, index)}
    />
    <select name='type' onChange={(e) => this.handleChange(e, index)}>
      <option value=''></option>
      <option value='wet'>Wet</option>
      <option value='dirty'>Dirty</option>
    </select>
  </div>
);

// Naps
return (
  <div key={index}>
    <label htmlFor={index}>{this.props.firstLabel}</label>
    <TimePicker id={index} time={item.time}
      onChangeDateTime={(time) => this.handleTimeFormChange(time, index)}
    />
    <label htmlFor={index}>{this.props.secondLabel}</label>
    <select id={index} name={index} onChange={(e) => this.handleChange(e, index)}>
      <option value='30 minutes'>30 minutes</option>
      <option value='45 minutes'>45 minutes</option>
      <option value='1 hour'>1 hour</option>
      <option value='1.25 hours'>1.25 hours</option>
      <option value='1.5 hours'>1.5 hours</option>
      <option value='1.75 hours'>1.75 hours</option>
      <option value='2 hours'>2 hours</option>
      <option value='2.25 hours'>2.25 hours</option>
      <option value='2.5 hours'>2.5 hours</option>
      <option value='2.75 hours'>2.75 hours</option>
      <option value='3 hours'>3 hours</option>
    </select>
  </div>
);
