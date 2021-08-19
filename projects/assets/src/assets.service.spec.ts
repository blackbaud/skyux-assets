import { SkyAppAssetsService } from './assets.service';

class AssetsServiceImpl extends SkyAppAssetsService {
  public getUrl(path: string) {
    return 'https://foobar.com';
  }

  public getAllUrls() {
    return {};
  }
}

describe('Assets service', () => {
  it('should have public methods', () => {
    const service = new AssetsServiceImpl();
    expect(service.getUrl).toBeDefined();
    expect(service.getAllUrls).toBeDefined();
  });
});
