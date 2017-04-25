define("jira/field/no-browser-user-name-picker",["require"],function(require){var jQuery=require("jquery");var ItemDescriptor=require("jira/ajs/list/item-descriptor");var MultiSelect=require("jira/ajs/select/multi-select");var formatter=require("jira/util/formatter");return MultiSelect.extend({_getDefaultOptions:function(){return jQuery.extend(true,this._super(),{errorMessage:formatter.I18n.getText("admin.project.people.nobrowse.user.doesntexist"),showDropdownButton:false,removeOnUnSelect:true,itemAttrDisplayed:"label"})},_handleCharacterInput:function(){},_setSuggestions:function(){},_handleServerError:function(smartAjaxResult){if(smartAjaxResult.status===404){this.showErrorMessage()}else{this._super()}},_deactivate:function(){this.validateAndAdd()},validateAndAdd:function(){var instance=this;if(jQuery.trim(this.$field.val())===""){this.hideErrorMessage()}else{jQuery.ajax({url:contextPath+"/rest/api/2/user",data:{username:jQuery.trim(instance.getQueryVal())},success:function(user){instance.hideErrorMessage();instance.$field.val("");instance.addItem(new ItemDescriptor({label:user.displayName,value:user.name}))},error:function(){instance.showErrorMessage()}})}},_handleSpace:function(){this.validate()},_handleServerSuggestions:function(){this.hideErrorMessage();this.handleFreeInput()},handleFreeInput:function(){var value=jQuery.trim(this.$field.val());if(value!==""){this.addItem({value:value,label:value});this.model.$element.trigger("change")}this.$field.val("")},keys:{"Return":function(event){event.preventDefault();this.validateAndAdd()},"Spacebar":function(event){event.preventDefault();this.validateAndAdd()}}})});AJS.namespace("AJS.NoBrowseUserNamePicker",null,require("jira/field/no-browser-user-name-picker"));