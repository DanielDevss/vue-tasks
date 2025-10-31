// Calculos
export const caculatePercent = (total: number, complete: number) => {
  const percent = total > 0 ? (complete / total) * 100 : 0;
  const formatter = new Intl.NumberFormat("es-MX", {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(percent);
};

// Normalizador
export const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();

// Mensajes para tarjetas de motivación
export const getMessageProgress = (percent: number, total: number) => {
  let config = {
    color: "amber",
    title: "¡Apenas comenzamos! 😖",
    message: "Queda mucho por hacer... pero cada paso cuenta. ¡Vamos con todo!",
  };

  if (total === 0) {
    config.color = "grey";
    config.title = "Sin tareas aún 💤";
    config.message =
      "No hay tareas por ahora. Agrega una para comenzar tu progreso.";
  } else if (percent > 0 && percent <= 50) {
    config.color = "orange";
    config.title = "¡Buen inicio! 💪";
    config.message = "Ya avanzaste, sigue constante y verás resultados pronto.";
  } else if (percent > 50 && percent <= 80) {
    config.color = "yellow";
    config.title = "¡Más de la mitad! 😎";
    config.message =
      "Estás avanzando muy bien, mantén el ritmo que ya casi llegas.";
  } else if (percent > 80 && percent < 100) {
    config.color = "blue";
    config.title = "¡Casi lo logras! 🔥";
    config.message = "Solo un poco más y lo habrás completado. ¡Tú puedes!";
  } else if (percent === 100) {
    config.color = "success";
    config.title = "¡Completado! 🥳";
    config.message =
      "Todo está terminado. Excelente trabajo, disfruta el logro.";
  }

  return config;
};
