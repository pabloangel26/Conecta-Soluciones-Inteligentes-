import { TestBed } from '@angular/core/testing';

import { TextosService } from './textos.service';

describe('TextosService', () => {
  let service: TextosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
