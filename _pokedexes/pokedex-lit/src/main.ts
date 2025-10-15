import { XGet } from './app.ts';

declare global {
    interface HTMLElementTagNameMap {
        'x-get': XGet,
    }
}
