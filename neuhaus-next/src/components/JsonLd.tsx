/**
 * Inyecta datos estructurados en el HTML del servidor.
 * Server Component: el JSON-LD viaja en el HTML inicial, que es justamente
 * donde lo buscan Google y los crawlers de IA (que no ejecutan JavaScript).
 */
const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    // El contenido es nuestro, no viene de input de usuario.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
