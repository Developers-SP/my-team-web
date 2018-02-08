import { URLSearchParams } from '@angular/http';
export const JsonToForm = (json: Object): FormData => {
  const form = new FormData();
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const element = json[key];
      form.append(key, json[key]);
    }
  }
  return form;
};

export const JsonToUrl = (json: Object): URLSearchParams => {
  const url = new URLSearchParams();
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const element = json[key];
      url.append(key, json[key]);
    }
  }
  return url;
};
