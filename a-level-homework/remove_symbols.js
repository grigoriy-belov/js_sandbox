function removeSymbols(text, startCharCode, endCharCode) {
  
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) > startCharCode || text.charCodeAt(i) < endCharCode) {
                text = text.slice(0, i) + text.slice(i+1, text.length);
                i--;
        }
    }
    return text;
  }
  
  console.log(removeSymbols("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик", 1103, 1040));
  