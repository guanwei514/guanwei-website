import { useEffect, useState } from "react"
import type { Language } from "@/types/site"

const LANGUAGE_STORAGE_KEY = "guanwei-language"

const getInitialLanguage = (): Language => {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

  if (savedLanguage === "zh-TW" || savedLanguage === "en") {
    return savedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh-TW" : "en"
}

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  return { language, setLanguage }
}
