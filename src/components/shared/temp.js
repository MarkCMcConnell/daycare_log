<Today today={this.state.today} onChange={this.handleChange} />
<Day day={this.state.day} onChange={this.handleChange} />
<Meals meals={this.state.meals} onChange={this.handleChange} />
<BowelMovements
  bathroom={this.state.bathroom}
  type={this.state.type}
  onChange={this.handleChage} />
<NapTime />
<Activities
  activities={this.state.activities}
  onChange={this.handleChange} />
<BringItems />
<Email onChange={this.handleChange} />
