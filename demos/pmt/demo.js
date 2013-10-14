var demo = demo || {};
var uioBuilder;
var defaultLanguage;

(function ($, fluid) {

    demo.initPMT = function (container, compOpts) {
        uioBuilder = fluid.uiOptions.builder({
            primarySchema: gpii.uiOptions.pmt.primarySchema,
            auxiliarySchema: gpii.uiOptions.pmt.auxiliarySchema
        });
        
        /* get browser default lang */
        var language = navigator.userLanguage || navigator.language;
        defaultLanguage = language.substring(0,2).toLowerCase();

        demo.instantiateUIO(container, compOpts, "gpii.uiOptions.pmt", defaultLanguage);
    };
    
    demo.instantiateUIO = function (container, compOpts, uioType, language) {
        var baseOpts = {
            uioType: uioType,
            components: {
                uiOptionsLoader: {
                    options: {
                        messagePrefix: "../../src/shared/adjusters/messages/" + language + "/"
                    }
                }
            }
        };
        $.extend(true, baseOpts, compOpts);
        fluid.invokeGlobalFunction(uioBuilder.options.assembledUIOGrade, [container, baseOpts]);
    };
})(jQuery, fluid);
