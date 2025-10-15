import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { customElement } from "lit/decorators.js";
import { LitElement, html, css } from "lit";

import { Logos } from "../shared/logipsum";


@customElement('x-carousel')
export class XCarousel extends LitElement {
    private logos = Logos;

    render() {
        return html`
            <section>
                <div>
                    ${ Object.values(this.logos).map(logo => unsafeHTML(logo)) }
                </div>
                <div>
                    ${ Object.values(this.logos).map(logo => unsafeHTML(logo)) }
                </div>
            </section>
        `;
    }
    static styles = css`
        section {
            margin 100px auto;
            overflow-x: auto;
            display: flex;
            width: 100%;
        }
        section::-webkit-scrollbar {
            display: none;
        }
        div{
            display: flex;
            animation: rotate 10s infinite linear;
            justify-content: center;
            align-items: center;
            gap: 1em;
            padding-right: 1em;
        }
        svg {
            padding: 1rem;
            height: 5rem;
            flex: 1 1 0;
        }
        @keyframes rotate {
            from { translate: 0; }
            to { translate: -100% }
        }
    `;
}
