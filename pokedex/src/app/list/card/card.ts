import { Component, input } from '@angular/core';
import {PokeResult} from '../../core/models/poke-result.model';
import {NgOptimizedImage, TitleCasePipe} from '@angular/common';
import {PokeImgPipe} from './poke-img-pipe';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'poke-card',
    imports: [TitleCasePipe, PokeImgPipe, NgOptimizedImage, RouterLink],
    styleUrl: './card.css',
    template: `
    <a class="poke-card" [routerLink]="pokeResult().name">
        <img
            width="120"
            height="120"
            [ngSrc]="pokeResult().url | pokeImg"
            [alt]="pokeResult().name"
        >
        <p>
            {{ pokeResult().name | titlecase}}
        <p>
    <a>
    `
})
export class Card {
    readonly pokeResult = input.required<PokeResult>();
}
