import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import HelloWorld from './HelloWorld/Component/helloworld';

Meteor.startup(() => {
  render(<HelloWorld />, document.getElementById('app'));
});
