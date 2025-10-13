import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: `
        <main class="containter">
            <router-outlet />
        <main>
    `,
    styleUrl: './app.css'
})

export class App {}
