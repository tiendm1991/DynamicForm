import { DynamicFormPage } from './app.po';

describe('dynamic-form App', () => {
  let page: DynamicFormPage;

  beforeEach(() => {
    page = new DynamicFormPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
