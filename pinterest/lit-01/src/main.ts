import { XPlanDescription } from './components/plan-description.ts';
import { XCreativity } from './components/creativity.ts';
import { XPlanCost } from './components/plan-cost.ts';
import { XInsights } from './components/insights.ts';
import { XCarousel } from './components/carousel.ts';
import { XFooter } from './components/footer.ts';
import { XHeader } from './components/header.ts';

declare global {
    interface HTMLElementTagNameMap {
        'x-plan-description': XPlanDescription;
        'x-creativity': XCreativity;
        'x-plan-cost': XPlanCost;
        'x-carousel': XCarousel;
        'x-insights': XInsights;
        'x-header': XHeader;
        'x-footer': XFooter;
    }
}
