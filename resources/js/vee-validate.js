import { defineRule, configure } from "vee-validate";
configure({
    validateOnBlur: true,
    validateOnChange: false,
    validateOnInput: false,
    validateOnModelUpdate: true,
});
import {
    required,
    email,
    min,
    regex,
    max,
    confirmed,
    numeric,
    is,
    url,
    max_value,
    min_value
} from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import { default as ja } from "./vee-validate/ja.json";
import { default as en } from "@vee-validate/i18n/dist/locale/en.json";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("min_value", min_value);
defineRule("regex", regex);
defineRule("confirmed", confirmed);
defineRule("is", is);
defineRule("numeric", numeric);
defineRule("max_value", max_value);
defineRule("url", url);

defineRule('requiredArray', (value) => {
    if (!Array.isArray(value)) {
        return false;
    }
    return value.length > 0;
});

defineRule('requiredConfirm', (password_confirm, new_password) => {
    if (password_confirm != new_password ){
        return false;
    }
    return true;
});

defineRule('regexPassword', (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordValue = regex.test(value);
    if (!passwordValue){
        return false;
    }
    return true;
});

const fieldNames = {}

configure({
    generateMessage: localize({
        ja: {
            messages: ja.messages,
            names: fieldNames,
            fields: {
            },
        },
        en: {
            messages: en.messages,
            names: {
            },
        },
    }),
});

setLocale("ja");
