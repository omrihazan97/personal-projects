class loginses {
  log() {
    let user_and_password = ["1", 1];
    let butnconf = document.getElementById("butncon");
    butnconf.addEventListener("click", () => {
      let uservalue = document.getElementById("user1").value;
      let passwordValue = document.getElementById("password1").value;
      if (
        uservalue == user_and_password[0] &&
        passwordValue == user_and_password[1]
      ) {
        alert("good");
        document.querySelector(".log_div").style.display = "none";
        document.querySelector(".buttons").style.display = "block";
      } else {
        alert(" try again ");
      }
    });
  }
}

class show {
  tow() {
    let butn2 = document.getElementById("add_butn");
    butn2.addEventListener("click", () => {
      document.querySelector(".Add_employee").style.display = "block";
      document.querySelector(".Searchworker").style.display = "none";
      document.querySelector(".displaye").style.display = "none";
      document.querySelector(".del").style.display = "none";
      document.querySelector(".in_out").style.display = "none";
    });
  }
  find2() {
    let butnfinf = document.getElementById("Search");
    butnfinf.addEventListener("click", () => {
      document.querySelector(".Searchworker").style.display = "block";
      document.querySelector(".Add_employee").style.display = "none";
      document.querySelector(".displaye").style.display = "none";
      document.querySelector(".del").style.display = "none";
      document.querySelector(".in_out").style.display = "none";
    });
  }

  show__worekr() {
    let show_worekr = document.getElementById("entry_butn");
    show_worekr.addEventListener("click", () => {
      document.querySelector(".spece").style.display = "block";
      document.querySelector(".del").style.display = "block";
      document.querySelector(".displaye").style.display = "block";
      document.querySelector(".Add_employee").style.display = "none";
      document.querySelector(".Searchworker").style.display = "none";
      document.querySelector(".in_out").style.display = "none";
    });
  }

  in_out() {
    let inn_outt = document.getElementById("bun_inout");
    inn_outt.addEventListener("click", () => {
      document.querySelector(".in_out").style.display = "block";
      document.querySelector(".spece").style.display = "none";
      document.querySelector(".del").style.display = "none";
      document.querySelector(".displaye").style.display = "none";
      document.querySelector(".Add_employee").style.display = "none";
      document.querySelector(".Searchworker").style.display = "none";
    });
  }

  fun_inout() {
    let buton = document.getElementById("ok");
    buton.addEventListener("click", () => {
      let hours_Entrance = Number(document.getElementById("hours_in").value);
      let minute_Entrance = Number(document.getElementById("minute_in").value);
      let placeholder_Entrance = 60;
      let sum_Entrance = minute_Entrance / placeholder_Entrance;
      let gg_Entrance = sum_Entrance + hours_Entrance;
      console.log(gg_Entrance);
      // _______________________________________________________
      let hours_exit = Number(document.getElementById("hours_out").value);
      let minute_exit = Number(document.getElementById("minute_out").value);
      let placeholder_exit = 60;
      let sum_exit = minute_exit / placeholder_exit;
      let gg_exit = sum_exit + hours_exit;
      console.log(gg_exit);
      let hisov = gg_exit - gg_Entrance;
      console.log(hisov);
      let money = hisov * 30;
      console.log(money);
    });
  }

  printworkers() {
    let show = document.getElementById("showup");
    show.addEventListener("click", () => {
      printEmployees(workers);
    });
  }
}
// ____________________________________________________________________________________________________________
let workers = [];
class worker {
  constructor(name, last_name, id, number_work) {
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.number_work = number_work;
    this.work_hours = [];
  }
  getMessage() {
    return (
      `${this.id}` +
      " " +
      `${this.name}` +
      " " +
      `${this.last_name}` +
      " " +
      `${this.number_work}`
    );
  }

  attachListernerToButton() {
    document.getElementById("butn1").addEventListener("click", () => {
      let w1 = new worker(
        document.getElementById("input2").value,

        document.getElementById("input3").value,

        document.getElementById("input1").value,

        document.getElementById("input4").value
      );
      // console.log(w1.getMessage());
      console.log(workers);
      workers.push(w1);
      localStorage.setItem("worker", JSON.stringify(workers));
      printEmployees(workers);
    });
  }
}

function printEmployees(workers) {
  console.log("hiii");
  let u = document.createElement("ul");
  u.setAttribute("id", "listy");
  workers.forEach((worker) => {
    let liItem = document.createElement("li"); //<li></li>
    let liContent = document.createTextNode(
      worker.name + " " + worker.last_name
    ); //firstname lastname
    liItem.appendChild(liContent); //<li>firstname lastname</li>

    u.appendChild(liItem); //<ul><li>firstname lastname</li></ul>
  });
  //after foreach: <ul><li>firstname lastname</li><li>firstname lastname</li><li>firstname lastname</li>...</ul>
  document.getElementById("displaye").innerHTML = "";
  document.getElementById("displaye").appendChild(u);
}

class find_js_del {
  find1() {
    let inSearch = document.getElementById("nameofemp"); //INPUT
    let btnSearch = document.getElementById("find_w"); //כפתור
    btnSearch.addEventListener("click", () => {
      let found = workers.filter(
        (x) =>
          x.id === inSearch.value ||
          x.name == inSearch.value ||
          x.last_name == inSearch.value ||
          x.number_work == inSearch.value
      );

      if (found) {
        // בניה של קוד שמציגה פרטי עובדים בHTML
        console.log(found);
      } else {
        console.log("not in array!");
      }
    });
  }
  findSearch2() {
    let inSearch2 = document.getElementById("nameofemp2"); //INPUT
    let btnSearch2 = document.getElementById("find_w2"); //כפתור
    btnSearch2.addEventListener("click", () => {
      let found2 = workers.filter(
        (x) =>
          x.id === inSearch2.value ||
          x.name == inSearch2.value ||
          x.last_name == inSearch2.value ||
          x.number_work == inSearch2.value
      );

      if (found2) {
        console.log(found2);
      } else {
        console.log("not in array!");
      }
    });
  }

  SON() {
    let localWorker = localStorage.getItem("worker");
    if (localWorker) {
      JSON.parse(localWorker).forEach((x) => {
        workers.push(
          new worker(x.name, x.last_name, x.id, x.number_work, x.work_hours)
        );
      });
    }
  }
  delet() {
    let deleteUserBtn = document.getElementById("deleteUser");
    deleteUserBtn.addEventListener("click", () => {
      let idEmployee = document.getElementById("input_delete").value;
      workers.forEach((element, i) => {
        if (element.id == idEmployee) {
          workers.splice(i, 1);
          localStorage.setItem("worker", JSON.stringify(workers));
          printEmployees(workers);
        }
      });
    });
  }
}

let event_one_login = new loginses(); //login
event_one_login.log();
let button_event_add_butn = new show(); //1
button_event_add_butn.tow();
let button_event_Search = new show(); //2
button_event_Search.find2();
let button_event_entry_butn = new show(); //3
button_event_entry_butn.show__worekr();
let button_event_bun_inout = new show(); //4
button_event_bun_inout.in_out();
let button_event_ok = new show();
button_event_ok.fun_inout(); //חישוב
let printn = new show(); //הופעה
printn.printworkers();
let start_worker = new worker();
start_worker.attachListernerToButton();
let finds = new find_js_del();
finds.find1();
let findSearch2 = new find_js_del();
findSearch2.findSearch2();
let jsom = new find_js_del();
jsom.SON();
let del = new find_js_del();
del.delet();
