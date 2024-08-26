import React from "react";
import x from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={x.footer}>
      <div>
        <div className={x.content_footer}>
          <article className={x.div_link}>
            <div>
              <strong>Logo</strong>
              <p>tienda virtual 2024</p>
            </div>
            <div className={x.link}>
              <div className={x.item}>
                <h5>Categorias</h5>
                <span className="text-slate-500">ropa</span>
                <span className="text-slate-500">electrodomesticos</span>
                <span className="text-slate-500">Calzados</span>
              </div>
              <div className={x.item}>
                <h5>Categorias</h5>
                <span className="text-slate-500">ropa</span>
                <span className="text-slate-500">electrodomesticos</span>
                <span className="text-slate-500">Calzados</span>
              </div>
            </div>
            <div>redes sociales</div>
          </article>
        </div>
        <article className={x.item_footer}>
          2024 Ecommerce - All Rights Reserved
        </article>
      </div>
    </footer>
  );
}
