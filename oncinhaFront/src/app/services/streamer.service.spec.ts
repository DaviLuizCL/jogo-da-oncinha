import { TestBed } from '@angular/core/testing';

import { StreamerService } from './streamer.service';

describe('StreamerService', () => {
  let service: StreamerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
