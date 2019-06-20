class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOff(year){
    return year - this.startDate.getFullYear()
  }
}
