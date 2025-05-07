import { count } from "console";

class Logger {
  grey: String;
  green: String;
  clear: String;
  purple: String;

  isRequest: String[];
  isResponse: String[];

  constructor() {
    this.green = "\x1b[38;2;36;135;90m";
    this.grey = "\x1b[38;2;126;126;124m";
    this.purple = "\x1b[38;2;122;36;138m";
    this.clear = "\x1b[0m";

    this.isRequest = [];
    this.isResponse = [];
  }

  request({ route, entity }) {
    this.isRequest.push(
      `🚚 request for ${route} ${this.grey}by ${this.green}${entity}${this.clear}`,
    );
  }

  response({ route, code }) {
    this.isResponse.push(`response is ${this.purple}${code}${this.clear}`);
  }

  server() {
    let tik = 0,
      counter = 0,
      points = "⚡";

    setInterval(() => {
      console.clear();

      if (tik > 2) {
        points = "⚡";
        tik = 0;
      }

      console.log(
        `project ${this.grey}by ${this.green}Talison-Silva ${this.clear} ♥️\n`,
      );
      console.log(`running server ${points}`);
      points += "⚡";

      console.log("");
      this.isRequest.map((request, index) => {
        console.log(`${request}`);
        console.log(`${this.isResponse[index]}`);
        console.log("\x1b[");
        console.log("");
      });

      ++tik;
      ++counter;
    }, 100);
  }
}

export const logger = new Logger();
