// replaceFontElements


export const replaceFontElements = (number, styleName, styleValue) => {
  document.execCommand("fontSize", false, `${number}`);

  let editableBlock = document.querySelector(".content"); // блок, текст в котором можно редактировать
  let fontElements = editableBlock.getElementsByTagName("font"); // все элементы, у которых изменился размер шрифта

  for (let i = 0; i < fontElements.length; i++) {
    if (fontElements[i].size == number) {
      fontElements[i].removeAttribute("size"); // удалить установленное значение
      fontElements[i].style = `${styleName}: ${styleValue}`; // установить новый размер шрифта
    }
  }
}