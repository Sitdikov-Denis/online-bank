import { BaseScreen } from "@/components/base-screen.component";

export class AboutUs extends BaseScreen{
    constructor() {
        super({title: 'About us'})
    }
    render() {
        return '<p>AboutUs</p>'
    }
}