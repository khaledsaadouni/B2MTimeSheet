export class Userapi{

  username: string;

  name: string;

  firstname: string;

  job: string;

  email: string;

  password: string;

  birthday: Date;

  role: string;

  phone: number;

  gender: string;

  constructor(username: string, name: string, firstname: string, job: string, email: string, password: string, birthday: Date, role: string, phone: number, gender: string) {
    this.username = username;
    this.name = name;
    this.firstname = firstname;
    this.job = job;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.role = role;
    this.phone = phone;
    this.gender = gender;
  }
}
