export const API_URL = 'http://127.0.0.1:8000/'
export const BUTTON_TYPES = {
  NUMBER: 1,
  OPERATOR: 2,
  SPECIAL: 3
}
export const BUTTONS = [
  { type: BUTTON_TYPES.SPECIAL, value: 'bsksp' },
  { type: BUTTON_TYPES.SPECIAL, value: 'del' },
  { type: BUTTON_TYPES.SPECIAL, value: '%' },
  { type: BUTTON_TYPES.OPERATOR, value: '/' },
  { type: BUTTON_TYPES.NUMBER, value: '1' },
  { type: BUTTON_TYPES.NUMBER, value: '2' },
  { type: BUTTON_TYPES.NUMBER, value: '3' },
  { type: BUTTON_TYPES.OPERATOR, value: '-' },
  { type: BUTTON_TYPES.NUMBER, value: '4' },
  { type: BUTTON_TYPES.NUMBER, value: '5' },
  { type: BUTTON_TYPES.NUMBER, value: '6' },
  { type: BUTTON_TYPES.OPERATOR, value: '+' },
  { type: BUTTON_TYPES.NUMBER, value: '7' },
  { type: BUTTON_TYPES.NUMBER, value: '8' },
  { type: BUTTON_TYPES.NUMBER, value: '9' },
  { type: BUTTON_TYPES.OPERATOR, value: '*' },
  { type: BUTTON_TYPES.SPECIAL, value: '+/-' },
  { type: BUTTON_TYPES.NUMBER, value: '0' },
  { type: BUTTON_TYPES.SPECIAL, value: '.' },
  { type: BUTTON_TYPES.SPECIAL, value: '=' }
]
