import {HttpModuleOptions, HttpModuleOptionsFactory} from "@nestjs/common";

export class HttpConfigService implements HttpModuleOptionsFactory {

  createHttpOptions(): Promise<HttpModuleOptions> | HttpModuleOptions {
    return {
      timeout: 1000 * 30,
      maxRedirects: 3,
      baseURL: this.getBaseUrl()
    }
  }

  private getBaseUrl() {
    if (process.env.NODE_ENV === "production") {
      return "https://powerjudge.com";
    }

    return "http://localhost:15000";
  }

}
