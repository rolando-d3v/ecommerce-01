export const colorStyles = {
  control: (base, state) => ({
    ...base,
    background: "#fcfbfc",
    cursor: "pointer",
    fontSize: 12,
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      background: "#e3f8ec",
    },
  }),

  placeholder: (styles) => ({
    ...styles,
    color: "#000",
    fontSize: 14,
  }),

  input: (styles) => ({
    ...styles,
    color: "#000",
    
   
  }),

  singleValue: (styles ,base) => ({
    ...base,
    ...styles,
    padding: 2,
    borderRadius: 4,
    fontWeight: 700,
    color: '#61bf84',
    display: 'flex',
    fontSize: 14,
    textTransform: "capitalize",
  }),


  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: 12,
    fontWeight: 700,
  }),

  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor:"#6cf4bb",
    };
  },

  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #eee",
    color: state.isSelected ? "red" : "#000",
    background: "#ffffff80",
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: 600,
    background: state.isSelected ? "#ccc" : "transparent",
    color: state.isSelected ? "red" : "#000",
    cursor: "pointer",
    "&:hover": {
      background: state.isSelected ? "#766ac8" : "#c2e7ff",
      color: state.isSelected ? "#fff" : "#000",
    },
  }),

  menuList: (styles) => ({
    ...styles,
    background: "#fff",

    "::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
    },
    "::-webkit-scrollbar-track": {
      background: "#000",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "25px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
};













export const colorStylesPrioridad = {
  control: (base, state) => ({
    ...base,
    background: "#fcfbfc",
    cursor: "pointer",
    fontSize: 12,
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      background: "#e3f8ec",
    },
  }),


  placeholder: (styles) => ({
    ...styles,
    color: "#000",
  }),

  input: (styles) => ({
    ...styles,
    color: "#000",
   
  }),

  singleValue: (styles ,base) => ({
    ...base,
    ...styles,
    padding: 2,
    borderRadius: 4,
    fontWeight: 700,
    color: '#61bf84',
    display: 'flex',
    fontSize: 11,
  }),


  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #eee",
    color: state.isSelected ? "red" : "#000",
    background: state.isSelected ? "#766ac8" : "transparent",
    fontSize: 9,
    color: state.isSelected ? "#fff" : "#000",
    cursor: "pointer",
    "&:hover": {
      background: state.isSelected ? "#766ac8" : "#c2e7ff",
      color: state.isSelected ? "#fff" : "#000",
    },
  }),

  menuList: (styles) => ({
    ...styles,
    background: "#fff",

    "::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
    },
    "::-webkit-scrollbar-track": {
      background: "#000",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "25px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
};
