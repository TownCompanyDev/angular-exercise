import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class StorageService {
    readonly _storage = window.localStorage;

    has(name: string): boolean {
        return this.get(name) !== null;
    }

    get<T>(name: string): T {
        const item = this._storage.getItem(name);

        try {
            return JSON.parse(item) as T;
        } catch (err) {
            return null;
        }
    }

    set(name: string, value: any): void {
        this._storage.setItem(name, JSON.stringify(value));
    }

    remove(name: string): void {
        this._storage.removeItem(name);
    }
}
