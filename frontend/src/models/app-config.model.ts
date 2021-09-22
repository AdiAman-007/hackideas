export class AppConfig {
    brandName: String;
    header: [];
    footer: String;

    constructor(data: any) {
        this.brandName = data.brandName;
        this.header = data.header;
        this.footer = data.footer;
    }
}
