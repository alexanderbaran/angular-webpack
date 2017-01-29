import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {

        // // TSLint test.
    
        // // const constOne = 1, ConstTwo = 0;

        // if (true) {
        //     const msg: string = 'Hello World';
        //     console.log(msg);
        // } else { }

        // const singleLine = () => 10;

        // const multiLine = () => {
        //     return 10;
        // };

        // const argParanthesis = (age: number) => age;

        // const nonTradFunc = (/*unusedParam: string*/) => {
        //     const someObj = {
        //         someString: 'Some normal object property.',
        //         'some-weird-property': 'Some kebab-cased named object property.'
        //     };
        //     return someObj;
        // };

        // console.log(singleLine(), multiLine(), argParanthesis(2), nonTradFunc());
    }
}

// function add(x: number, y: number) {
//     return x + y;
// }
