/**
 * Site-wide background: layered radial glows, two slowly drifting light
 * blobs and a grain overlay. Rendered once in the root layout so every
 * page shares it; colors come from the theme tokens in globals.css.
 */
export default function Backdrop() {
  return (
    <div aria-hidden className="site-backdrop">
      <div className="site-backdrop__blob site-backdrop__blob--a" />
      <div className="site-backdrop__blob site-backdrop__blob--b" />
      <div className="site-backdrop__grain" />
    </div>
  );
}
