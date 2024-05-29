/// <reference types='cypress'/>

import { faker } from '@faker-js/faker';
import DemoblazePage from './DemoblazePage';

const demoblazePage = new DemoblazePage();

const username = faker.internet.userName();
const password = faker.internet.password();
describe('template spec', () => {
  it('registration', () => {
    demoblazePage.register(username, password);
  })
  it('login', () => {
    demoblazePage.login(username, password);
  })
  it('buy product', () => {
    demoblazePage.purchase(username);
  })
})