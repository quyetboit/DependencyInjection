// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// dependency
// 2 cách tạo instance của 1 class trong 1 class khác

// c1: hard code: Tạo instance trong contructor
class CPU {
  constructor() {}
  start() {
    console.log('Speed is 3.2 GHz!');
  }
}

class Computer {
  cpu: CPU;
  constructor() {
    this.cpu = new CPU();
  }
}

let myCompter = new Computer();
// myCompter.cpu.strat()
// Như vậy, đã tạo đc 1 instance của CPU trong Computer
// Nhưng gặp 1 vần đề là đang Computer đang phụ thuộc hoàn toàn vào CPU, giả sử muốn thay đổi 1 CPU khác thì sẽ phải viết lại class Coputer, điều này tốn thời gian và phải test lại từ đầu
// Giải quyết: dependency injecttion


//c2: Inject dependecy vào trong constructor
class FasterCPU {
  constructor() {}
  start() {
    console.log('Speed is 5.2 GHz!');
  }
}
class Computer2 {
  cpu: CPU;
  constructor(cpu: CPU) {
    this.cpu = cpu;
  }
}

let yourLaptop = new Computer(new CPU);
let myLaptop = new Computer2(new FasterCPU)
// yourLaptop.cpu.start();
// myLaptop.cpu.start()
// Như vậy Computer sẽ phụ thuộc vào class nào mà chúng ta inject chứ không phụ thuộc cố định vào class nào cả.
// Dependentcy Injection là kỹ thuật làm cho 1 class độc lập với các phụ thuộc (dependentcy) của nó, bằng cách tạo instance của các phụ thuộc đó thông qua sử dụng constructor (Injecttion) (Truyền vào thông qua contructor).


// Dependentcy Injecttion trong angular
