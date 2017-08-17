import { EponsPatientTimeSpentDashboardPage } from './app.po';

describe('epons-patient-time-spent-dashboard App', () => {
  let page: EponsPatientTimeSpentDashboardPage;

  beforeEach(() => {
    page = new EponsPatientTimeSpentDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
