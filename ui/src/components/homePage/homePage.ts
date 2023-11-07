import { Container } from '@Core/container';
import { Header } from '@Components/homePage/homePage/header';
import { CreateButton } from '@Components/homePage/information/createButton';
import { InputForm }  from '@Components/homePage/information/inputForm';
import { WelcomePopup } from '@Components/homePage/information/welcomePopUp';


export class HomePage extends Container {

    protected LOCATORS = {
        
        header: this.page.locator('//div[contains(@class, "header__wrapHeader")]'),

        createButton: this.page.locator(
            '//div[contains(@class,"ReactModal__Content ReactModal__Content--after-open") and .//h2[contains(., "Access")]]'
        ),

        boxTitle: this.page.locator(
            '//div[contains(@class,"ReactModal__Content ReactModal__Content--after-open") and .//h2[contains(., "No vision")]]'
        ),

        welcomePopUp: this.page.locator('//div[contains(@class, "rc-dialog-content")]'),
    };

    public Header = new Header(this.LOCATORS.header, this.page);

    public CreateButton = new CreateButton(this.LOCATORS.createButton, this.page);

    public InputForm = new InputForm(this.LOCATORS.boxTitle, this.page);

    public WelcomePopUp = new WelcomePopup(this.LOCATORS.welcomePopUp, this.page);

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}


