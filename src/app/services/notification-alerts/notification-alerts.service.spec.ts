import { TestBed } from '@angular/core/testing';

import { NotificationAlertsService } from './notification-alerts.service';

describe('NotificationAlertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationAlertsService = TestBed.get(NotificationAlertsService);
    expect(service).toBeTruthy();
  });
});
