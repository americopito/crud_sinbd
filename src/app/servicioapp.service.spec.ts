import { TestBed } from '@angular/core/testing';

import { ServicioappService } from './servicioapp.service';

describe('ServicioappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioappService = TestBed.get(ServicioappService);
    expect(service).toBeTruthy();
  });
});
