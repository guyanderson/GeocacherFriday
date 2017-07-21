import { TestBed, inject } from '@angular/core/testing';

import { GeoObjectService } from './geo-object.service';

describe('GeoObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoObjectService]
    });
  });

  it('should ...', inject([GeoObjectService], (service: GeoObjectService) => {
    expect(service).toBeTruthy();
  }));
});
