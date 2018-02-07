import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}
  delete(key: string): void {
    localStorage.removeItem(key);
  }

  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify({ type: typeof value, value }));
  }

  select(key: string): any {
    const value = localStorage.getItem(key) || '{}';
    return JSON.parse(value).value;
  }
}
