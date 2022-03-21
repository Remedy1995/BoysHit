import { TestBed } from '@angular/core/testing';

import { GetLeagueTableService } from './get-league-table.service';

describe('GetLeagueTableService', () => {
  let service: GetLeagueTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLeagueTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
