import * as moment from 'moment';

const TODOS = [
  {
    id: 0,
    name: 'todo item 0',
    description: 'Gochujang chambray shabby chic dreamcatcher put a bird on it, ' +
      'mumblecore iceland stumptown gluten-free marfa. Actually banh mi intelligentsia ' +
      'kogi flexitarian schlitz.',
    status: 'pending',
    date: moment().startOf('day').fromNow()
  }, {
    id: 1,
    name: 'todo item 1',
    description: ' Flexitarian slow-carb fap locavore stumptown. ' +
      'Letterpress 3 wolf moon enamel pin farm-to-table umami, direct trade YOLO asymmetrical ' +
      'squid tousled man bun fanny pack irony.',
    status: 'pending',
    date: moment().subtract(3, 'hours').startOf('hour').fromNow()
  }, {
    id: 2,
    name: 'todo item 2',
    description: 'Fanny pack forage disrupt chia celiac fap. Messenger bag tbh roof party crucifix, ' +
      'put a bird on it mixtape craft beer seitan meh chicharrones yr subway tile.',
    status: 'completed',
    date: moment().startOf('hour').fromNow()
  }
];

export default TODOS;
