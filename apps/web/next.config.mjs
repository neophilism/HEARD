/** Public-only engineering shell. No intake, private data or server actions. */
const config = {
  output: 'export',
  generateBuildId: async () => process.env.HEARD_BUILD_SHA ?? 'local-preview',
  poweredByHeader: false,
  trailingSlash: true,
  experimental: { cpus: 2 },
};
export default config;
