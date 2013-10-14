(function ($, fluid) {
    fluid.registerNamespace("gpii.uiOptions.pmt");

    gpii.uiOptions.pmt.primarySchema = {

        "gpii.uiOptions.textSize": {
            "type": "number",
            "default": 12,
            "minimum": 1,
            "maximum": 1000,
            "divisibleBy": 1
        },
        "gpii.uiOptions.cursorSize": {
            "type": "number",
            "default": 1,
            "minimum": 1,
            "maximum": 5,
            "divisibleBy": 0.2
        },
        "gpii.uiOptions.magnifier": {
            "type": "number",
            "default": 100,
            "minimum": 100,
            "maximum": 10000,
            "divisibleBy": 50
        },
        "gpii.uiOptions.magnifierPosition": {
            "type": "string",
            "default": "",
            "enum": ["lens", "dockedleft", "dockedtop", "fullscreen", "dockedright", "dockedbottom"]
        },
        "gpii.uiOptions.magnifierFollows": {
            "type": "string",
            "default": "",
            "enum": ["mousecursor", "textcursor", "keyboardfocus"]
        },
        "gpii.uiOptions.contrast": {
            "type": "boolean",
            "default": false
        }
    };

    gpii.uiOptions.pmt.auxiliarySchema = {
            // The global values:
            "namespace": "gpii.uiOptions.constructed",
            "templatePrefix": "../../src/shared/adjusters/html/", // The common path to settings panel templates
            "template": "../../src/pmt/html/PMTUIOptions.html",
            "messagePrefix": "../../src/shared/adjusters/messages/en/",
            "message": "%prefix/pmt.json",

            // The preference-specific information:
            "textSize": {
                "type": "gpii.uiOptions.textSize",
                "enactor": {
                    "type": "gpii.uiOptions.enactors.textSize"
                },
                "panel": {
                    "type": "gpii.uiOptions.panels.textSize",
                    "container": ".flc-uiOptions-text-size",  // the css selector in the template where the panel is rendered
                    "template": "%prefix/UIOptionsTemplate-plusMinusNumerical.html",
                    "message": "%prefix/textSize.json"
                }
            },
            "cursorSize": {
                "type": "gpii.uiOptions.cursorSize",
                "enactor": {
                    "type": "gpii.uiOptions.enactors.cursorSize"
                },
                "panel": {
                    "type": "gpii.uiOptions.panels.cursorSize",
                    "container": ".flc-uiOptions-cursor-size",  // the css selector in the template where the panel is rendered
                    "template": "%prefix/UIOptionsTemplate-cursorSize.html",
                    "message": "%prefix/cursorSize.json"
                }
            },
            "magnifier": {
                "type": "gpii.uiOptions.magnifier",
                "enactor": {
                    "type": "gpii.uiOptions.enactors.magnifier"
                },
                "panel": {
                    "type": "gpii.uiOptions.panels.magnifier",
                    "container": ".flc-uiOptions-magnifier",  // the css selector in the template where the panel is rendered
                    "template": "%prefix/UIOptionsTemplate-plusMinusNumerical.html",
                    "message": "%prefix/magnifier.json"
                }
            },
            "magnifierPosition": {
                "type": "gpii.uiOptions.magnifierPosition",
                "classes": {
                    "lens": "fl-magnifierPosition-uio-lens fl-magnifierPosition-uio-icon-label",
                    "fullscreen": "fl-magnifierPosition-uio-fullscreen fl-magnifierPosition-uio-icon-label",
                    "dockedtop": "fl-adjuster-icons-additional fl-magnifierPosition-uio-top fl-magnifierPosition-uio-icon-label",
                    "dockedbottom": "fl-adjuster-icons-additional fl-magnifierPosition-uio-bottom fl-magnifierPosition-uio-icon-label",
                    "dockedleft": "fl-adjuster-icons-additional fl-magnifierPosition-uio-left fl-magnifierPosition-uio-icon-label",
                    "dockedright": "fl-adjuster-icons-additional fl-magnifierPosition-uio-right fl-magnifierPosition-uio-icon-label"

                },
                "panel": {
                    "type": "gpii.uiOptions.panels.magnifierPosition",
                    "container": ".flc-uiOptions-magnifierPosition",  // the css selector in the template where the panel is rendered
                    "classnameMap": {"magnifierPosition": "@magnifierPosition.classes"},
                    "template": "%prefix/UIOptionsTemplate-magnifierPosition.html",
                    "message": "%prefix/magnifier.json"
                }
            },
            "magnifierFollows": {
                "type": "gpii.uiOptions.magnifierFollows",
                "classes": {
                    "mousecursor": "fl-magnifierFollows-uio-mouseCursor fl-magnifierFollows-uio-icon-label",
                    "textcursor": "fl-magnifierFollows-uio-textCursor fl-magnifierFollows-uio-icon-label",
                    "keyboardfocus": "fl-magnifierFollows-uio-keyboardFocus fl-magnifierFollows-uio-icon-label",
                },
                "panel": {
                    "type": "gpii.uiOptions.panels.magnifierFollows",
                    "container": ".flc-uiOptions-magnifierFollows",  // the css selector in the template where the panel is rendered
                    "classnameMap": {"magnifierFollows": "@magnifierFollows.classes"},
                    "template": "%prefix/UIOptionsTemplate-magnifierFollows.html",
                    "message": "%prefix/magnifier.json"
                }
            },
            "contrast": {
                "type": "gpii.uiOptions.contrast",
                "enactor": {
                    "type": "gpii.uiOptions.enactors.contrast"
                },
                "panel": {
                    "type": "gpii.uiOptions.panels.contrast",
                    "container": ".flc-uiOptions-contrast",
                    "template": "%prefix/UIOptionsTemplate-contrastNew.html",
                    "message": "%prefix/contrastNew.json"
                }
            }
        };
})(jQuery, fluid);
