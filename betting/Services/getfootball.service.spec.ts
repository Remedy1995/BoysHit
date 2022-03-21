import { TestBed } from '@angular/core/testing';

import { GetfootballService } from './getfootball.service';

describe('GetfootballService', () => {
  let service: GetfootballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetfootballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
