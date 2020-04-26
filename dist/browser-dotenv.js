"use strict";
import { Utils } from "../../good-funcs.js/dist/js/GoodFuncs.js";
export class BrowserDotenv {
    /**
     * @param {string} configUrl
     *
     * @returns {Promise<void>}
     */
    static async import(configUrl) {
        await Promise.all(Utils.GoodFuncs.getScripts(['/vendor/avtomon/browser-dotenv/dist/dotenv.js']));
        fetch(configUrl).then(async function (response) {
            const rawEnvs = await response.text();
            window[BrowserDotenv.ENV_WINDOW_PROPERTY] = dotenv.parse(rawEnvs);
        });
    }
}
BrowserDotenv.ENV_WINDOW_PROPERTY = 'env';
