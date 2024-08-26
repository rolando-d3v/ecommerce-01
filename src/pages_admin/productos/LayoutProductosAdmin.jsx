import React from "react";
import css from "./productos.module.scss";
import Select from "react-select";
import { useAllCategoria } from "../../api_ecommerce/apiCategoria";
import { useAllMarca } from "../../api_ecommerce/apiMarca";

import { colorStyles } from "./style_select";

export default function LayoutProductosAdmin() {
  const CATEGORIAS = useAllCategoria();
  const MARCA = useAllMarca();

  console.log(MARCA.data);
  console.log(CATEGORIAS.data);

  const categorias = CATEGORIAS?.data?.map((r) => {
    return {
      value: r.id_categoria_i,
      label: r.name_small_v,
    };
  });

  const marca = MARCA?.data?.map((r) => {
    return {
      value: r.id_marca_i,
      label: r.name_v,
    };
  });

  return (
    <div className={css.producto}>
      <h4 className={css.title}>Registrar Producto</h4>

      <div className={css.content_form}>
        <article className={css.div_nombre}>
          <div className={css.box}>
            <div className={css.input__wrapper}>
              <input
                id="nombre"
                type="text"
                className={css.input__field}
                placeholder="Your Password"
              />
              <label for="nombre" className={css.input__label}>
                Nombre de Producto
              </label>
            </div>
          </div>

          <div className={css.box}>
            <div className={css.input__wrapper}>
              <input
                id="precio"
                type="number"
                className={css.input__field}
                placeholder="Your Password"
              />
              <label for="precio" className={css.input__label}>
                Precio de Producto
              </label>
            </div>
          </div>
        </article>

        <div className={`${css.box} ${css.descripcion}  `}>
          <div className={css.input__wrapper}>
            <input
              id="descripcion"
              type="text"
              className={css.input__field}
              placeholder="Your Password"
            />
            <label for="descripcion" className={css.input__label}>
              Descripcion de Producto
            </label>
          </div>
        </div>

        <article className={css.div_nombre}>
          <div className={css.box}>
            <div className={css.input__wrapper}>
              <input
                id="stock"
                type="number"
                className={css.input__field}
                placeholder="Your Password"
              />
              <label for="stock" className={css.input__label}>
                Stock
              </label>
            </div>
          </div>

          <div className={css.box}>
            <Select
              className="basic-single"
              classNamePrefix="select"
              styles={colorStyles}
              // onChange={obtenerSelectDepa}
              isClearable={true}
              isSearchable={true}
              name="color"
              options={marca}
              placeholder="Selecciona Marca"
              // value={categorias}
            />
          </div>

          <div className={css.box}>
            <Select
              className="basic-single"
              classNamePrefix="select"
              styles={colorStyles}
              // onChange={obtenerSelectDepa}
              isClearable={true}
              isSearchable={true}
              name="color"
              options={categorias}
              placeholder="Selecciona Categorias"
              // value={categorias}
            />
          </div>
        </article>

        <div className={`${css.box} ${css.descripcion}  `}>
          <div className={css.input__wrapper}>
            <input
              id="descripcion"
              type="file"
              className={css.input__field}
              placeholder="Your Password"
            />
            <label for="descripcion" className={css.input__label}>
              Descripcion de Producto
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}
