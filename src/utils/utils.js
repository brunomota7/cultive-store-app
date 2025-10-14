
export const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("pt-BR");
};

export const formtCategory = (rawCategory) => {
  if (!rawCategory) return "";

  const categoryMap = {
    HORTALICAS: "hortaliças",
    FRUTAS: "frutas",
    LEGUMES: "legumes",
    GRAOS_CEREAIS: "grãos e cereais",
    TUBERCULOS: "tubérculos",
    ERVAS_TEMPEROS: "ervas e temperos",
    DERIVADOS: "derivados",
    OVOS_LATICINIOS: "ovos e laticínios",
    PLANTAS_MUDAS: "plantas e mudas",
  };

  const formatted =
    categoryMap[rawCategory.toUpperCase()] || rawCategory.toLowerCase();

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
