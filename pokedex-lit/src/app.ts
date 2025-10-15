import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit";

import { xGetStyle } from "./styles.ts";
import { Urls } from "./types.ts";

import type PokemonResponse from './types.ts';
import type Pokemon from './types.ts';



@customElement('x-get')
export class XGet extends LitElement {
    @property({ type: Array }) data: Pokemon[] = [];
    @property({ type: Boolean }) loading = false;

    static styles = xGetStyle;


    async connectedCallback() {
        super.connectedCallback();

        await this.fetchData();
    }

    async fetchData() {
        try {
            const response = await fetch(Urls.target);
            const pokeData: PokemonResponse = await response.json();

            this.data = pokeData.results || [];
        } catch (err) {
            console.log('Error: ', err);
            this.data = [];
        } finally {
            this.loading = false;
        }
    }

    render() {
        if ( this.loading ) return '<p>Loading ...</p>';

        if ( !this.data || this.data.length === 0 ) return '<div></div>';

        return html`
            <div>${ this.data.map(data => this.createCard(data)) }</div>
        `
    }

    createCard(data: Pokemon) {
        const iden = data.url.split('/')
        const imgSrc: string = Urls.imgSrc + '/' + iden[iden.length - 2] + '.png';
        return html`
            <div>
                <h2>${ data.name }</h2>
                <img width="120" height="120" src="${ imgSrc }"></img>
            </div>
        `
    }
}


