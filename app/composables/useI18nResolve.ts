// Pull a plain string out of an i18n value, which sometimes comes back as a compiled message object.
export const useI18nResolve = () => {
	const { rt } = useI18n()

	return (value: unknown): string => {
		if (value == null) return ''
		try {
			return String(rt(value as never))
		} catch {
			return String(value)
		}
	}
}
