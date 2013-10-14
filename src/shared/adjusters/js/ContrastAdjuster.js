(function ($, fluid) {
    
    fluid.defaults("gpii.uiOptions.panels.contrast", {
        gradeNames: ["fluid.uiOptions.panels", "autoInit"],
        preferenceMap: {
            "gpii.uiOptions.contrast": {
                "model.value": "default"
            }
        },
        events: {
            onToggleContrastAdjusters: null
        },
        listeners: {
            "afterRender.bindEventPreferenceSwitchContrast": {
                "this": "{that}.dom.valueCheckbox",
                "method": "change",
                "args": ["{that}.events.onToggleContrastAdjusters.fire"]
            },
            "onToggleContrastAdjusters.showHide": {
                "this": "{that}.dom.contrastAdjusters",
                "method": "slideToggle"
            },
            "afterRender.setContrastAdjusters": {
                listener: "gpii.uiOptions.panels.contrast.setContrastAdjusters",
                args: ["{that}.dom.contrastAdjusters", "{that}.model.value"]
            },
            "afterRender.setATTRaddToMyPreferencesLabel": {
                "this": "{that}.dom.addToMyPreferencesLabel",
                "method": "attr",
                "args": [{
                    "tooltip-checked": "{that}.options.strings.tooltipChecked",
                    "tooltip-unchecked": "{that}.options.strings.tooltipUnchecked",
                }]
            }
        },
        selectors: {
            valueCheckbox: ".flc-uiOptions-constrastInput",
            headingLabel: ".flc-uiOptions-contrast-label",
            panelLabel: ".headerTitle",
            addToMyPreferencesLabel: ".addToMyPreferencesLabel",
            contrastAdjusters: ".fl-uiOptions-category"         
        },
        selectorsToIgnore: ["contrastAdjusters"],
        protoTree: {
            valueCheckbox: "${value}",
            headingLabel: {messagekey: "contrast"},
            panelLabel: {messagekey: "addContrast"},
            addToMyPreferencesLabel: " "
        },
        strings: {
            tooltipChecked: {
                expander: {
                    func: "gpii.uiOptions.pmt.lookupMsg",
                    args: ["{uiOptionsLoader}.msgBundle", "tooltipChecked"]
                }
            },
            tooltipUnchecked: {
                expander: {
                    func: "gpii.uiOptions.pmt.lookupMsg",
                    args: ["{uiOptionsLoader}.msgBundle", "tooltipUnchecked"]
                }
            }
        },
        components: {
            preview: {
                type: "fluid.uiOptions.preview",
                createOnEvent: "afterRender",
                container: ".flc-uiOptions-contrast .flc-uiOptions-preview-per-setting-frame",
                options: {
                    templateUrl: "../../src/shared/preview/html/uiOptionsContrastPreview.html",
                    components: {
                        enhancer: {
                            type: "fluid.uiEnhancer",
                            container: "{preview}.enhancerContainer",
                            createOnEvent: "onReady",
                            options: {
                                selectors: {
                                    previewText: ".flc-uiOptions-preview-per-setting-label"
                                },
                                strings: {
                                    previewText: {
                                        expander: {
                                            func: "gpii.uiOptions.pmt.lookupMsg",
                                            args: ["{uiOptionsLoader}.msgBundle", "contrastPreviewText"]
                                        }
                                    }
                                },
                                listeners: {
                                    "onCreate.setText": {
                                    	"this": "{that}.dom.previewText",
                                        "method": "text",
                                        "args": ["{that}.options.strings.previewText"]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        
        outerPreviewEnhancerOptions: "{originalEnhancerOptions}.options.originalUserOptions",
        emptyComponentType: "fluid.emptySubcomponent",
        distributeOptions: [{
            source: "{that}.options.outerPreviewEnhancerOptions",
            removeSource: true,
            target: "{that preview enhancer}.options"
        }, {
            source: "{that}.options.emptyComponentType",
            removeSource: true,
            target: "{that preview enhancer magnifier}.type"
        }]
    });
    
    gpii.uiOptions.panels.contrast.setContrastAdjusters = function (contrastAdjuster, flag) {
        contrastAdjuster[flag ? "show" : "hide"]();
    };
})(jQuery, fluid);
