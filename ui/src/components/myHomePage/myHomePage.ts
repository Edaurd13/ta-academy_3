import { Container } from '@Core/container';
import { Header } from '@Components/myHomePage/myHomePage/header';

export class myHomePage extends Container {
    protected LOCATORS = {
        header: this.page.locator('//div[contains(@class, "header__wrapHeader")]'),
        
    };

    public Header = new Header(this.LOCATORS.header, this.page);

    

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
