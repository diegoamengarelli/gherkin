import { When } from "cucumber";
import $ from "webdriverio/build/commands/browser/$";

When(/^the user enters "(.*)" into the search bar$/g, (keyword) => {
    $("#input").waitForDisplayed(5000);
    $("#input").click();
    $("#input").setValue(keyword);
    $("#contents").waitForDisplayed(5000);
    $("#contents").click();
});