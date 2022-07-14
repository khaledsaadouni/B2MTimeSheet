export class Person{
  name: String;
  firstname: String;
  number: number;
  email: string;
  job: String;
  skype: String;
  birthday: String;

  constructor(name: String, firstname: String, number: number, email: string, job: String, skype: String, birthday: String) {
    this.name = name;
    this.firstname = firstname;
    this.number = number;
    this.email = email;
    this.job = job;
    this.skype = skype;
    this.birthday = birthday;
  }
}
