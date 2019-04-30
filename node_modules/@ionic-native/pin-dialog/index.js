var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var PinDialogOriginal = /** @class */ (function (_super) {
    __extends(PinDialogOriginal, _super);
    function PinDialogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinDialogOriginal.prototype.prompt = function (message, title, buttons) { return cordova(this, "prompt", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    PinDialogOriginal.pluginName = "PinDialog";
    PinDialogOriginal.plugin = "cordova-plugin-pin-dialog";
    PinDialogOriginal.pluginRef = "plugins.pinDialog";
    PinDialogOriginal.repo = "https://github.com/Paldom/PinDialog";
    PinDialogOriginal.platforms = ["Android", "iOS"];
    return PinDialogOriginal;
}(IonicNativePlugin));
var PinDialog = new PinDialogOriginal();
export { PinDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bpbi1kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBcUN6Qyw2QkFBaUI7Ozs7SUFZOUMsMEJBQU0sYUFDSixPQUFlLEVBQ2YsS0FBYSxFQUNiLE9BQWlCOzs7Ozs7b0JBckRyQjtFQXNDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBQaW4gRGlhbG9nXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBob25lR2FwIG51bWVyaWMgcGFzc3dvcmQgZGlhbG9nIHBsdWdpbiBmb3IgQW5kcm9pZCBhbmQgaU9TLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tcGluLWRpYWxvZ2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtQaW4gRGlhbG9nIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vUGFsZG9tL1BpbkRpYWxvZykuXG4gKlxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBpbkRpYWxvZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGluLWRpYWxvZy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBpbkRpYWxvZzogUGluRGlhbG9nKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnBpbkRpYWxvZy5wcm9tcHQoJ0VudGVyIHlvdXIgUElOJywgJ1ZlcmlmeSBQSU4nLCBbJ09LJywgJ0NhbmNlbCddKVxuICogICAudGhlbihcbiAqICAgICAocmVzdWx0OiBhbnkpID0+IHtcbiAqICAgICAgIGlmIChyZXN1bHQuYnV0dG9uSW5kZXggPT0gMSkgY29uc29sZS5sb2coJ1VzZXIgY2xpY2tlZCBPSywgdmFsdWUgaXM6ICcsIHJlc3VsdC5pbnB1dDEpO1xuICogICAgICAgZWxzZSBpZihyZXN1bHQuYnV0dG9uSW5kZXggPT0gMikgY29uc29sZS5sb2coJ1VzZXIgY2FuY2VsbGVkJyk7XG4gKiAgICAgfVxuICogICApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGluRGlhbG9nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcGluLWRpYWxvZycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMucGluRGlhbG9nJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9QYWxkb20vUGluRGlhbG9nJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGluRGlhbG9nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvdyBwaW4gZGlhbG9nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIE1lc3NhZ2UgdG8gc2hvdyB0aGUgdXNlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgVGl0bGUgb2YgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBidXR0b25zIEJ1dHRvbnMgdG8gc2hvd1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGJ1dHRvbkluZGV4OiBudW1iZXIsIGlucHV0MTogc3RyaW5nIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiA0IC8vIG5vIGVycm9yIGNhbGxiYWNrXG4gIH0pXG4gIHByb21wdChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBidXR0b25zOiBzdHJpbmdbXVxuICApOiBQcm9taXNlPHsgYnV0dG9uSW5kZXg6IG51bWJlcjsgaW5wdXQxOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19