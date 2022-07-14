import {day} from "./Day";

export class task {
  task: String;
  Total: number;
  dayc = {
  };

  constructor(n) {
    this.task = n;
  }

  addHour(d,m,y,c) {
    let date=this.reformat(d)+'/'+this.reformat(m)+'/'+y

    this.dayc[date]=c



  }

  getDone(m, y): any {

    let done = [];
    let total=0;
    let donepermonth = {};
    for (let key in this.dayc) {

      if (Number(key.slice(3, 5)) == m && Number(key.slice(6)) == y) {
        donepermonth[key] = this.dayc[key];
        total+= Number(this.dayc[key]);

      }
    }
    done.push(total)
    for (let i = 0; i < this.returndays(m, y); i++) {
      if (donepermonth[this.reformat(i + 1) + '/' + this.reformat(m) + '/' + y]) {

        done.push(donepermonth[this.reformat(i + 1) + '/' + this.reformat(m) + '/' + y])

      } else {
        done.push("")
      }

    }
    return done;
  }

  returndays(m, y): number {


    if (m == 2) {
      if (y % 4 == 0) {
        return 29
      } else {
        return 28
      }
    } else if (m == 4 || m == 6 || m == 9 || m == 11) {
      return 30
    } else {
      return 31
    }


  }

  reformat(n): String {
    return n > 9 ? "" + n : "0" + n;
  }



}
