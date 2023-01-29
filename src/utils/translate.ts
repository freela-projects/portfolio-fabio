import { useIntl } from "react-intl"

function translate(id: string) {
  const intl = useIntl()
  return intl.formatMessage({ id })
}

export default translate