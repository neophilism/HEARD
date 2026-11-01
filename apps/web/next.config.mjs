/** Public-only engineering shell. No intake, private data or server actions. */
const config = {
  output: 'export',
  poweredByHeader: false,
  trailingSlash: true,
  experimental: { cpus: 2 },
};
export default config;
