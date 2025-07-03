function lyricsGenerator(beats) {
  let result = "";
  let dropCounter = 0;

  for (let i = 0; i < beats.length; i++) {
    if (beats[i] === 0) {
      result += "Boom ";
      dropCounter = 0; // reinicia el conteo de drops
    } else if (beats[i] === 1) {
      result += "Drop the bass ";
      dropCounter++;
      if (dropCounter === 3) {
        result += "¡¡¡Break the bass!!! ";
        dropCounter = 0; // reinicia después del corte
      }
    }
  }

  return result.trim(); // quita espacio final
}
