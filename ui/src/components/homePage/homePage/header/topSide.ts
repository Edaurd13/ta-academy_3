import { Component } from '@Core/component';
import{ NavText } from '@Components/homePage/homePage/header/topSide/navText';
import { Nav } from '@Components/homePage/homePage/header/topSide/nav'


export class TopSide extends Component {
    protected LOCATORS = {
        navText: this.locator.locator('//p[contains(@class, "topStrip__leftSide")]'),

        nav: this.locator.locator('//div[contains(@class, "topStripMenu__menu")]'),
    };

    public NavText = new NavText(this.LOCATORS.navText, this.page);

    public Nav = new Nav(this.LOCATORS.nav, this.page);
}