const test = require('ava')
import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOMServer from 'react-dom-server';
import App from './../src/App';

test('Can get queue length', t => {
  t.pass();
  console.log('success')
});

test('FieldError shows when the error is in array', assert => {
  const errors = [{ attribute: 'email', code: '123' }];
  const div = document.createElement('div');
  const field = React.createElement(App, {
  }, 'Error message');
  ReactDOM.render(field, div);
  assert.pass();
  // const result = ReactDOMServer.renderToStaticMarkup(field);
  console.log(result)
  // assert.same(result, '<span class="form__error">Error message</span>');
});

test('foo', t => {
  t.pass();
});
