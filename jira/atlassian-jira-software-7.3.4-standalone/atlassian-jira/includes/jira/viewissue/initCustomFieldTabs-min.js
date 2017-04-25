define("jira/viewissue/init-custom-field-tabs",["jira/util/logger","jira/util/events","jira/util/events/types","aui/tabs","jquery"],function(logger,Events,Types,tabs,$){var scope="#customfieldmodule";var activateTab=function(tabName){var tabTrigger;if(typeof tabName!=="string"&&tabName.length>0){return }if(tabName[0]!=="#"){tabName="#"+tabName}logger.log("activating tab",tabName);tabTrigger=$("a[href='"+tabName+"']",scope);if(tabTrigger.length){tabs.change(tabTrigger)}};var revealer=function(e){var $containingTab=$(e.target).closest(".tabs-pane");if($containingTab.length>0){activateTab($containingTab.attr("id"))}};$(function(){if(Types.NEW_CONTENT_ADDED){Events.bind(Types.NEW_CONTENT_ADDED,function(e,$context){var $customFieldModule=$context.find(scope);$customFieldModule.unbind("reveal");$customFieldModule.bind("reveal",revealer);tabs.setup()})}if(Types.PANEL_REFRESHED){Events.bind(Types.PANEL_REFRESHED,function(e,panel,$new,$existing){if(panel==="details-module"){var $activeTab=$existing.find(scope).find(".active-tab");if($activeTab.length===1){activateTab($activeTab.find("a").attr("href"))}}})}$(scope).bind("reveal",revealer)})});