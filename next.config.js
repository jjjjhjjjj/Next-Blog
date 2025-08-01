/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Next-Blog" : "",
  assetPrefix: isProd ? "/Next-Blog/" : "",
};

module.exports = nextConfig;
