import {expect} from 'chai';
declare var describe,it: any; // Alternatively, install the typings globally.

//Entry point for tests.  Replace the following with your tests.
describe ('SampleTest', ()=> {
    it(' Should add 2+2',()=> {
        expect (2+2).to.be.equal(4);
    });
} );