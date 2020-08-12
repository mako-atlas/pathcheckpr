import React from "react";
import { Select } from "@chakra-ui/core";
import { navigate } from 'gatsby';

const selectLanguage = (e, lang, location) => {
    e.persist();
    const { value } = e.target;
    const isDefault = value === 'en';
    let url = isDefault ? location.pathname.replace(`/${lang}`, '/') : `/${value}/${location.pathname}`;
    if(url) {
        url = url.replace('//', '/');
        navigate(url);
    }
};

const LanguageSelector  = ({ lang, location }) => {
    return (
        <Select
            size="sm"
            backgroundColor="gray.50"
            borderColor="blue.400"
            defaultValue={lang}
            onChange={(e) => selectLanguage(e, lang, location)}
        >
            <option value="en" disabled={lang === 'en'}>English</option>
            <option value="es" disabled={lang === 'es'}>Español</option>
        </Select>
    );
};

export default LanguageSelector;
