/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/users",
        destination: "/login",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;


// Here i use redirect technology in config file
