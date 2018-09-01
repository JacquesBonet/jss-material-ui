import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })
// Fail tests on any warning
console.error = message => {
    throw new Error(message)
}


it('Test', () => {
    // Render a checkbox with label in the document
    const hello = TestUtils.renderIntoDocument(
        <div>Hello</div>
    );

    const testHello = ReactDOM.findDOMNode(hello);

    // Verify that it's Off by default
    expect(testHello.textContent).toEqual('Hello');
});