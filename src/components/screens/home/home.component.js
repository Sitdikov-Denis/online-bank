import { BaseScreen } from "@/components/base-screen.component";
import RenderService from "@/core/services/render.service";

export class Home extends BaseScreen{
    constructor() {
        super({title: 'Home'});
        this.renderService = new RenderService()
    }
    render() {
        const element = renderService.htmlElement(element)
        return '<p>Home</p>'
    }
}