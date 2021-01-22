import {HttpRequest} from "@angular/common/http";

export function endsWith(param: { method: string; url: string }): (req: HttpRequest<any>) => boolean {
  return req => req.url.endsWith(param.url) && req.method === param.method;
}

export function testId(id: string) {
  return `[data-testid="${id}"]`;
}
