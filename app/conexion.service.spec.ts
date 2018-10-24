import { TestBed } from '@angular/core/testing';

import { conexionApi } from './conexion.service';

describe('conexionApi', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: conexionApi = TestBed.get(conexionApi);
    expect(service).toBeTruthy();
  });
});
