import React from 'react';

const ColorPalette = () => {
  const colors = {
    greys: [
      { name: 'grey-50', hex: '#fafaf8', usage: 'Fondo primario' },
      { name: 'grey-100', hex: '#f5f5f3', usage: 'Fondo alternativo' },
      { name: 'grey-200', hex: '#f0f0ee', usage: 'Fondo terciario' },
      { name: 'grey-300', hex: '#e8e8e8', usage: 'Bordes' },
      { name: 'grey-600', hex: '#7a7a7a', usage: 'Texto secundario' },
      { name: 'grey-700', hex: '#5a5a5a', usage: 'Texto regular' },
      { name: 'grey-900', hex: '#2c2c2c', usage: 'Texto primario' },
    ],
    beiges: [
      { name: 'beige-50', hex: '#fdfbf9', usage: 'Fondo cálido claro' },
      { name: 'beige-100', hex: '#f9f7f4', usage: 'Fondo cálido' },
      { name: 'beige-200', hex: '#f0ebe5', usage: 'Fondo secundario' },
      { name: 'beige-400', hex: '#d4c4b0', usage: 'Acento sutil' },
    ],
    golds: [
      { name: 'gold-100', hex: '#fdf3e8', usage: 'Hover backgrounds' },
      { name: 'gold-300', hex: '#f0dcc0', usage: 'Light hover' },
      { name: 'gold-400', hex: '#e8c8a0', usage: 'Light accent' },
      { name: 'gold-500', hex: '#d4a574', usage: '⭐ PRIMARY ACCENT' },
      { name: 'gold-600', hex: '#c9975f', usage: 'Medium' },
      { name: 'gold-700', hex: '#b8935a', usage: 'Dark accent' },
      { name: 'gold-900', hex: '#6b5237', usage: 'Very dark' },
    ],
  };

  const ColorSwatch = ({ name, hex, usage }) => (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-grey-300 hover:border-gold-500 transition-colors">
      <div
        className="w-20 h-20 rounded-lg shadow-sm flex-shrink-0 border"
        style={{ backgroundColor: hex, borderColor: '#e8e8e8' }}
        title={hex}
      />
      <div className="flex-1">
        <p className="font-semibold text-grey-900">{name}</p>
        <p className="text-sm text-grey-600 font-mono">{hex}</p>
        <p className="text-xs text-grey-700 mt-1">{usage}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-grey-900 mb-2">
          Paleta de Colores
        </h1>
        <p className="text-grey-700">
          Branding Clínica Dental Cabello - Materiales EGGER
        </p>
      </header>

      {/* Grises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-grey-900 mb-6 pb-4 border-b-2 border-gold-500">
          Grises - Neutros
        </h2>
        <div className="grid gap-4">
          {colors.greys.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </section>

      {/* Beiges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-grey-900 mb-6 pb-4 border-b-2 border-gold-500">
          Beiges - Cálidos
        </h2>
        <div className="grid gap-4">
          {colors.beiges.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </section>

      {/* Dorados */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-grey-900 mb-6 pb-4 border-b-2 border-gold-500">
          Dorados - Acentos Premium ✨
        </h2>
        <div className="grid gap-4">
          {colors.golds.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </section>

      {/* Ejemplos de uso */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-grey-900 mb-6 pb-4 border-b-2 border-gold-500">
          Ejemplos de Uso
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CTA Button */}
          <div>
            <h3 className="text-lg font-semibold text-grey-900 mb-4">
              Botón Principal (CTA)
            </h3>
            <button className="w-full bg-gold-500 text-white font-semibold py-3 rounded-lg hover:bg-gold-600 transition-colors shadow-md">
              Agendar Cita
            </button>
          </div>

          {/* Secondary Button */}
          <div>
            <h3 className="text-lg font-semibold text-grey-900 mb-4">
              Botón Secundario
            </h3>
            <button className="w-full bg-grey-100 text-grey-900 font-semibold py-3 rounded-lg border border-grey-300 hover:bg-grey-200 transition-colors">
              Más Información
            </button>
          </div>

          {/* Card */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-grey-900 mb-4">
              Tarjeta (Card)
            </h3>
            <div className="bg-beige-50 border border-grey-300 rounded-lg p-6">
              <h4 className="text-lg font-bold text-grey-900 mb-2">
                Tratamiento Premium
              </h4>
              <p className="text-grey-700 mb-4">
                Descripción del tratamiento con detalle y características especiales.
              </p>
              <button className="text-gold-500 font-semibold hover:text-gold-600">
                Conocer más →
              </button>
            </div>
          </div>

          {/* Alert Box */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-grey-900 mb-4">
              Alerta/Información
            </h3>
            <div className="bg-gold-100 border-l-4 border-gold-500 p-4 rounded">
              <p className="text-grey-900 font-semibold">Información importante</p>
              <p className="text-grey-700 text-sm mt-1">
                Este es un ejemplo de cómo se vería una notificación o alerta usando la paleta de colores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copy Utilities */}
      <section>
        <h2 className="text-2xl font-bold text-grey-900 mb-6 pb-4 border-b-2 border-gold-500">
          Clases Tailwind Útiles
        </h2>
        <div className="bg-grey-100 p-6 rounded-lg font-mono text-sm text-grey-900">
          <p>{'<!-- Texto -->'}</p>
          <p>{'text-grey-900  // Encabezados'}</p>
          <p>{'text-grey-700  // Cuerpo'}</p>
          <p className="mt-4">{'<!-- Fondos -->'}</p>
          <p>{'bg-grey-50      // Principal'}</p>
          <p>{'bg-beige-50     // Cálido'}</p>
          <p>{'bg-gold-500     // Acento'}</p>
          <p className="mt-4">{'<!-- Bordes -->'}</p>
          <p>{'border-grey-300 // Normal'}</p>
          <p>{'border-gold-500 // Acento'}</p>
        </div>
      </section>
    </div>
  );
};

export default ColorPalette;
