/* eslint-disable prettier/prettier */
// prettier-ignore
const MAP: Record<string, string> = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'ye', 'ё': 'yo',
  'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
  'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
  'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '',
  'ы': 'i', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
};
/* eslint-enable prettier/prettier */

export default function translit(str: string): string {
  return str
    .split('') // eslint-disable-line unicorn/prefer-spread
    .map((char) => {
      const loweredChar = char.toLowerCase();

      const converted = MAP[loweredChar] || char;

      if (char === loweredChar) {
        return converted.toLowerCase();
      }

      return converted[0].toUpperCase() + converted.slice(1);
    })
    .join('');
}
