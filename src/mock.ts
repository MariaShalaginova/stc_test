import { Label } from "./Types/types";

export const MOCK_TEXT = `Генеральному директору 
ООО "ААА"
Иванову ВВ
от траткориста 
Петрова ВВ

Заявление

Прошу предоставить мне ежегодный оплачиваемый
отпуск с "1" октября 2025 г. по "28" октября 2025 г.
сроком на 28 календарный дней.

________________ /Петров ВВ/

20 августа 2025 г.`;

export const MOCK_LABELS: Label[] = [
  { label: "ФИО", color: "lightgreen" },
  { label: "Дата", color: "lightblue" },
  { label: "Тип", color: "red" },
];
